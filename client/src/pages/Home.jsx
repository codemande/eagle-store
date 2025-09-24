import Fixtures from "../components/Fixtures";
import Header from "../components/Header";
import HomeDivider1 from "../components/HomeDivider1";
import HomeHeroText from "../components/HomeHeroText";
import TrendingProducts from "../components/TrendingProducts";
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
        <TrendingProducts/>
      </div>

      <HomeDivider1/>
      
    </div>
  )
}

export default Home;