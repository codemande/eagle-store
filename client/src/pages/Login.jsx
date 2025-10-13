
import LoginLeftCard from "../components/login/LoginLeftCard";
import "./styles/Login.css";

function Login() {
  return(
    <div className="login-container">
      <div className="login-card-container">
        <LoginLeftCard/>
      </div>
    </div>
  )
}

export default Login;