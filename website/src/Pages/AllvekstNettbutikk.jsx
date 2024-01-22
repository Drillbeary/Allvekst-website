// AllvekstNettbutikk.js

import React from 'react';
import '../Styles/AllvekstNettbutikk.css'; // Import the CSS file for styling
import Product from './SubPages/Product'
import Service from './SubPages/Service'
import Tilbud from './SubPages/Tilbud'


const AllvekstNettbutikk = () => (
  <div className='AllvekstNettbutikk'>
    
    <div>
 
    <Tilbud/>
    </div>

    <div className='Product-service-wrapper'>
      
    <Product/>
    <Service/>
    </div>   
  </div>
);

export default AllvekstNettbutikk;