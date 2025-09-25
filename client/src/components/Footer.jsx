import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return(
    <div className="footer-container">
      <div className="footer-content">

        <div className="footer-content-top">
          <Link className="footer-logo-container">
            <img className="footer-logo" src="/plant-logo.png" alt="eagle store logo" />
            <h1 className="footer-brand-name"> EAGLE STORE </h1>
          </Link>

          <ul className="footer-pages-links">
            <li><Link>Home</Link></li>
            <li><Link>Shop</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
          </ul>

          <ul className="footer-socials-container">
            <li><a href=""><FaFacebook /></a></li>
            <li><a href=""><FaInstagram /></a></li>
            <li><a href=""><FaYoutube/></a></li>
            <li><a href=""><FaXTwitter /></a></li>
          </ul>
        </div>

        <hr />

        <div className="footer-copyright">
          Copyright &copy; {year} Codemande Tech for Eagle Store
        </div>
      </div>
    </div>
  )
}

export default Footer;