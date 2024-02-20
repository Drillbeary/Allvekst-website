import React from 'react';
import Navbar from "../Components/NavHome";
import '../Styles/Tiltak.css'; // Import your CSS file


const Tiltak = () => (
<div className='Tiltak-page-wrapper'>
<div className="Tiltak-nav">
<Navbar/>
</div>
<div className='Tiltak-container-wrapper'>
<div className='Tiltak-container'>
<p className='Subtitle'><span>Lorem ipsum</span></p>
<h1>Tiltak ipsum</h1>
<p className='Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div className='Tiltak-container'>
<p className='Subtitle'><span>Lorem bipsum</span></p>
<h1> Lorem ipsum dolor</h1>
<h2>Lorem ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<h2>Lorem ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<h2>Lorem ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
</div>
</div>
);

export default Tiltak;