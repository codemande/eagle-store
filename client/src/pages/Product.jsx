import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useCart from "../context/useCart";
import Header from "../components/Header";
import "./styles/pages-section.css";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import { MdClose } from "react-icons/md";
import "./styles/Product.css";
import { getProductBySlug } from "../services/productService";

function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const [showPopUp, setShowPopUp] = useState(false);
  const [timer, setTimer] = useState(null);

  function addIconClick() {
    //reset timer if already showing
    if (timer) clearTimeout(timer); 
    setShowPopUp(true);

    const newTimer = setTimeout(() => {
      setShowPopUp(false);
    }, 3000);

    setTimer(newTimer)
  }

  function removePopUp() {
    if(timer) clearTimeout(timer);
    setShowPopUp(false);
  }

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
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
            <p>{product.name} Looks Lovely</p>
          </div>
        </div>
      </header>

      {/* Add to cart notification */}
      {showPopUp && (
        <div className="addtocart-notification">Added Successfully <MdClose onClick={removePopUp} className="addtocart-notification-close"/></div>
      )}

      <div className="product-container">

        <Link to="/shop" className="product-details-back-link product-info-btn" >
          ← Back to Shop
        </Link>

        <div>

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

              <button className="product-info-btn" onClick={() => {
                addToCart(product, qty);
                addIconClick();
              }} >
                Add {qty} to Cart
              </button>
            </div>
          </div>

        </div>

      </div>

      <HomeDivider2/>
      <Footer/>

    </div>
  )
}

export default Product;