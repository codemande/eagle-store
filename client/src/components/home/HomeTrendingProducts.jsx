import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import "./styles/DisplayProduct.css";

function HomeTrendingProducts() {
 
  return(
    <div className="displayProduct-container">

      <h2 className="displayProduct-title">Trending Products</h2>

      <div className="displayProduct-grid">

        <div>
          <div className="displayProduct-image-container">

            <img className="displayProduct-image" src="/images/products/product-01.jpg" alt="product image" />

            <div className="displayProduct-cart-container">
              <div className="displayProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="displayProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
            <p className="displayProduct-name">Zen Bamboo Grove</p>
            <p className="displayProduct-type">Indoor Plants</p>
            <p className="displayProduct-price">$90.00</p>
          </div>
        </div>

        <div>
          <div className="displayProduct-image-container">
            <img className="displayProduct-image" src="/images/products/product-02.jpg" alt="product image" />

            <div className="displayProduct-cart-container">
              <div className="displayProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="displayProduct-image-cart" />
            </div>
          </div>
          <div>
            <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar  className="displayProduct-stars"/><CiStar className="displayProduct-stars" />
            <p className="displayProduct-name">Starlight Succulent</p>
            <p className="displayProduct-type">Indoor Plants</p>
            <p className="displayProduct-price">$95.00</p>
          </div>
        </div>

        <div>

          <div className="displayProduct-image-container">
            <img className="displayProduct-image" src="/images/products/product-03.jpg" alt="product image" />
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

export default HomeTrendingProducts;