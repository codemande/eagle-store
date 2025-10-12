import Header from "../components/Header";
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import "./styles/Cart.css"
import "./styles/Checkout.css"
import "./styles/pages-section.css";

function Checkout() {
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