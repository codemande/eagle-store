import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../login/styles/LoginRightCard.css";

function SignUpRightCard() {

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try{
      await axios.post(
        `${API_BASE_URL}/api/users/register`, formData,
        { withCredentials: true } // allows cookies from backend
      );

      setMessage("Registration successful!");
      setFormData({ name: "", email: "", phone: "", password: "" });

      setTimeout(() => {
        navigate("/login")
      }, 3000);
     
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data?.error) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Something went wrong, Try again.");
      } 
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="loginRightCard-container">
      <div className="loginRightCard-overlay">
        <form onSubmit={handleSubmit}>
          <p className="loginRightCard-context">Create Your Account Below.</p>

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

          <label className="loginRightCard-label" htmlFor="password">
            Full Name
          </label>
          <input className="loginRightCard-input" type="text" required
            name="name" value={formData.name} onChange={handleChange}
          />

          <label className="loginRightCard-label" htmlFor="password">
            Phone Number
          </label>
          <input className="loginRightCard-input" type="text" required
            name="phone" value={formData.phone} onChange={handleChange}
          />

          <div className="loginRightCard-label loginRightCard-forgot" style={{display: "flex", alignItems:"center"}}>
            <input type="checkbox" checked style={{margin: "0 10px", accentColor: "rgb(26, 77, 26)"}} />
            <span>I agree with the rules</span>
          </div>

          {message && <p style={{textAlign: "center", color: "#444",}}>{message}</p>}

          <button className="loginRightCard-input loginRightCard-btn"
            type="submit" disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>

          <Link to="/login" className="loginRightCard-label"> 
            Already have an account? <span>Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUpRightCard;