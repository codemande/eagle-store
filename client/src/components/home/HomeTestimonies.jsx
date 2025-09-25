import { FaQuoteLeft } from "react-icons/fa";
import testimony1 from '../../assets/home/testimony1.webp';
import testimony2 from '../../assets/home/testimony2.jpg';
import testimony3 from '../../assets/home/testimony3.jpg';
import "./styles/HomeTestimonies.css";

function HomeTestimonies() {
  return(
    <div className="homeTestimonies-container">

      <div className="homeTestimonies-content">

        <div className="homeTestimonies-title">
          <h2 className="homeTestimonies-title-h2">What Our Customers Say</h2>
          <p className="homeTestimonies-title-p">
            Discover the reasons why people loves us and become your go-to partner.
          </p>
        </div>

        <div className="homeTestimonies-first homeTestimonies-card">
          <FaQuoteLeft className="homeTestimonies-quote"/>
          <p className="homeTestimonies-p">
            I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.
          </p>
          <div>
            <img src={testimony1} alt="testimony" className="homeTestimonies-img" />
            <p className="homeTestimonies-name">Jane Doe</p>
          </div>
        </div>

        <div className="homeTestimonies-second homeTestimonies-card">
          <FaQuoteLeft className="homeTestimonies-quote"/>
          <p className="homeTestimonies-p">
            I couldn’t be happier with the support I got from this team! They were professional, efficient, and always friendly. Their dedication impressed me deeply, and I highly recommend their excellent service.
          </p>
          <div>
            <img src={testimony2} alt="testimony" className="homeTestimonies-img" />
            <p className="homeTestimonies-name">John Doe</p>
          </div>
        </div>

        <div className="homeTestimonies-third homeTestimonies-card">
          <FaQuoteLeft className="homeTestimonies-quote"/>
          <p className="homeTestimonies-p">
            The experience exceeded every expectation I had from the beginning! Their staff was incredibly helpful, patient, and knowledgeable. 
          </p>
          <div>
            <img src={testimony3} alt="testimony" className="homeTestimonies-img" />
            <p className="homeTestimonies-name">Johnny Doe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonies;