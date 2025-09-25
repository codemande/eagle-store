import { Link } from "react-router-dom";
import "./styles/HomeDivider1.css";

function HomeDivider2() {
  return(
    <div className="homeDivider1-container" style={{
      backgroundImage: "url(../../assets/home/home-divider2.webp)"
    }}>
      <div className="homeDivider1-overlay">
        <div className="homeDivider1-content">
          <h2> Ready to Find your Perfect Plant?</h2>
          <p>
            Browse our online store or visit us in person to <span> experience the beauty of nature.</span>
          </p>
          <Link className="homeDivider1-button homeDivider2-button"> Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeDivider2;