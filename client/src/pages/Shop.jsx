import Header from "../components/Header";
import ShopProduct from "../components/home/ShopProduct";

import "./styles/Shop.css";

function Shop() {
  return(
    <div className="shop-container">
      <header className="shop-header">
        <div className="shop-header-overlay">
          <Header/>
          <div className="shop-title-container">
            <h1>SHOP</h1>
            <p>Let Us Beautify your Home</p>
          </div>
        </div>
      </header>
      <ShopProduct/>
    </div>
  )
}

export default Shop;