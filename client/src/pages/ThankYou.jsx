import { Link, useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const order = location.state?.orderData; // match what Checkout passes

  if (!order) {
    return (
      <div className="container" style={{ padding: "2rem 0", textAlign: "center" }}>
        <h2>No order found</h2>
        <p>Please place an order first.</p>
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
          Continue Shopping 
        </Link>
      </div>
    );
  }

  // Format date nicely
  const formattedDate = new Date(order.date).toLocaleString();

  return(
    <div className="container" style={{ padding: "2rem 0", textAlign: "center" }}>

      <h2>Thank you for your order, {order.customer.name}!</h2>
      <p>Your order has been placed successfully.</p>

      {/* Order Summary Card */}
      <div
        className="thankyou-card"
        style={{
          margin: "2rem auto",
          padding: "1.5rem",
          maxWidth: "500px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fafafa",
          textAlign: "left",
        }}
      >
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
              {item.name} (×{item.qty}) — ₦{(item.price * item.qty).toLocaleString()}
            </li>
          ))}
        </ul>
        <hr />
        <h3>Total: ₦{order.total.toLocaleString()}</h3>
      </div>

      {/* Continue shopping button */}
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
        Continue Shopping 
      </Link>

    </div>
  )
}

export default ThankYou;