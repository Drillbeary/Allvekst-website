import React from 'react';
import Image from '../Images/Segway.png';
import '../Styles/Home.css'; // Import your CSS file
function Segway() {
return (
<div className='Segway-container'>
<h1>Vi er en <span>KUL</span> bedrift</h1>
<h2><span>K</span>OMPETANSE - <span>U</span>TVIKLING - <span>L</span>IVSKVALITET</h2>
<img src={Image} alt="Segway" />


</div>
);
}

export default Segway;
