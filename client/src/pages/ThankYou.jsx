import Header from "../components/Header";
import ThankYouDetails from "../components/ThankYou/ThankYouDetails";
import "./styles/Cart.css"


function ThankYou() {
  return(
    <div>
      <div className="cart-header-container">
        <Header/>
      </div>
      <ThankYouDetails/>
    </div>
  )
}

export default ThankYou;