import "./styles/AboutMessage.css";

function AboutMessage() {
  return(
    <div className="aboutMessage-container">

      <div className="aboutMessage-contains">

        <div className="aboutMessage-image-container">
          <img className="aboutMessage-image" src="/images/home/home-motive.jpg" />
        </div>

        <div className="aboutMessage-message-wrap">

          <h2 className="aboutMessage-message-title">
            We strive to provide our customers with the highest quality
          </h2>
          <p className="aboutMessage-message">
            Eagle Store was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it’s purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they’re a lifestyle.
          </p>

          <hr />

          <p className="ceo-message">
            “We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
          </p>

          <div className="ceo-details-wrap">

            <img className="aboutMessage-ceo-image" src="/images/about/ceo-image.jpg" alt="" />

            <div className="ceo-details">
              <p className="ceo-name">Jay Momoa</p>
              <p className="ceo-position">CEO & Co-founder @ Eagle Store</p>
            </div>
            
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default AboutMessage;