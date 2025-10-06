import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import pool from './db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Multer setup for uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Make uploads folder public
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Route: Add product
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const imagePath = `/uploads/${req.file.filename}`;

    const result = await pool.query(
      "INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, imagePath]
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