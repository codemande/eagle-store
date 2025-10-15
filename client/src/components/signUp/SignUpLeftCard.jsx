import { Link } from "react-router-dom";

import "../login/styles/LoginLeftCard.css"

function SignUpLeftCard() {
  return(
    <div className="loginLeftCard-container">

      <div className="loginLeftCard-top-container">

        <Link to="/" className="loginLeftCard-logo-container">
          <img className="loginLeftCard-logo" src="/plant-logo.png" alt="eagle store logo" />
          <p className="loginLeftCard-name">EAGLE STORE</p>
        </Link>

        <h1 className="loginLeftCard-header">Welcome!</h1>
        <p className="loginLeftCard-text">
          Join our growing community where a love for nature meets smart design. Create your account to start building your plant collection, discover expert care tips, and get inspired by the beauty and balance of nature every day.
        </p>

        <div className="loginLeftCard-login-options">
          <img className="loginLeftCard-login-option-logo" src="/google.png" alt="google logo" />
          <p className="loginLeftCard-login-option-text">SignUp with Google</p>
        </div>
        
        <p>or</p>
        <div className="loginLeftCard-login-options">
          <img className="loginLeftCard-login-option-logo" src="/gmail.png" alt="mail logo" />
          <p className="loginLeftCard-login-option-text">SignUp with Email Address</p>
        </div>
      </div>

      <div className="loginLeftCard-image-container">
        <img className="loginLeftCard-image" src="/loginleftimage.png" alt="plant-img" />
      </div>
    </div>
  )
}

export default SignUpLeftCard;