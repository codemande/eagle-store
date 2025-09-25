import "./styles/HomeCategories.css";

function HomeCategories() {
  return(
    <div className="homeCategories-container">
      <h2 className="homeCategories-header">Our Categories</h2>

      <div className="homeCategories-contents">
        
        <div className="homeCategories-item">
          <img src="/images/products/house-plant.jpg" alt="house plants" className="homeCategories-image"/>
          <p className="homeCategories-name">House Plants</p>
        </div>

        <div className="homeCategories-item">
          <img src="/images/products/outdoor-plant.jpg" alt="outdoor plants" className="homeCategories-image"/>
          <p className="homeCategories-name">Outdoor Plants</p>
        </div>

        <div className="homeCategories-item">
          <img src="/images/products/succulents.jpg" alt="succulents" className="homeCategories-image"/>
          <p className="homeCategories-name">Succulents</p>
        </div>

        <div className="homeCategories-item">
          <img src="/images/products/dessert-bloom.jpg" alt="dessert bloom" className="homeCategories-image"/>
          <p className="homeCategories-name">Desert Bloom</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories;