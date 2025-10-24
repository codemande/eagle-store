import { useState, useEffect, useContext } from "react";
import HomeFixtures from "../components/home/HomeFixtures.jsx";
import Header from "../components/Header";
import HomeDivider1 from "../components/home/HomeDivider1.jsx";
import HomeHeroText from "../components/home/HomeHeroText.jsx";
import HomeTrendingProducts from "../components/home/HomeTrendingProducts.jsx";
import HomeCategories from "../components/home/HomeCategories.jsx";
import HomeMotive from "../components/home/HomeMotive.jsx";
import HomePopularProduct from "../components/home/HomePopularProduct.jsx";
import HomeTestimonies from "../components/home/HomeTestimonies.jsx";
import HomeDivider2 from "../components/home/HomeDivider2.jsx";
import Footer from "../components/Footer.jsx";
import AuthContext from "../context/AuthContext.jsx";
import { MdClose } from "react-icons/md";
import "./styles/Home.css";

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);//logout notification
  const [timer, setTimer] = useState(null);// clear logout notification
  const { user } = useContext(AuthContext);

  useEffect(() => {

    if (!user) return;// run only when user exists

    // Clear any previous timer
    if (timer) clearTimeout(timer);

    setShowPopUp(true);


    const newTimer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    setTimer(newTimer)

    // Cleanup on unmount or user change
    return () => clearTimeout(newTimer);
    
  }, [user]);

  function removePopUp() {
    if(timer) clearTimeout(timer);
    setShowPopUp(false);
  }
  return(
    <div className="home-page-container">

      {showPopUp && 
        <div className="home-page-popup">
          Login Successful! <MdClose onClick={removePopUp} className="addtocart-notification-close" />
        </div>
      }

      <div className="hero-home-page-container">
        <div className="hero-page-overlay">
          <Header/> 
          <HomeHeroText/>
        </div>      
      </div>

      <div className="home-products">
        <HomeFixtures/>
        <hr />
        <HomeTrendingProducts/>
      </div>

      <HomeDivider1/>
      <HomeCategories/>
      <HomeMotive/>

      <div className="home-products">
        <HomePopularProduct/>
      </div>
      <HomeTestimonies/>
      <HomeDivider2/>

      <Footer/>
    </div>
  )
}

export default Home;