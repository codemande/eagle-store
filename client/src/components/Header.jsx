import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-desktop-container container">

        <Link className="header-logo-container container">
          <img className='logo' src="/plant-logo.png" alt="eagle store logo" />
          <h1> EAGLE STORE </h1>
        </Link>
       
        <div className="header-desktop-links">

          <ul className="desktop-pages-links links">
            <li><Link>Home</Link></li>
            <li><Link>Shop</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
          
          <span className="header-link-socials links">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaYoutube/>
            </a>
            <a href="">
              <FaXTwitter />
            </a>
          </span>

          <Link className="cart-icon-link">
            <FaShoppingCart className="cart-icon"  />
            <span className="cart-count">0</span>
          </Link>
          
        </div>
      </div>
    </header>
  )
}

export default Header;