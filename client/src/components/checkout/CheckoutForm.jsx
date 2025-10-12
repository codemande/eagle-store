import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../context/useCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./styles/CheckoutForm.css"

function CheckoutForm() {
  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return; // to prevent double submissions
    setIsSubmitting(true);

    try{
      const orderData = {
        items: cart,
        customer: form,
        total,
        ref: Math.floor(Math.random() * 1000000), // unique reference
        date: new Date().toISOString(),
      };

      // save orders to localStorage
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(orders));

      clearCart(); // empty cart

      // navigate to thank-you page and pass order data via state
      navigate("/thank-you", { state: { orderData } });
    } catch (err) {
      console.error("Order submit failed:", err);
    } finally { 
      setIsSubmitting(false); 
    }   
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="checkoutForm-noCart-container" style={{ padding: "2rem 0", textAlign: "center" }}>
        <h2>Your cart is empty <ShoppingCartIcon style={{fontSize:"35px", verticalAlign: "middle"}}/> </h2>
        <Link
          to="/shop"
          className="btn"
          style={{
            marginTop: "1rem",
            background: "var(--accent)",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Shop Now
        </Link>
      </div>
    );
  }


  return(
    <form className="checkoutForm-container">
      <div className="checkoutForm-form" onSubmit={handleSubmit}>
        <p className="checkoutForm-form-title">Billing details</p>
        <hr />

        <label htmlFor="">Full name</label>
        <input type="text" required
          name="name" value={form.name} onChange={handleChange}
        />
        <label htmlFor="">Email address</label>
        <input type="email" required
          name="email" value={form.email} onChange={handleChange}
        />
        <label htmlFor="">Phone</label>
        <input type="tel" required
          name="phone" value={form.phone} onChange={handleChange}
        />
        <label htmlFor="">Shipping address</label>
        <textarea name="address" required 
          value={form.address} onChange={handleChange}
        ></textarea>
      </div>


      <div className="checkoutForm-order-summary">
        <p className="checkoutForm-summary-title">Order Summary</p>
        {cart.map((item) => {
          return(
            <div className="checkoutForm-summary-flex" key={item.id}>
              <p>{item.name} (x{item.qty})</p>
              <p>${item.price.toLocaleString()}</p>
            </div>
          )
        })}
        <hr />
        <div className="checkoutForm-summary-flex">
          <p className="checkoutForm-summary-total">Total</p>
          <p>${total.toLocaleString()}</p>
        </div>
        <button type="submit" 
          onClick={handleSubmit} className="checkoutForm-summary-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm;