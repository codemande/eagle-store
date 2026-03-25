import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import useCart from "../../context/useCart";
import { getProducts } from "../../services/productService";
import "./styles/DisplayProduct.css";

function HomeTrendingProducts() {

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
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts(q);
        setItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [q]);
 
  return(
    <div className="displayProduct-container">

      <h2 className="displayProduct-title">Trending Products</h2>

      <div className="displayProduct-grid">

        {/* Add to cart notification */}
        {showPopUp && (
          <div className="addtocart-notification">Added Successfully <MdClose onClick={removePopUp} className="addtocart-notification-close"/></div>
        )}

        {!loading &&
          !error &&
          items.slice(items.length - 3).map((p) => {
            return (
              <div>
                <Link to={`/product/${p.slug}`} className="displayProduct-item" key={p._id}>
                  <div className="displayProduct-image-container">

                    <img className="displayProduct-image" src={ p.image } alt={p.name} />

                    <div className="displayProduct-cart-container">
                      <div className="displayProduct-cart-tooltip">
                        Add to cart
                      </div>
                      <GiShoppingBag className="displayProduct-image-cart" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(p) 
                          addIconClick()
                        }} />
                    </div>
                  </div>

                  <div>
                    <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
                    <p className="displayProduct-name">{p.name}</p>
                    <p className="displayProduct-price">${p.price.toLocaleString()}</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomeTrendingProducts;