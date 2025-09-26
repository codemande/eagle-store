import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import "./styles/DisplayProduct.css";

function HomePopularProduct() {
  return(
    <div className="displayProduct-container">

      <h2 className="displayProduct-title">Popular Products</h2>

      <div className="displayProduct-grid">

        <div>
          <div className="displayProduct-image-container">
            <img className="displayProduct-image" src="/images/products/product-05.jpg" alt="product image" />

            <div className="displayProduct-cart-container">
              <div className="displayProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="displayProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
            <p className="displayProduct-name">Desert Bloom</p>
            <p className="displayProduct-type">Indoor Plants</p>
            <p className="displayProduct-price">$70.00</p>
          </div>
        </div>

        <div>
          <div className="displayProduct-image-container">
            <img className="displayProduct-image" src="/images/products/product-04.jpg" alt="product image" />

            <div className="displayProduct-cart-container">
              <div className="displayProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="displayProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
            <p className="displayProduct-name">Golden Glow</p>
            <p className="displayProduct-type">Indoor Plants</p>
            <p className="displayProduct-price">$85.00</p>
          </div>
        </div>

        <div>
          <div className="displayProduct-image-container">
            <img className="displayProduct-image" src="/images/products/product-06.jpg" alt="product image" />

            <div className="displayProduct-cart-container">
              <div className="displayProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="displayProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
            <p className="displayProduct-name">Silver Mist</p>
            <p className="displayProduct-type">Indoor Plants</p>
            <p className="displayProduct-price">$92.00</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePopularProduct;