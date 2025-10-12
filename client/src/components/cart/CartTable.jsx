import { Link } from "react-router-dom";
import useCart from "../../context/useCart";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./styles/CartTable.css"
import CartTotals from "./CartTotals";

function CartTable() {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";
  const { cart, updateQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cartTable-empty-container">
        <h2>Your Cart is Empty <ShoppingCartIcon style={{fontSize:"35px", verticalAlign: "middle"}}/> </h2>
        <Link to="/shop" className="btn">
          Shop Now
        </Link>
      </div>
    );
  }

  return(
    <div className="cartTable-container">

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
          {cart.map((item) => {
            return(
              <tr key={item.id}>
                <td>
                  <div className="cartTable-remove">
                    <CloseIcon style={{fontSize: "small", color: "#ddd"}} onClick={() => removeFromCart(item.id)}/>
                  </div>
                </td>

                <td><img src={ item.image.startsWith("http") ? item.image : `${import.meta.env.VITE_API_URL || "http://localhost:4100"}${item.image}`} className="cartTable-image" alt={item.name} /></td>
                <td className="cartTable-product-name"> {item.name}</td>
                <td>${(item.price).toLocaleString()}</td>

                <td>
                  <button className="cartTable-quantity-btn" style={{marginRight:"5px"}} onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button className="cartTable-quantity-btn" style={{marginLeft:"5px"}} onClick={() => updateQty(item.id, item.qty + 1)}>
                    +
                  </button>
                </td>

                <td>${(item.price * item.qty).toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>


      {cart.map((item) => {
        return(
          <div className="cartTable-mobile">
            <div className="cartTable-mobile-left">
              <div className="cartTable-mobile-image-container">
                <img src={ item.image.startsWith("http") ? item.image : `${import.meta.env.VITE_API_URL || "http://localhost:4100"}${item.image}`}  className="cartTable-image" alt={item.name}/>
              </div>
              <div className="cartTable-mobile-name-container">
                <p className="cartTable-product-name">{item.name}</p>
                <p>${(item.price * item.qty).toLocaleString()}</p>
              </div>
            </div>
            <div className="cartTable-mobile-remove-container">
              <div className="cartTable-remove">
                <CloseIcon style={{fontSize: "small", color: "#ddd", }} onClick={() => removeFromCart(item.id)}/>
              </div>
              <div>
                <button className="cartTable-mobile-quantity-btn" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
                  -
                </button>

                <span className="cartTable-mobile-quantity-count">
                  {item.qty}
                </span>

                <button className="cartTable-mobile-quantity-btn" onClick={() => updateQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        )
      })}

      <CartTotals/>

    </div>
  )
}

export default CartTable;