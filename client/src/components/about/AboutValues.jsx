
import { PiPackageFill } from "react-icons/pi";
import "./styles/AboutValues.css"

function AboutValues() {
  return(
    <div className="aboutValues-container">

      <div className="aboutValues-content">

        <p className="aboutValues-title">
          Our Core Values that Drive <span>Everything We Do</span>
        </p>

        <div className="aboutValues-details-wrap">
          
          <div className="aboutValues-detail">

            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Passionate About Work</p>
              <p className="aboutValues-detail-description">Passion for work is a enthusiasm and excitement for what you do.</p>
            </div>
          </div>

          <div className="aboutValues-detail">
            
            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Creative team members</p>
              <p className="aboutValues-detail-description">A creative team is to design and execute campaigns & encourage</p>
            </div>
          </div>

          <div className="aboutValues-detail">
            
            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Innovation solutions</p>
              <p className="aboutValues-detail-description">Using either completely concepts finding new ways of using existing</p>
            </div>
          </div>

          <div className="aboutValues-detail">
            
            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Qualityful products</p>
              <p className="aboutValues-detail-description">Product quality refers to how well a product satisfies our customer</p>
            </div>
          </div>

          <div className="aboutValues-detail">
            
            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Customer satisfaction</p>
              <p className="aboutValues-detail-description">Happy customers are delighted because of the customer service</p>
            </div>
          </div>

          <div className="aboutValues-detail">
            
            <PiPackageFill className="aboutValues-icon" />
            <div>
              <p className="aboutValues-detail-title">Simplicity interface</p>
              <p className="aboutValues-detail-description">Simplicity is used loosely to refer to the need to minimize a process</p>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default AboutValues;