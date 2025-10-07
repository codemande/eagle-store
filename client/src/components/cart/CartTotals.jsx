import { Link } from "react-router-dom";
import useCart from "../../context/useCart";
import "./styles/CartTotals.css"

function CartTotals() {
  const { cart } = useCart();

  // calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return(
    <div>
      <table className="cartTotals-container cartTotals-desktop">
        
        <tbody>
          <tr>
            <td colSpan={2} className="cartTotals-title">
              Cart totals
            </td>
          </tr>
          <tr>
            <th>Subtotal</th>
            <td>${total.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${total.toLocaleString()}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="cartTotals-cta-button">
                <Link to="/checkout" className="cartTotals-cta-link">Proceed to checkout</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cartTotals-mobile">
        <div className="cartTotals-mobile-subtotal-wrap">
          <p className="cartTotals-mobile-subtotal">Subtotal</p>
          <p>${total.toLocaleString()}</p>
        </div>
        <hr />
        <div className="cartTotals-mobile-subtotal-wrap">
          <p className="cartTotals-mobile-subtotal">Total</p>
          <p>${total.toLocaleString()}</p>
        </div>
        <button className="cartTotals-mobile-btn">
          <Link to="/checkout" className="cartTotals-mobile-link">Go to Checkout</Link>
        </button>
      </div>
    </div>
  )
}

export default CartTotals;