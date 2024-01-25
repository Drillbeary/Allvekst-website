import React from 'react';
import backgroundImage from '../Images/Contact/Background.png'; // replace with the path to your image
import '../Styles/Contact.css'; // assuming you have a CSS file for styling

const Contact = () => (
  <div className="contact-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {/* Your contact page content goes here */}
  </div>
);

export default Contact;