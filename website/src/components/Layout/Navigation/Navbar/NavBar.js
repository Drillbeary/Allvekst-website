// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Pages/Home.js">Home</Link></li>
        <ul>
          <li><Link to="/Pages/Store/Products.js">Products</Link></li>
          <li><Link to="/Pages/Store/Service.js">Service</Link></li>
        </ul>
        <li><Link to="/Pages/ShoppingCart.js">Shopping Cart</Link></li>
        <li><Link to="/Pages/Allvekst.js">Shopping Cart</Link></li>
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