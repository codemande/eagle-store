import CartTable from "../components/cart/CartTable";
import Header from "../components/Header";
import "./styles/Cart.css"

function Cart() {
  return(
    <div>
      <div className="cart-header-container">
        <Header />
      </div>
      <CartTable/>
    </div>
  )
}

export default Cart;