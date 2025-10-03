import Header from "../components/Header";
import CheckoutForm from "../components/checkout/checkoutForm";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import "./styles/Cart.css"
import "./styles/Checkout.css"

function Checkout() {
  return(
    <div className="checkout-container">
      <div className="cart-header-container">
        <Header />
      </div>
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