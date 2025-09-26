import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";

import "./styles/DisplayProduct.css";
import "./styles/ShopProduct.css";

function ShopProduct() {
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

      <div>

        <div className="displayProduct-grid">

          {/* Product 1 */}
          <div className="displayProduct-item">
            <div className="displayProduct-image-container">
  
              <img className="displayProduct-image" src="/images/products/product-01.jpg" alt="product image" />
  
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>
  
            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Zen Bamboo Grove</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$90.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="displayProduct-item">
            <div className="displayProduct-image-container">
              <img className="displayProduct-image" src="/images/products/product-02.jpg" alt="product image" />
  
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>

            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar  className="displayProduct-stars"/><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Starlight Succulent</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$95.00</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="displayProduct-item">
  
            <div className="displayProduct-image-container">
              <img className="displayProduct-image" src="/images/products/product-03.jpg" alt="product image" />
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>
  
            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Silver Mist</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$92.00</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="displayProduct-item">
  
            <div className="displayProduct-image-container">
              <img className="displayProduct-image" src="/images/products/product-05.jpg" alt="product image" />
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>
  
            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Dessert Bloom</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$70.00</p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="displayProduct-item">
  
            <div className="displayProduct-image-container">
              <img className="displayProduct-image" src="/images/products/product-04.jpg" alt="product image" />
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>
  
            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Tropical Breeze</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$92.00</p>
            </div>
          </div>

          {/* Product 6 */}
          <div className="displayProduct-item">
  
            <div className="displayProduct-image-container">
              <img className="displayProduct-image" src="/images/products/outdoor-plant.jpg" alt="product image" />
              <div className="displayProduct-cart-container">
                <div className="displayProduct-cart-tooltip">
                  Add to cart
                </div>
                <GiShoppingBag className="displayProduct-image-cart" />
              </div>
            </div>
  
            <div className="displayProduct-description">
              <CiStar /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" /><CiStar className="displayProduct-stars" />
              <p className="displayProduct-name">Golden Glow</p>
              <p className="displayProduct-type">Indoor Plants</p>
              <p className="displayProduct-price">$85.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopProduct;