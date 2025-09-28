import { Link } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';

import "./styles/ContactDetails.css"

function ContactDetails(){
  return(
    <div className='contactDetails-container'>

      <div className='contactDetails-info-container' >

        <h2 className='contactDetails-title'>Send us Message</h2>

        <div className='contactDetails-icon-info-container'>
          <div className='contactDetails-icon-container'>
            <LocalPhoneIcon style={{fontSize: 30}} />
          </div>

          <div>
            <p className='contactDetails-icon-title'>Phone</p>
            <p className='contactDetails-icon-detail'>789-1234-678</p>
          </div>
        </div>

        <div className='contactDetails-icon-info-container'>
          <div className='contactDetails-icon-container'>
            <EmailIcon style={{fontSize: 30}}/>
          </div>
          
          <div>
            <p className='contactDetails-icon-title'>Email</p>
            <p className='contactDetails-icon-detail'>email@eaglestore.com</p>
          </div>
        </div>

        <div className='contactDetails-icon-info-container'>
          <div className='contactDetails-icon-container'>
            <LocationPinIcon style={{fontSize: 30}}/>
          </div>
          
          <div>
            <p className='contactDetails-icon-title'>Address</p>
            <p className='contactDetails-icon-detail'>1843 Maplewood Drive. Haverly, Illinois 75291</p>
          </div>
        </div>
      </div>

      <div className='contactDetails-form-container'>
        <form className='contactDetails-form'>
          <label htmlFor="name">Name *</label>
          <input type="text" id='name' className='contactDetails-form-input' required />
          <label htmlFor="email">Email *</label>
          <input type="email" className='contactDetails-form-input' required/>
          <label htmlFor="phone">Phone *</label>
          <input type="tel" name="" id="phone" className='contactDetails-form-input' required />
          <label htmlFor="message">Message</label>
          <textarea name="" id="" className='contactDetails-form-textArea'></textarea>
          
        </form>
        <Link className='contactDetails-form-link'>Submit</Link>
      </div>
    </div>
  )
}

export default ContactDetails;