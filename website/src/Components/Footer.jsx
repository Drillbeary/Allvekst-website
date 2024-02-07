import React from 'react';
import ISO from '../Images/Logo/ISO-LOGO.svg';
import samfunnsbedriftene from '../Images/Logo/Samfunnsbedriftene.svg';
import FacebookIcon from '../Images/Logo/facebook-icon.svg';
import InstagramIcon from '../Images/Logo/instagram-icon.svg';
import Miljøfyrtårn from '../Images/Logo/miljofyrtarn.webp';
import '../Styles/Home.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div>
          <div className='footer-content-social'>
            <h1>Følg oss</h1>
            <a href="https://www.facebook.com/ALLVEKST" target="_blank" rel="noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.Instagram.com/ALLVEKST" target="_blank" rel="noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
        <h1>Om oss</h1>
          <p><a href="/Contact" > Kontakt Oss!</a></p><a href="/Visjon" > Vår visjon </a>
        </div>
        <div>
          <h1>Åpningstider</h1>
          <table className="footer-table">
            <tbody>
              <tr>
                <td>Man - Fre:</td>
                <td>7:30 - 15:00</td>
              </tr>
              <tr>
                <td>lør - Søn:</td>
                <td>stengt</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className='footer-content'>
          <a href="https://standard.no/standardisering/iso-standarder/" target="_blank" rel="noreferrer">
              <img src={ISO} alt="ISO-logo" />
            </a>
            <a href="https://www.miljofyrtarn.no/virksomhet/om-oss/fns-baerekraftsmal/" target="_blank" rel="noreferrer">
              <img src={Miljøfyrtårn} alt="Miljøfyrtårn-logo" />
            </a>
            <a href="https://www.samfunnsbedriftene.no/om-samfunnsbedriftene" target="_blank" rel="noreferrer">
              <img src={samfunnsbedriftene} alt="samfunnsbedriftene-logo" />
            </a>
          </div>
        </div>
      </div>
      <p className='Footer-rights'>© 2024 Allvekst AS. All rights reserved. | <a href='https://github.com/Drillbeary/Allvekst-website'>Website</a> by <a href="https://www.linkedin.com/in/sander-halseth-4267a2287/">Sander Halseth</a></p>
    </footer>
  );
}

export default Footer;