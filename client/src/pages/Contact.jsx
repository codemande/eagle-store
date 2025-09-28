import Header from "../components/Header";
import ContactDetails from "../components/home/ContactDetails";
import ContactSocials from "../components/home/ContactSocials";
import HomeDivider2 from "../components/home/HomeDivider2";
import Footer from "../components/Footer";

import "./styles/pages-section.css";

function Contact() {
  return(
    <div className="pages-header-container">
      <header className="pages-header" style={{backgroundImage: "url(/images/contact/contact-page.jpg)"}}>
        <div className="pages-header-overlay">
          <Header/>
          <div className="pages-title-container">
            <h1>CONTACT US</h1>
            <p>Let’s Connect</p>
          </div>
        </div>
      </header>
      <ContactDetails/>
      <ContactSocials/>
      <HomeDivider2/>
      <Footer/>
    </div>
  )
}

export default Contact;