import { Link } from "react-router-dom";
import "./styles/HomeHeroText.css";

function HomeHeroText() {
  return(
    <div className="homeHeroText-container">
      <div className="homeHeroText-wrap">
        <p className="homeHeroText-intro">WELCOME TO EAGLE STORE</p>
        <p className="homeHeroText-title">
          <span className="homeHeroTitle-mobile">Discover the</span> Beauty of 
          <span className="homeHeroTitle-desktop"> Nature at Your Fingertips</span>
        </p>
        <Link to="/shop">Shop Now</Link>  
      </div>      
    </div>
  )
}

export default HomeHeroText;