import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

import pool from './db.js';

async function seed() {
  // Load products.json
  const products = JSON.parse(fs.readFileSync("./products.json", "utf8"));

  for (const product of products) {
    const { name, slug, description, price, image } = product;
    const imagePath = `/uploads/${image}`;

    await pool.query(
      "INSERT INTO products (name, slug, description, price, image) VALUES ($1, $2, $3, $4, $5)",
      [name, slug, description, price, imagePath]
    );

    console.log(`Inserted: ${name} (${imagePath})`);
  }

  await pool.end();
}

seed().catch(err => {
  console.error("Error seeding products:", err);
  pool.end();
});
