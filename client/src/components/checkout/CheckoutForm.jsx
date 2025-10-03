import { Link } from "react-router-dom";
import "./styles/CheckoutForm.css"

function CheckoutForm() {
  return(
    <div className="checkoutForm-container">
      <form className="checkoutForm-form">
        <p className="checkoutForm-form-title">Billing details</p>
        <hr />

        <label htmlFor="">Full name</label>
        <input type="text" required/>
        <label htmlFor="">Email address</label>
        <input type="email" name="" id="" required/>
        <label htmlFor="">Phone</label>
        <input type="tel" name="" id="" required/>
        <label htmlFor="">Shipping address</label>
        <textarea name="" id=""></textarea>
      </form>


      <div className="checkoutForm-order-summary">
        <p className="checkoutForm-summary-title">Order Summary</p>
        <div className="checkoutForm-summary-flex">
          <p>Bamboo Grove (x1)</p>
          <p>$90.00</p>
        </div>
        <hr />
        <div className="checkoutForm-summary-flex">
          <p className="checkoutForm-summary-total">Total</p>
          <p>$90.00</p>
        </div>
        <button className="checkoutForm-summary-btn">
          <Link>Place Order</Link>
        </button>
      </div>
    </div>
  )
}

export default CheckoutForm;