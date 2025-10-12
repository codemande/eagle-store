import CartTable from "../components/cart/CartTable";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDivider2 from "../components/home/HomeDivider2";
import "./styles/Cart.css"
import "./styles/pages-section.css";

function Cart() {
  return(
    <div className="pages-header-container">
      <header className="pages-header" style={{backgroundImage: "url(/images/cart/cart-header2.jpg)"}}>
        <div className="pages-header-overlay">
          <Header />
          <div className="pages-title-container">
            <h1>CART</h1>
            <p>We’re Thrilled by your Taste</p>
          </div>
        </div>
      </header>
      <CartTable/>
      <div className="cart-mobile-footer">
        <HomeDivider2/>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart;