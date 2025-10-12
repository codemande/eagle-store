import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDivider2 from "../components/home/HomeDivider2";
import ThankYouDetails from "../components/ThankYou/ThankYouDetails";
import "./styles/Cart.css";
import "./styles/pages-section.css";


function ThankYou() {
  return(
    <div className="pages-header-container">
      <header className="pages-header" style={{backgroundImage: "url(/images/thankYou/thank-you-header.jpg)"}}>
        <div className="pages-header-overlay">
          <Header/>
          <div className="pages-title-container">
            <h1>CART</h1>
            <p>We’re Grateful for your Order</p>
          </div>
        </div>
      </header>
      <ThankYouDetails/>
      <HomeDivider2/>
      <Footer/>
    </div>
  )
}

export default ThankYou;