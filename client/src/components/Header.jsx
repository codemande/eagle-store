import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import './styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-desktop-container container">

        <Link className="header-logo-container container">
          <img className='logo' src="/plant-logo.png" alt="eagle store logo" />
          <h1> EAGLE STORE </h1>
        </Link>
       
        <div className="header-desktop-links desktop-only">

          <ul className="desktop-pages-links links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
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
            <span className="cart-count bounce">0</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          { menuOpen === false ? <GiHamburgerMenu /> : <MdClose />}
          
        </button>
      </div>

      {/* Mobile Nav Panel */}
        {menuOpen && (
          <div className="mobile-nav">
            <Link onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link onClick={() => setMenuOpen(false)}    className="cart-link-mobile">
              <span style={{ position: "relative" }}>
                <FaShoppingCart className="cart-icon"   />
                <span  className="cart-count">0</span>
              </span>
              Cart
            </Link>
          </div>
        )}
    </header>
  )
}

export default Header;