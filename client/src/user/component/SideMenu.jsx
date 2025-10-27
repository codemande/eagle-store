import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { LiaBoxOpenSolid } from "react-icons/lia";
import "./SideMenu.css";

function SideMenu() {
  return(
    <div className="sideMenu-container">

      <NavLink to="/account" className={({ isActive }) => isActive ? "sideMenu-container-item active" : "sideMenu-container-item"}>
        <div>
          <FaRegUser className="sideMenu-container-icon"/> 
          <span className="sideMenu-container-title">My Eagle Account</span>
        </div>
      </NavLink>

      <NavLink to="/shop" className={({ isActive }) => isActive ? "sideMenu-container-item active" : "sideMenu-container-item"}>
        <div>
          <LiaBoxOpenSolid className="sideMenu-container-icon" /> 
          <span className="sideMenu-container-title">Orders</span>
        </div>
      </NavLink>

      <NavLink to="/shop" className={({ isActive }) => isActive ? "sideMenu-container-item active" : "sideMenu-container-item"}>
        <div>
          <FaRegEnvelope className="sideMenu-container-icon" /> 
          <span className="sideMenu-container-title">Inbox</span>
        </div>
      </NavLink>

      <hr />

      <div className="sideMenu-container-item">
        <NavLink className="sideMenu-container-link">Logout</NavLink>
      </div>
    </div>
  )
}

export default SideMenu;