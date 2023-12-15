// Home.js

import React from 'react';
import '../Styles/Home.css'; // Import the CSS file for styling
import Product from './SubPages/Product'
import Service from './SubPages/Service'
import Tilbud from './SubPages/Tilbud'


const Home = () => (
  <div className='home'>
    <Tilbud/>

    <div className='products-services-section'>
    <Product/>


      <div className='services-section'>
      <Service/>

      </div>
    </div>
  </div>
);

export default Home;