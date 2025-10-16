import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/LoginRightCard.css";

function LoginRightCard() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  // handle input change
  function handleChange(event){
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  async function handleSubmit(event){
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try{
      const res = await axios.post(
        `${API_BASE_URL}/api/users/login`,
        formData,
        { withCredentials: true } //include cookies 
      );

      // Successful login
      setMessage("Login successful!");
      console.log("User:", res.data.user);

      //save user data in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/user");
    } catch (err){
      console.error(err);
      setMessage(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
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
          <input className="loginRightCard-input" type="text" required
            name="email" value={formData.email} onChange={handleChange}
          />

          <label className="loginRightCard-label" htmlFor="password">
            Enter Password
          </label>
          <input className="loginRightCard-input" type="password" required
            name="password" value={formData.password} onChange={handleChange}
          />

          <p className="loginRightCard-label loginRightCard-forgot">Forget <span>Password?</span></p>

          {message && <p style={{textAlign: "center", color: "#444",}}>{message}</p>}

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