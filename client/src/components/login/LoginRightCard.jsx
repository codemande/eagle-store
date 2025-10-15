import { Link } from "react-router-dom";
import "./styles/LoginRightCard.css";

function LoginRightCard() {
  return(
    <div className="loginRightCard-container">
      <div className="loginRightCard-overlay">
        <form>
          <p className="loginRightCard-context">Please Enter Your Login Details</p>

          <label className="loginRightCard-label" htmlFor="email">
            Enter Email Address
          </label>
          <input className="loginRightCard-input" type="text" />

          <label className="loginRightCard-label" htmlFor="password">
            Enter Password
          </label>
          <input className="loginRightCard-input" type="password" />

          <p className="loginRightCard-label loginRightCard-forgot">Forget <span>Password?</span></p>

          <button className="loginRightCard-input loginRightCard-btn">Login</button>

          <Link to="/signUp" className="loginRightCard-label"> 
            Don't have an account? <span>Register</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginRightCard;