import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import './styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header-desktop-header">
      <div className="header-desktop-container container" >

        <Link to="/" className="header-logo-container container">
          <img className='logo' src="/plant-logo.png" alt="eagle store logo" />
          <h1> EAGLE STORE </h1>
        </Link>
       
        <div className="header-desktop-links desktop-only">

          <ul className="desktop-pages-links links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
            <FaShoppingCart className="cart-icon" onClick={() => setCartOpen(true)} />
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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link onClick={() => {
            setCartOpen(true);
            setMenuOpen(false);
          }} className="cart-link-mobile">
            <span style={{ position: "relative" }}>
              <FaShoppingCart className="cart-icon"/>
              <span  className="cart-count">0</span>
            </span>
            Cart
          </Link>
          {cartOpen && <div className="header-cart-slide-container">
            <div className="header-cart-slide-header">
              <p className="header-cart-slide-title">Shopping Cart</p>
              <p className="header-cart-slide-close" onClick={() => setCartOpen(false)}><CloseIcon/></p>
            </div>  
          
            <div className="header-cart-slide-items">
              <p className="header-cart-slide-content">No products in the cart.</p>
            </div>
            <div className="cart-slide-button-container">
              {/* testing cart link */}
              <Link to="/cart" className="header-cart-slide-button">Continue Shopping</Link>
            </div>
          </div> }
        </div>
      )}

      {/* Cart slide overlay */}
      {cartOpen && <div className="header-cart-slide-overlay" onClick={() => setCartOpen(false)} ></div>}

      {/* Cart side slide */}
      {cartOpen && <div className="header-cart-slide-container">
        <div className="header-cart-slide-header">
          <p className="header-cart-slide-title">Shopping Cart</p>
          <p className="header-cart-slide-close" onClick={() => setCartOpen(false)}><CloseIcon/></p>
        </div>  
       
        <div className="header-cart-slide-items">
          <p className="header-cart-slide-content">No products in the cart.</p>
        </div>
        <div className="cart-slide-button-container">
          {/* testing cart link */}
          <Link to="/cart" className="header-cart-slide-button">Continue Shopping</Link>
        </div>
      </div>}
    </header>
  )
}

export default Header;