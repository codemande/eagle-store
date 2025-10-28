import { useContext } from "react";
import Header from "../components/Header";
import SideMenu from "./component/SideMenu";
import { MdEdit } from "react-icons/md";
import "../pages/styles/pages-section.css";
import "./user.css";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";
import AuthContext from "../context/AuthContext";

function Account() {

  const { user } = useContext(AuthContext);

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

        <div className="user-second-container">

          <div className="user-second-header">
            <p>Account Overview</p>
          </div>
          <hr />
          <div className="user-details">

            <div className="user-second-top-card">
              <div className="user-detail-card">
                <div className="user-detail-header">Account Name</div>
                <hr />
                <div className="user-detail-info"> {user.name} </div>
              </div>
              <div className="user-detail-card">
                <div className="user-detail-header">Email Address</div>
                <hr />
                <div className="user-detail-info"> {user.email} </div>
              </div>
            </div>

            <div className="user-second-top-card">

              <div className="user-detail-card">
                <div className="user-detail-header">Phone Number</div>
                <hr />
                <div className="user-detail-info"> {user.phone} </div>
              </div>
              <div className="user-detail-card">
                <div className="user-detail-header">Address Book <MdEdit style={{fontSize: "20px", cursor: "pointer"}}/></div>
                <hr />
                <div className="user-detail-info"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <HomeDivider2/>
      <Footer/>
    </div>
  )
}

export default Account;