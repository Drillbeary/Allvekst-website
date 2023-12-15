// Home.js

import React from 'react';
import '../Styles/Home.css'; // Import the CSS file for styling
import Product from './SubPages/Product'
import Service from './SubPages/Service'
import Tilbud from './SubPages/Tilbud'


const Home = () => (
  <div className='Home'>
    
    <div>
 
    <Tilbud/>
    </div>

    <div className='Product-service-wrapper'>
      
    <Product/>
    <Service/>
    </div>   
  </div>
);

export default Home;