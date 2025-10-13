
import LoginLeftCard from "../components/login/LoginLeftCard";
import LoginRightCard from "../components/login/LoginRightCard";
import "./styles/Login.css";

function Login() {
  return(
    <div className="login-container">
      <div className="login-card-container">
        <LoginLeftCard/>
        <LoginRightCard/>
      </div>
    </div>
  )
}

export default Login;