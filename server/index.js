import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import pool from './db.js';
import { upload } from "./cloudinary.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4100;

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    "https://eagle-store-bv6e.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// Make uploads folder public
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Route: Add product
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, slug, description, price } = req.body;
    
    // Cloudinary gives req.file.path (a full https URL)
    // Local gives req.file.filename (a local file)
    let imagePath = "";

    if (req.file?.path && req.file.path.startsWith("http")) {
      imagePath = req.file.path; // Cloudinary URL
    } else if (req.file?.filename) {
      imagePath = `/uploads/${req.file.filename}`; // Local file
    }

    const result = await pool.query(
      "INSERT INTO products (name, slug, description, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, slug, description, price, imagePath]
    );

    res.json({ success: true, product: result.rows[0] });
  } catch (err) {
    console.error(err);
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
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));