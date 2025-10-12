import { Link, useLocation } from "react-router-dom";
import "./ThankYouDetails.css";

function ThankYouDetails() {
  const location = useLocation();
  const order = location.state?.orderData; // match what Checkout passes

  if (!order) {
    return (
      <div className="thankYouDetails-container" >

        <h2>No order found</h2>
        <p>Please place an order first.</p>
        <Link to="/shop" className="thankYouDetails-btn">
          Continue Shopping 
        </Link>
      </div>
    );
  }

  // Format date nicely
  const formattedDate = new Date(order.date).toLocaleString();

  return(
    <div className="thankYouDetails-container">

      <h2>Thank you for your order, {order.customer.name}!</h2>
      <p>Your order has been placed successfully.</p>

      {/* Order Summary Card */}
      <div className="thankYouDetails-card">

        <h3>Order Summary</h3>
        <p><strong>Reference:</strong> #{order.ref}</p>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p><strong>Name:</strong> {order.customer.name}</p>
        <p><strong>Email:</strong> {order.customer.email}</p>
        <p><strong>Phone:</strong> {order.customer.phone}</p>
        <p><strong>Address:</strong> {order.customer.address}</p>

        <hr />
        <h4>Items:</h4>
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} (×{item.qty}) — ${(item.price * item.qty).toLocaleString()}
            </li>
          ))}
        </ul>
        <hr />
        <h3>Total: ${order.total.toLocaleString()}</h3>
      </div>

      {/* Continue shopping button */}
      <Link to="/shop" className="thankYouDetails-btn">
        Continue Shopping 
      </Link>

    </div>
  )
}

export default ThankYouDetails;