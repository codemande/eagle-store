import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import pool from './db.js';
import { upload } from "./cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4100;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

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

// Start server
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`); 
  console.log( 
    process.env.USE_CLOUDINARY === "true" ? "Cloudinary mode active" : "Local upload mode active" 
  ); 
});