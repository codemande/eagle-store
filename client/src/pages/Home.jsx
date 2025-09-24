import HomeFixtures from "../components/home/HomeFixtures.jsx";
import Header from "../components/Header";
import HomeDivider1 from "../components/home/HomeDivider1.jsx";
import HomeHeroText from "../components/home/HomeHeroText.jsx";
import HomeTrendingProducts from "../components/home/HomeTrendingProducts.jsx";
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
        <HomeFixtures/>
        <hr />
        <HomeTrendingProducts/>
      </div>

      <HomeDivider1/>
      
    </div>
  )
}

export default Home;