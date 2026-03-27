// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";

import Header from "../components/Header";
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import AuthContext from "../context/AuthContext.jsx";

import "./styles/Cart.css";
import "./styles/Checkout.css";
import "./styles/pages-section.css";

function Checkout() {
  // Access the user from your AuthContext
  // const { user } = useContext(AuthContext);
  
  // Get the current location for a better user experience
  // const location = useLocation();

  // If there is no user, redirect to login immediately
  // if (!user) {
    // Pass the current location ('/checkout') in state 
    // so the Login page knows where to send them back to!
    // return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  // If there is a user, render the checkout page as normal
  return(
    <div className="checkout-container">
      <header className="pages-header" style={{backgroundImage: "url(/images/checkout/checkout-header.jpg)"}}>
        <div className="pages-header-overlay">
        <Header />
        <div className="pages-title-container">
          <h1>CHECKOUT</h1>
          <p>Ready to Checkout?</p>
        </div>
      </div>
      </header>
      <div className="checkout-main-container">
        <p className="checkout-title">Checkout</p>
        <hr className="checkout-title-divider" />
        <CheckoutForm/>
      </div>
      <HomeDivider2/>
      <Footer/>
    </div>
  )
}

export default Checkout;