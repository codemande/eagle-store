import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";
import { FaFacebook, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import './styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false);

  const { cart, removeFromCart } = useCart();

  //count total quantity instead of cart.length
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

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
            <span key={cartCount} className="cart-count bounce">
              {cartCount}
            </span>
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
          <Link to="/cart" onClick={() => {setMenuOpen(false);}} className="cart-link-mobile">
            <span style={{ position: "relative" }}>
              <FaShoppingCart className="cart-icon"/>
              <span key={cartCount} className="cart-count">
                {cartCount}
              </span>
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
          <p className="header-cart-slide-close" onClick={() => setCartOpen(false)}>
            <CloseIcon/>
          </p>
        </div>  
       
        <div className="header-cart-slide-items">
          {cart.length === 0 ? 
          <p className="header-cart-slide-content">No products in the cart.</p> :
            cart.map((item) => {
              return (
                <div key={item.id}>
                  <div className="cart-slide-items-container">
                    <div className="cart-slide-image-container">
                      <img src={`http://localhost:4100${item.image}`} className="cart-slide-item-image" alt={item.name} />
                      <div className="cart-slide-name-container">
                        <div className="cart-slide-item-name">{item.name}</div>
                        <div className="cart-slide-item-price">{item.qty} X {`$${item.price}`}</div>
                      </div>
                    </div>
                    <div className="cart-slide-item-remove">
                      <CloseIcon style={{fontSize: "small", color: "#ddd"}} onClick={() => removeFromCart(item.id)}/>
                    </div>
                  </div>
                  <hr style={{border: "1px solid #e9e9e9ff"}} />
                </div>
              )
            })
          }
        </div>

        <div className="cart-slide-button-container">
          {cart.length === 0 ?
            <Link to="/shop" className="header-cart-slide-button">
              Continue Shopping
            </Link>
            :
            <div>
              <div className="header-cart-slide-subtotal-wrap">
                <p>Subtotal:</p>
                <p>${total}</p>
              </div>
              <Link to="/cart" className="header-cart-slide-button">
                View Cart
              </Link>
              <Link to="/checkout" className="header-cart-slide-button">
                Checkout
              </Link>
            </div>
          }
        </div>
      </div>}
    </header>
  )
}

export default Header;