import { Link } from "react-router-dom";
import "./styles/HomeDivider1.css";

function HomeDivider1() {
  return(
    <div className="homeDivider1-container">
      <div className="homeDivider1-overlay">
        <div className="homeDivider1-content">
          <h2> Flash Sale: Up to 50% Off <span> On Select Items!</span></h2>
          <p>
            Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% <span> off on a selection of our best-selling products.</span>
          </p>
          <Link to="/shop" className="homeDivider1-button"> Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeDivider1;