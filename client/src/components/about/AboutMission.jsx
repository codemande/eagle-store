import { FaCircleCheck } from "react-icons/fa6";

import "./styles/AboutMission.css";

function AboutMission() {
  return(
    <div className="aboutMission-container">

      <div className="aboutMission-content">
        <p className="aboutMission-title">Our Mission</p>
        <p className="aboutMission-message">
          Our mission is to make the world a greener place, one plant at a time. We strive to provide our customers with the highest quality plants and plant care products, along with the knowledge and support to help them thrive.
        </p>

        <div className="aboutMission-points-wrap">
          <div className="aboutMission-points-column">

            <div className="aboutMission-point-content">
              <FaCircleCheck  className="aboutMission-point"/>
              <p className="aboutMission-point-message">Quality and Variety</p>
            </div>

            <div className="aboutMission-point-content">
              <FaCircleCheck className="aboutMission-point" />
              <p className="aboutMission-point-message">Sustainable Practices</p>
            </div>
          </div>

          <div className="aboutMission-points-column">

            <div className="aboutMission-point-content">
              <FaCircleCheck className="aboutMission-point" />
              <p className="aboutMission-point-message">Expert Guidance</p>
            </div>

            <div className="aboutMission-point-content">
              <FaCircleCheck className="aboutMission-point" />
              <p className="aboutMission-point-message">Experienced Team</p>
            </div>

          </div>
        </div>
      </div>

      <div className="aboutMission-image-container">
        <img className="aboutMission-images" src="/images/about/about-mission.jpg" />
      </div>
    </div>
  )
}

export default AboutMission;