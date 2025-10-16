import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./styles/LoginRightCard.css";

function LoginRightCard() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, loading } = useContext(AuthContext);

  // handle form submit
  async function handleSubmit(event){
    event.preventDefault();

    try{
      await login(email, password);
      navigate("/dashboard");
    } catch (err){
      alert("Invalid credentials", err);
    }
  }
  
  return(
    <div className="loginRightCard-container">
      <div className="loginRightCard-overlay">
        <form onSubmit={handleSubmit}>
          <p className="loginRightCard-context">Please Enter Your Login Details</p>

          <label className="loginRightCard-label" htmlFor="email">
            Enter Email Address
          </label>
          <input className="loginRightCard-input" type="email" required
            name="email" value={email} onChange={(e) => setEmail(e.target.value)}
          />

          <label className="loginRightCard-label" htmlFor="password">
            Enter Password
          </label>
          <input className="loginRightCard-input" type="password" required
            name="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />

          <p className="loginRightCard-label loginRightCard-forgot">Forget <span>Password?</span></p>

          <button className="loginRightCard-input loginRightCard-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <Link to="/signUp" className="loginRightCard-label"> 
            Don't have an account? <span>Register</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginRightCard;