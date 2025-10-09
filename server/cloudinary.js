import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

let upload;

// Switch between Cloudinary and local
if (process.env.USE_CLOUDINARY === "true") {
  console.log(" Using Cloudinary for uploads");

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "eagle_store",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    },
  });

  upload = multer({ storage });
} else {
  console.log(" Using local uploads folder");

  const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  upload = multer({ storage });
}

export { upload, cloudinary };
