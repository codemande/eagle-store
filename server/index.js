import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import pool from './db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { upload } from "./cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4100;

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Middleware to protect user routes
function verifyUser(req, res, next) {
  const token = req.cookies.userToken;
  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch {
    return res.status(403).json({ error: "Invalid token" });
  }
};

// Serve local uploads only when using local mode 
if (process.env.USE_CLOUDINARY !== "true") { 

  app.use("/uploads", express.static(path.join(process.cwd(), "uploads"))); 

  console.log("Serving local uploads from /uploads"); 
}

// Test database connection route
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Add product route
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, slug, description, price } = req.body;
    
    // Choose correct image URL depending on environment
    let imagePath = "";
    if (process.env.USE_CLOUDINARY === "true") {
      imagePath = req.file.path || req.file.secure_url; // Cloudinary URL
    } else if (req.file?.filename) {
      imagePath = `/uploads/${req.file.filename}`; // Local file
    }

    const result = await pool.query(
      "INSERT INTO products (name, slug, description, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, slug, description, price, imagePath]
    );

    res.json({ success: true, product: result.rows[0] });
  } catch (err) {
    console.error( "Failed to add product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Route: Get all products
app.get("/api/products", async (req, res) => {
  try{
    const q = (req.query.query || "").toLowerCase();
    let result;

    if (q) {
      result = await pool.query(
        'SELECT * FROM products WHERE LOWER(name) LIKE $1',
        [`%${q}%`]
      );
    } else {
      result = await pool.query("SELECT * FROM products ORDER BY created_at DESC");
    }

    res.json(result.rows);
  } catch (err) {
    console.error( "Failed to fetch products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get slug route
app.get('/api/products/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query(
      'SELECT * FROM products WHERE slug = $1',
      [slug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching product', err);
    res.status(500).json({ error: 'server error' });
  }
});


// User Login Route
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create a JWT token (contains user id & email)
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" } // token lasts for 1 day
    );

    // Send token as HTTP-only cookie
    res.cookie("userToken", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, // change to true in production (HTTPS)
    });

    // Send success message and user info
    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


//User Registration Route
app.post("/api/users/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const newUser = await pool.query(
      "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING id, name, email, phone",
      [name, email, phone, hashedPassword]
    );

    const savedUser = newUser.rows[0];

    // Create a token for the new user
    const token = jwt.sign(
      { id: savedUser.id, email: savedUser.email, role: "user" },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set cookie and send success response
    res.cookie("userToken", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // true if HTTPS.
    });

    return res.status(201).json({
      message: "Registration successful",
      user: { id: savedUser.id, name: savedUser.name, email: savedUser.email, phone: savedUser.phone },
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Protected route - only logged-in users can access
app.get("/api/users/profile", verifyUser, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, phone FROM users WHERE id = $1",
      [req.user.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`); 
  console.log( 
    process.env.USE_CLOUDINARY === "true" ? "Cloudinary mode active" : "Local upload mode active" 
  ); 
});