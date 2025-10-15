
import { Link } from "react-router-dom";
import "../login/styles/LoginRightCard.css";

function SignUpRightCard() {
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

          <label className="loginRightCard-label" htmlFor="password">
            Full Name
          </label>
          <input className="loginRightCard-input" type="text" />

          <label className="loginRightCard-label" htmlFor="password">
            Phone Number
          </label>
          <input className="loginRightCard-input" type="tel" />

          <div className="loginRightCard-label loginRightCard-forgot" style={{display: "flex", alignItems:"center"}}>
            <input type="checkbox" checked style={{margin: "0 10px", accentColor: "rgb(26, 77, 26)"}} />
            <span>I agree with the rules</span>
          </div>

          <button className="loginRightCard-input loginRightCard-btn">Login</button>

          <Link to="/login" className="loginRightCard-label"> 
            Already have an account? <span>Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUpRightCard;