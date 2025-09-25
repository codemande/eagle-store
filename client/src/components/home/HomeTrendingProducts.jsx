// import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import "./styles/HomeTrendingProduct.css";

function HomeTrendingProducts() {
 
  return(
    <div className="trendingProduct-container">

      <h2 className="trendingProduct-title">Trending Products</h2>

      <div className="trendingProduct-grid">

        <div>
          <div className="trendingProduct-image-container">

            <img className="trendingProduct-image" src="../assets/products/product-01.jpg" alt="product image" />

            <div className="trendingProduct-cart-container">
              <div className="trendingProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="trendingProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" />
            <p className="trendingProduct-name">Zen Bamboo Grove</p>
            <p className="trendingProduct-type">Indoor Plants</p>
            <p className="trendingProduct-price">$90.00</p>
          </div>
        </div>

        <div>
          <div className="trendingProduct-image-container">
            <img className="trendingProduct-image" src="../assets/products/product-02.jpg" alt="product image" />

            <div className="trendingProduct-cart-container">
              <div className="trendingProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="trendingProduct-image-cart" />
            </div>
          </div>
          <div>
            <CiStar /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" /><CiStar  className="trendingProduct-stars"/><CiStar className="trendingProduct-stars" />
            <p className="trendingProduct-name">Starlight Succulent</p>
            <p className="trendingProduct-type">Indoor Plants</p>
            <p className="trendingProduct-price">$95.00</p>
          </div>
        </div>

        <div>

          <div className="trendingProduct-image-container">
            <img className="trendingProduct-image" src="../assets/products/product-03.jpg" alt="product image" />
            <div className="trendingProduct-cart-container">
              <div className="trendingProduct-cart-tooltip">
                Add to cart
              </div>
              <GiShoppingBag className="trendingProduct-image-cart" />
            </div>
          </div>

          <div>
            <CiStar /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" /><CiStar className="trendingProduct-stars" />
            <p className="trendingProduct-name">Silver Mist</p>
            <p className="trendingProduct-type">Indoor Plants</p>
            <p className="trendingProduct-price">$92.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTrendingProducts;