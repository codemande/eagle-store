import housePlant from '../../assets/products/house-plant.jpg';
import outdoorPlant from '../../assets/products/outdoor-plant.jpg';
import succulents from '../../assets/products/succulents.jpg';
import dessertBloom from '../../assets/products/dessert-bloom.jpg';
import "./styles/HomeCategories.css";

function HomeCategories() {
  return(
    <div className="homeCategories-container">
      <h2 className="homeCategories-header">Our Categories</h2>

      <div className="homeCategories-contents">
        
        <div className="homeCategories-item">
          <img src={housePlant} alt="house plants" className="homeCategories-image"/>
          <p className="homeCategories-name">House Plants</p>
        </div>

        <div className="homeCategories-item">
          <img src={outdoorPlant} alt="outdoor plants" className="homeCategories-image"/>
          <p className="homeCategories-name">Outdoor Plants</p>
        </div>

        <div className="homeCategories-item">
          <img src={succulents} alt="succulents" className="homeCategories-image"/>
          <p className="homeCategories-name">Succulents</p>
        </div>

        <div className="homeCategories-item">
          <img src={dessertBloom} alt="dessert bloom" className="homeCategories-image"/>
          <p className="homeCategories-name">Desert Bloom</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories;