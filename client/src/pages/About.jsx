import AboutMessage from "../components/about/AboutMessage";
import AboutMission from "../components/about/AboutMission";
import AboutValues from "../components/about/AboutValues";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDivider2 from "../components/home/HomeDivider2";

import "./styles/pages-section.css";


function About() {
  return(
    <div className="pages-header-container">
      <header className="pages-header" style={{backgroundImage: "url(/images/about/about-page.jpg)"}}>
        <div className="pages-header-overlay">
          <Header/>
          <div className="pages-title-container">
            <h1>ABOUT</h1>
            <p>We are Passionate <span>About Our Work</span></p>
          </div>
        </div>
      </header>

      <AboutMessage/>
      <AboutValues/>
      <AboutMission/>
      <HomeDivider2/>
      <Footer/>
    </div>
  )
}

export default About;