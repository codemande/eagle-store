import { Link } from "react-router-dom";

import "./styles/LoginLeftCard.css"

function LoginLeftCard() {
  return(
    <div className="loginLeftCard-container">

      <div className="loginLeftCard-top-container">

        <Link to="/" className="loginLeftCard-logo-container">
          <img className="loginLeftCard-logo" src="/plant-logo.png" alt="eagle store logo" />
          <p className="loginLeftCard-name">EAGLE STORE</p>
        </Link>

        <h1 className="loginLeftCard-header">Welcome Back!</h1>
        <p className="loginLeftCard-text">
          We’re excited to have you back where your love for nature meets smart design. Sign in to keep growing your plant collection, access expert tips, and stay inspired by nature’s calm and color.
        </p>

        <div className="loginLeftCard-login-options">
          <img className="loginLeftCard-login-option-logo" src="/google.png" alt="google logo" />
          <p className="loginLeftCard-login-option-text">Login with Google</p>
        </div>
        
        <p>or</p>
        <div className="loginLeftCard-login-options">
          <img className="loginLeftCard-login-option-logo" src="/gmail.png" alt="mail logo" />
          <p className="loginLeftCard-login-option-text">Login with Email Address</p>
        </div>
      </div>

      <div className="loginLeftCard-image-container">
        <img className="loginLeftCard-image" src="/loginleftimage.png" alt="plant-img" />
      </div>
    </div>
  )
}

export default LoginLeftCard;