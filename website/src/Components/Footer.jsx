import React from 'react';
import '../Styles/Home.css';
import FacebookIcon from '../Images/Logo/facebook-icon.png'; 
import InstagramIcon from '../Images/Logo/InstagramIcon.png'
import ISO from '../Images/Logo/ISO-LOGO.webp';
import Miljøfyrtårn from '../Images/Logo/miljofyrtarn.webp';
import samfunnsbedriftene from '../Images/Logo/samfunnsbedriftene.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Socials</h2>
        <div className='footer-content-social'>
        <a href="https://www.facebook.com/ALLVEKST" target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.Instagram.com/ALLVEKST" target="_blank" rel="noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        </div>
      </div>
      <div className="footer-section">
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-section">
        <h2>Certifications</h2>
        <div className='footer-content'>
        <img src={ISO} alt="ISO-LOGO" />
        <img src={Miljøfyrtårn} alt="Miljøfyrtårn" />
        <img src={samfunnsbedriftene} alt="samfunnsbedriftene" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;