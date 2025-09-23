import Fixtures from "../components/Fixtures";
import Header from "../components/Header";
import HomeHeroText from "../components/HomeHeroText";
import "./styles/Home.css";

function Home() {
  return(
    <div className="home-page-container">

      <div className="hero-home-page-container">
        <div className="hero-page-overlay">
          <Header/> 
          <HomeHeroText/>
        </div>      
      </div>

      <div className="home-fixtures-trending">
        <Fixtures/>
        <hr />
      </div>
      
    </div>
  )
}

export default Home;