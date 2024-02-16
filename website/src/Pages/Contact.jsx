import React from 'react';
import Navbar from "../Components/NavHome";
import backgroundImage from '../Images/Contact/Background.png';
import '../Styles/Contact.css'; // assuming you have a CSS file for styling
const Contact = () => (
  <div className="contact-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Navbar/>
  </div>
);

export default Contact;