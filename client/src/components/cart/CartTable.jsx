import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import "./styles/CartTable.css"
import CartTotals from "./CartTotals";

function CartTable() {
  return(
    <div className="cartTable-container">
      <h1 className="cartTable-header">Cart</h1>

      <table className="cartTable-table cartTable-desktop">
        <thead className="cartTable-head-row">
          <tr className="cartTable-head-row">
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cartTable-remove">
                <CloseIcon style={{fontSize: "small", color: "#ddd"}}/>
              </div>
            </td>
            <td><img src="/images/products/product-01.jpg" className="cartTable-image" /></td>
            <td className="cartTable-product-name"> Bamboo Grove</td>
            <td>$90.00</td>

            <td>
              <button className="cartTable-quantity-btn" style={{marginRight:"5px"}}>-</button>
              <span>1</span>
              <button className="cartTable-quantity-btn" style={{marginLeft:"5px"}}>+</button>
            </td>

            <td>$90.00</td>
          </tr>
        </tbody>
      </table>


      <div className="cartTable-mobile">
        <div className="cartTable-mobile-left">
          <div className="cartTable-mobile-image-container">
            <img src="/images/products/product-01.jpg" className="cartTable-image" />
          </div>
          <div className="cartTable-mobile-name-container">
            <p className="cartTable-product-name">Bamboo Grove</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="cartTable-mobile-remove-container">
          <div className="cartTable-remove">
            <CloseIcon style={{fontSize: "small", color: "#ddd", }}/>
          </div>
          <div>
            <button className="cartTable-mobile-quantity-btn">-</button>
            <span className="cartTable-mobile-quantity-count">10</span>
            <button className="cartTable-mobile-quantity-btn">+</button>
          </div>
        </div>
      </div>








      <div className="cartTable-mobile">
        <div className="cartTable-mobile-left">
          <div className="cartTable-mobile-image-container">
            <img src="/images/products/product-01.jpg" className="cartTable-image" />
          </div>
          <div className="cartTable-mobile-name-container">
            <p className="cartTable-product-name">Bamboo Grove</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="cartTable-mobile-remove-container">
          <div className="cartTable-remove">
            <CloseIcon style={{fontSize: "small", color: "#ddd", }}/>
          </div>
          <div>
            <button className="cartTable-mobile-quantity-btn">-</button>
            <span className="cartTable-mobile-quantity-count">10</span>
            <button className="cartTable-mobile-quantity-btn">+</button>
          </div>
        </div>
      </div>
      <div className="cartTable-mobile">
        <div className="cartTable-mobile-left">
          <div className="cartTable-mobile-image-container">
            <img src="/images/products/product-01.jpg" className="cartTable-image" />
          </div>
          <div className="cartTable-mobile-name-container">
            <p className="cartTable-product-name">Bamboo Grove</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="cartTable-mobile-remove-container">
          <div className="cartTable-remove">
            <CloseIcon style={{fontSize: "small", color: "#ddd", }}/>
          </div>
          <div>
            <button className="cartTable-mobile-quantity-btn">-</button>
            <span className="cartTable-mobile-quantity-count">10</span>
            <button className="cartTable-mobile-quantity-btn">+</button>
          </div>
        </div>
      </div>
      <div className="cartTable-mobile">
        <div className="cartTable-mobile-left">
          <div className="cartTable-mobile-image-container">
            <img src="/images/products/product-01.jpg" className="cartTable-image" />
          </div>
          <div className="cartTable-mobile-name-container">
            <p className="cartTable-product-name">Bamboo Grove</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="cartTable-mobile-remove-container">
          <div className="cartTable-remove">
            <CloseIcon style={{fontSize: "small", color: "#ddd", }}/>
          </div>
          <div>
            <button className="cartTable-mobile-quantity-btn">-</button>
            <span className="cartTable-mobile-quantity-count">10</span>
            <button className="cartTable-mobile-quantity-btn">+</button>
          </div>
        </div>
      </div>



      <CartTotals/>

    </div>
  )
}

export default CartTable;