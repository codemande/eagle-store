import Header from "../components/Header";
import "./styles/Home.css";

function Home() {
  return(
    <div className="home-page-container">

      <div className="hero-home-page-container">
        <div className="hero-page-overlay">
          <Header/> 
        </div>        
      </div>
      
    </div>
  )
}

export default Home;