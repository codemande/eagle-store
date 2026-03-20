import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:slug", getSingleProduct);


// Protected routes (only logged-in admin)

// Create product
// router.post("/", verifyJWT, createProduct);

// Update product
// router.put("/:id", verifyJWT, updateProduct);

// Delete product
// router.delete("/:id", verifyJWT, deleteProduct);



//remove after testing
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;