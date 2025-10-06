import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import useCart from "../../context/useCart";

import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";

import "./styles/DisplayProduct.css";
import "./styles/ShopProduct.css";

function ShopProduct() {

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
      .get("http://localhost:4100/api/products", { params: { query: q } })
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

          {!loading && 
            !error &&
            items.map((p) => {
              return (
                <Link to={`/product/${p.slug}`} className="displayProduct-item">
                  <div className="displayProduct-image-container">
        
                    <img className="displayProduct-image" src={`http://localhost:4100${p.image}`} alt={p.name} />
        
                    <div className="displayProduct-cart-container">
                      <div className="displayProduct-cart-tooltip">
                        Add to cart
                      </div>
                      <GiShoppingBag className="displayProduct-image-cart" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(p) 
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