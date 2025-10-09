import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Folder path for local images
const uploadsDir = path.join(process.cwd(), "uploads", "images", "products");

async function migrateImages() {
  try {
    const files = fs.readdirSync(uploadsDir);
    console.log(`Found ${files.length} files in uploads/images/products/`);

    for (const file of files) {
      const filePath = path.join(uploadsDir, file);

      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        console.log(`Skipping folder: ${file}`);
        continue;
      }

      const ext = path.extname(file).toLowerCase();
      const allowed = [".jpg", ".jpeg", ".png", ".webp"];

      if (!allowed.includes(ext)) {
        console.log(`Skipping non-image file: ${file}`);
        continue;
      }

      // Upload image to Cloudinary
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: "eagle_store/products",
        });

        console.log(`Uploaded ${file}: ${result.secure_url}`);

        // Update the product record that used to reference this local file
        await pool.query(
          "UPDATE products SET image = $1 WHERE image LIKE $2",
          [result.secure_url, `%${file}`]
        );
      } catch (err) {
        console.error(`Failed to upload ${file}:`, err.message);
      }
    }

    console.log("Migration complete!");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

migrateImages();
