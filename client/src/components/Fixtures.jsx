import { FaCreditCard, FaRegHeart  } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import "./styles/Fixtures.css";

function Fixtures() {
  return(
    <div className="home-fixture-container">
      <div className="home-fixture-content">
        <FaCreditCard className="home-fixture-content-icon"/>
        <p className="home-fixture-content-title">Secure Payment</p>
        <p className="home-fixture-content-subTitle">Encrypted, Authenticated, Protected</p>
      </div>

      <div className="home-fixture-content">
        <MdLocalShipping className="home-fixture-content-icon"/>
        <p className="home-fixture-content-title">Free Shipping</p>
        <p className="home-fixture-content-subTitle">For $50 order</p>
      </div>

      <div className="home-fixture-content">
        <PiPackageFill className="home-fixture-content-icon" />
        <p className="home-fixture-content-title">Delivered with Care</p>
        <p className="home-fixture-content-subTitle">Gentle, Mindful, Thoughtful</p>
      </div>

      <div className="home-fixture-content">
        <FaRegHeart className="home-fixture-content-icon" />
        <p className="home-fixture-content-title">Excellent Service</p>
        <p className="home-fixture-content-subTitle">Exceptional, Attentive, Reliable</p>
      </div>
    </div>
  )
}

export default Fixtures;