import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import "./styles/HomePopularProduct.css";

function HomePopularProduct() {
  return(
    <div className="homePopularProduct-container">

      <h2 className="homePopularProduct-title">Popular Products</h2>

      <div className="homePopularProduct-grid">

        <div>
          <div className="homePopularProduct-image-container">
            <img className="homePopularProduct-image" src="../../src/assets/products/product-05.jpg" alt="product image" />

            <div className="homePopularProduct-cart-container">
              <div className="homePopularProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="homePopularProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" />
            <p className="homePopularProduct-name">Desert Bloom</p>
            <p className="homePopularProduct-type">Indoor Plants</p>
            <p className="homePopularProduct-price">$70.00</p>
          </div>
        </div>

        <div>
          <div className="homePopularProduct-image-container">
            <img className="homePopularProduct-image" src="../../src/assets/products/product-04.jpg" alt="product image" />

            <div className="homePopularProduct-cart-container">
              <div className="homePopularProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="homePopularProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" />
            <p className="homePopularProduct-name">Golden Glow</p>
            <p className="homePopularProduct-type">Indoor Plants</p>
            <p className="homePopularProduct-price">$85.00</p>
          </div>
        </div>

        <div>
          <div className="homePopularProduct-image-container">
            <img className="homePopularProduct-image" src="../../src/assets/products/product-06.jpg" alt="product image" />

            <div className="homePopularProduct-cart-container">
              <div className="homePopularProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="homePopularProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" /><CiStar className="homePopularProduct-stars" />
            <p className="homePopularProduct-name">Silver Mist</p>
            <p className="homePopularProduct-type">Indoor Plants</p>
            <p className="homePopularProduct-price">$92.00</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePopularProduct;