import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./styles/ContactSocials.css"

function ContactSocials() {
  return(
    <div className='contactSocials-container'>
      <h2>Follow us @Eagle Store</h2>
      <div>
        <FacebookIcon style={{fontSize: 35}} className='contactSocials-icon'/>
        <YouTubeIcon style={{fontSize: 35}} className='contactSocials-icon'/>
        <PinterestIcon style={{fontSize: 35}} className='contactSocials-icon'/>
        <XIcon style={{fontSize: 35}} className='contactSocials-icon'/>
        <InstagramIcon style={{fontSize: 35}} className='contactSocials-icon'/>
      </div>
    </div>
  )
}

export default ContactSocials;