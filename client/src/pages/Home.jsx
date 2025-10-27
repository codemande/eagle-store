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