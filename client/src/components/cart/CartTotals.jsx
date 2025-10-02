import { Link } from "react-router-dom";

import "./styles/CartTotals.css"

function CartTotals() {
  return(
    <div>
      <table className="cartTotals-container cartTotals-desktop">
        <caption ></caption>
        <tbody>
          <tr>
            <td colSpan={2} className="cartTotals-title">
              Cart totals
            </td>
          </tr>
          <tr>
            <th>Subtotal</th>
            <td>$90.00</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>$90.00</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="cartTotals-cta-button">
                <Link className="cartTotals-cta-link">Proceed to checkout</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cartTotals-mobile">
        <div className="cartTotals-mobile-subtotal-wrap">
          <p className="cartTotals-mobile-subtotal">Subtotal</p>
          <p>$90.00</p>
        </div>
        <hr />
        <div className="cartTotals-mobile-subtotal-wrap">
          <p className="cartTotals-mobile-subtotal">Total</p>
          <p>$90.00</p>
        </div>
        <button className="cartTotals-mobile-btn">
          <Link className="cartTotals-mobile-link">Go to Checkout</Link>
        </button>
      </div>
    </div>
  )
}

export default CartTotals;