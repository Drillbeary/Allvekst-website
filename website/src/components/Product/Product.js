// Product.js
import React from 'react';

const Product = ({ name, description, price }) => (
  <figure>
    <img src={`images/${name.toLowerCase()}.jpg`} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </figcaption>
  </figure>
);

export default Product;