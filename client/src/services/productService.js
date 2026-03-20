import apiClient from "./apiClient";

// Get all products
const getProducts = async (query = "") => {
  try {
    const res = await apiClient.get("/api/v1/products", {
      params: { query },
    });

    return res.data.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Get single product by slug
const getProductBySlug = async (slug) => {
  try {
    const res = await apiClient.get(`/api/v1/products/${slug}`);
    return res.data.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export{
  getProducts,
  getProductBySlug,
}