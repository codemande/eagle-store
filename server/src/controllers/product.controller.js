import { Product } from "../models/product.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

// Create Product
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, image, category, stock } = req.body;

  if(!name || !price) {
    throw new ApiError(400, "Name and Price are required");
  }

  const product = await Product.create({
    name,
    description,
    price,
    image,
    category,
    stock,
    slug: name.toLowerCase().replace(/ /g, "-")
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        product,
        "Product created successfully"
      )
    );
});

// Get all Products
const getAllProducts = asyncHandler(async(req, res) => {
  const products = await Product.find();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        products,
        "Products fetched successfully"
      )
    );
});

// Get single product by slug
const getSingleProduct = asyncHandler(async(req, res) => {
  const { slug } = req.params;

  const product = await Product.findOne({ slug });

  if(!product) {
    return new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        product,
        "Product fetched successfully"
      )
    )
})

// Update Product
const updateProduct = asyncHandler(async(req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200, 
        product, 
        "Product updated successfully"
      )
    );
});

// Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200, 
        {}, 
        "Product deleted successfully"
      )
    );
});

export{
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}