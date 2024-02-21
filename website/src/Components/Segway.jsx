import React from 'react';
import Image from '../Images/Segway.png';
import '../Styles/Home.css'; // Import your CSS file
function Segway() {
return (
<div className='Segway-container'>
<img src={Image} alt="Segway" />
</div>
);
}

export default Segway;
