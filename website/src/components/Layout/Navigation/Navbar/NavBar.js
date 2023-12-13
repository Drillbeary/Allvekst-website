// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Pages/Home.js">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
      </ul>
    </nav>
  );
};
/*
const NavBar = () => {
  return (
    <nav>
      <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#products">Products</a></li>
      
      <li><a href="#service">Service</a></li>
      <li><a href="#cart">Shopping Cart</a></li>
      <li><a href="#Allvekst">Allvekst</a></li>
      </ul>
    </nav>
  );
};
*/
export default NavBar;