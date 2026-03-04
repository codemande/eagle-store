import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { upload } from "./cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4100;
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Serve images
app.use('/images', express.static(path.join(process.cwd(), 'uploads/images')));

console.log("Serving images from /uploads/images");

// File paths
const productsFile = path.join(process.cwd(), "products.json");
const usersFile = path.join(process.cwd(), "users.json");

// Helper functions
function readJSON(file) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Middleware to protect routes
function verifyUser(req, res, next) {
  const token = req.cookies.userToken;
  if (!token) return res.status(401).json({ error: "Not authorized" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(403).json({ error: "Invalid token" });
  }
}

/* ===========================
   PRODUCTS ROUTES
=========================== */

// Get all products
app.get("/api/products", (req, res) => {
  try {
    const q = (req.query.query || "").toLowerCase();
    let products = readJSON(productsFile);

    if (q) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(q)
      );
    }

    products.sort((a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
    );

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get product by slug
app.get("/api/products/:slug", (req, res) => {
  try {
    const products = readJSON(productsFile);
    const product = products.find(p => p.slug === req.params.slug);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add product
app.post("/api/products", upload.single("image"), (req, res) => {
  try {
    const { name, slug, description, price } = req.body;

    if (!name || !slug || !description || !price) {
      return res.status(400).json({ error: "All fields required" });
    }

    const products = readJSON(productsFile);

    let imagePath = "";

    if (req.file?.filename) {
      imagePath = `/images/${req.file.filename}`;
    }

    const newProduct = {
      id: Date.now(),
      name,
      slug,
      description,
      price: Number(price),
      image: imagePath,
      created_at: new Date().toISOString()
    };

    products.push(newProduct);
    writeJSON(productsFile, products);

    res.status(201).json(newProduct);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

/* ===========================
   USER ROUTES (JSON Based)
=========================== */

// Register
app.post("/api/users/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields required" });
  }

  const users = readJSON(usersFile);

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    name,
    email,
    phone,
    password: hashedPassword
  };

  users.push(newUser);
  writeJSON(usersFile, users);

  const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("userToken", token, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.status(201).json({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone
  });
});

// Login
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  const users = readJSON(usersFile);
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("userToken", token, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone
  });
});

// Logout
app.post("/api/users/logout", (req, res) => {
  res.clearCookie("userToken");
  res.json({ message: "Logged out" });
});

// Profile
app.get("/api/users/profile", verifyUser, (req, res) => {
  const users = readJSON(usersFile);
  const user = users.find(u => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone
  });
});

/* ===========================
   START SERVER
=========================== */

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});