import SignUpLeftCard from "../components/signUp/SignUpLeftCard";
import "./styles/Login.css";
import SignUpRightCard from "../components/signUp/SignUpRightCard";

function SignUp() {
  return(
    <div className="login-container">
      <div className="login-card-container">
        <SignUpLeftCard/>
        <SignUpRightCard/>
      </div>
    </div>
  )
}

export default SignUp;