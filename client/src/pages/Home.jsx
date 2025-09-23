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
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  )
}

export default Home;