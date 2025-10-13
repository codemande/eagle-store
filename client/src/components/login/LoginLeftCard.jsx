

import "./styles/LoginLeftCard.css"

function LoginLeftCard() {
  return(
    <div className="loginLeftCard-container">

      <div className="loginLeftCard-top-container">

        <div className="loginLeftCard-logo-container">
          <img className="loginLeftCard-logo" src="/plant-logo.png" alt="eagle store logo" />
          <p className="loginLeftCard-name">EAGLE STORE</p>
        </div>

        <h1 className="loginLeftCard-header">Welcome Back!</h1>
        <p className="loginLeftCard-text">
          We source the healthiest and most beautiful plants to bring nature's finest to your home. We provide expert care advice to ensure your plants thrive
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