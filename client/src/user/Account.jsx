import Header from "../components/Header";
import SideMenu from "./component/sideMenu";
import "../pages/styles/pages-section.css";
import "./user.css";

function Account() {
  return(
    <div>
      <header className="pages-header" style={{backgroundImage: "url(/account-header.jpg)"}}>
        <div className="pages-header-overlay">
          <Header/>
          {/* <div className="pages-title-container">
            <h1>CART</h1>
            <p>We’re Grateful for your Order</p>
          </div> */}
        </div>
      </header>
      <div className="user-container">
        <SideMenu/>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Account;