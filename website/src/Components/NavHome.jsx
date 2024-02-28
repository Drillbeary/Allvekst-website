import React from 'react';
import { Link } from 'react-router-dom';
import AllvekstIcon from '../Images/Logo/Allvekst-icon.png';
import '../Styles/Home.css'; // Import your CSS file

const NavHome = () => {
function handleClick() {
    const links = document.querySelector('.Nav-links');
    links.classList.toggle('button-clicked');
    }
return (
<div className="Nav-container">
    
        <div className="Nav-links">
        <Link to="/Vision">Vår Visjon</Link>
        <Link to="/Tiltak">Tiltak</Link>
        <Link to="/contact">Kontakt Oss!</Link>
        
        </div>
        <Link to="/">
            <img className="Nav-home-icon" src={AllvekstIcon} alt="Allvekst Icon" />
        </Link>
    </div>
    );
};

export default NavHome;
