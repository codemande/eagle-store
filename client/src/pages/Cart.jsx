import CartTable from "../components/cart/CartTable";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDivider2 from "../components/home/HomeDivider2";
import "./styles/Cart.css"

function Cart() {
  return(
    <div>
      <div className="cart-header-container">
        <Header />
      </div>
      <CartTable/>
      <div className="cart-mobile-footer">
        <HomeDivider2/>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart;