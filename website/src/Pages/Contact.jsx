import React from 'react';
import Navbar from "../Components/NavHome";
import backgroundImage from '../Images/Contact/Background.jpg';
import '../Styles/Contact.css'; // assuming you have a CSS file for styling
const Contact = () => (
  <div className='contact-page-wrapper'>
  <img src={backgroundImage} alt='background' className='background-image'/>
  <div className="contact-page">
    <Navbar/>
  </div>
  </div>
);

export default Contact;