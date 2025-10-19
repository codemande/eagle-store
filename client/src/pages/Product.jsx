import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import useCart from "../context/useCart";
import Header from "../components/Header";
import "./styles/pages-section.css";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import "./styles/Product.css";

function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products/${slug}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [slug]);


  if (loading)
    return <div className="container" style={{ padding: "2rem 0" }}>Loading product...</div>;

  if (error)
    return <div className="container" style={{ padding: "2rem 0", color: "red" }}>{error}</div>;

  if (!product)
    return <div className="container" style={{ padding: "2rem 0" }}>Product not found.</div>;

  return(
    <div>
      
      <header className="pages-header" style={{backgroundImage: "url(/slug-header.webp)"}}>
        <div className="pages-header-overlay">
          <Header/>
          <div className="pages-title-container">
            <h1>PRODUCT VIEW</h1>
            <p>{product.name} looks lovely</p>
          </div>
        </div>
      </header>

      <Link to="/shop" className="product-details-back-link product-info-btn" >
        ← Back to Shop
      </Link>


      <div className="product-details-container">
        {/* Product Image */}
        <div className="product-details-image-container">

          <img
            src={product.image}
            alt={product.name}
            className="product-details-image"
          />
        </div>

        {/* Product Info */}
        <div className="product-info-container">

          <h2 className="product-info-name">{product.name}</h2>

          <p className="product-info-price">
            ${product.price.toLocaleString()}
          </p>

          <p className="product-info-description">{product.description}</p>

          {/* Quantity Selector */}
          <div className="product-info-qty">

            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="product-info-btn"> – </button>

            <span className="product-info-qty-count">{qty}</span>

            <button onClick={() => setQty((q) => q + 1)} className="product-info-btn">+</button>
          </div>

          <button className="product-info-btn" onClick={() => addToCart(product, qty)}>
            Add {qty} to Cart
          </button>
        </div>
      </div>

      <HomeDivider2/>
      <Footer/>

    </div>
  )
}

export default Product;