import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import useCart from "../../context/useCart";
import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./styles/DisplayProduct.css";
import "./styles/ShopProduct.css";

function ShopProduct() {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  const [params] = useSearchParams();
  const q = params.get("query") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false); // state for added to cart notification
  const [timer, setTimer] = useState(null); // clear add to cart notification
  const { addToCart } = useCart();

  function addIconClick() {
    //reset timer if already showing
    if (timer) clearTimeout(timer); 
    setShowPopUp(true);

    const newTimer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

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
    setLoading(true);
    setError(null);

    axios
      .get(`${API_BASE_URL}/api/products`, { params: { query: q } })
      .then((res) => setItems(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [q]);

  return(
    <div className="shopProduct-container">

      <div className="shopProduct-select-container">
        <p className="shopProduct-count">Showing all 6 results</p>
        <select name="" id="" className="shopProduct-select">
          <option value="">Default sorting</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by average rating</option>
          <option value="">Sort by latest</option>
          <option value="">Sort by price: low to high</option>
          <option value="">Sort by price: high to low</option>
        </select>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>

        <div className="displayProduct-grid">

          {/* Add to cart notification */}
          {showPopUp && (
            <div className="addtocart-notification">Added Successfully <MdClose onClick={removePopUp} className="addtocart-notification-close"/></div>
          )}

          {!loading && 
            !error &&
            items.map((p) => {
              return (
                <Link to={`/product/${p.slug}`} className="displayProduct-item" key={p.id}>
                  <div className="displayProduct-image-container">
        
                    <img className="displayProduct-image" src={ p.image.startsWith("http") ? p.image : `${import.meta.env.VITE_API_URL || "http://localhost:4100"}${p.image}`} alt={p.name} />
        
                    <div className="displayProduct-cart-container">
                      <div className="displayProduct-cart-tooltip">
                        Add to cart
                      </div>
                      <GiShoppingBag className="displayProduct-image-cart" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(p) 
                        addIconClick()
                      }}/>
                    </div>
                  </div>
        
                  <div className="displayProduct-description">
                    <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
                    <p className="displayProduct-name">{p.name}</p>
                    <p className="displayProduct-type">{p.description}</p>
                    <p className="displayProduct-price">${p.price.toLocaleString()}</p>
                  </div>
                </Link>
              )
            })
          }
        </div> 
      </div>
    </div>
  )
}

export default ShopProduct;