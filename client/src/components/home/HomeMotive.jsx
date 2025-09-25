import "./styles/HomeMotive.css";

function HomeMotive() {
  return(
    <div className="homeMotive-container">

      <div className="homeMotive-column-image">
        <img src="../../assets/home/home-motive.jpg" alt="home motive" className="homeMotive-image" />
      </div>

      <div className="homeMotive-column-text">
        <h2 className="homeMotive-title">Your Premier Destination for All Green.</h2>
        <p className="homeMotive-about">
          At Eagle Store, we believe in the transformative power of plants. Whether you’re a seasoned gardener or just starting your green journey, our curated selection of plants will inspire and enrich your living space.
        </p>
       
        <hr className="homeMotive-divider" />

        <div className="homeMotive-counts-wrap">

          <div className="homeMotive-detail">
            <p className="homeMotive-count">98%</p>
            <p className="homeMotive-details">Customer Satisfaction</p>
          </div>

          <div className="homeMotive-detail">
            <p className="homeMotive-count">103K</p>
            <p className="homeMotive-details">Plants Sold</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMotive;