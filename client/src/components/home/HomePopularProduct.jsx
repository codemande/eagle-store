import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import useCart from "../../context/useCart";
import "./styles/DisplayProduct.css";

function HomePopularProduct() {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  const [params] = useSearchParams();
  const q = params.get("query") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

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
    <div className="displayProduct-container">

      <h2 className="displayProduct-title">Popular Products</h2>

      <div className="displayProduct-grid">

        {!loading &&
          !error &&
          items.slice(0, 3).map((p) => {
            return (
              <div>
                <div className="displayProduct-image-container">

                  <img className="displayProduct-image" src={ p.image.startsWith("http") ? p.image : `http://localhost:4100${p.image}`} alt={p.name} />

                  <div className="displayProduct-cart-container">
                    <div className="displayProduct-cart-tooltip">
                      Add to cart
                    </div>
                    <GiShoppingBag className="displayProduct-image-cart" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(p) 
                      }} />
                  </div>
                </div>

                <div>
                  <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
                  <p className="displayProduct-name">{p.name}</p>
                  <p className="displayProduct-type">{p.description}</p>
                  <p className="displayProduct-price">${p.price.toLocaleString()}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePopularProduct;