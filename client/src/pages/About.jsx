import AboutMessage from "../components/about/AboutMessage";
import AboutValues from "../components/about/AboutValues";
import Header from "../components/Header";

import "./styles/Shop.css";


function About() {
  return(
    <div className="shop-container">
      <header className="shop-header" style={{backgroundImage: "url(/images/about/about-page.jpg)"}}>
        <div className="shop-header-overlay">
          <Header/>
          <div className="shop-title-container">
            <h1>ABOUT</h1>
            <p>We are Passionate <span>About Our Work</span></p>
          </div>
        </div>
      </header>

      <AboutMessage/>
      <AboutValues/>
    </div>
  )
}

export default About;