// ProductList.js
import React from 'react';
import Product from './Product';

const productsData = [
  { name: 'Mormors Slikepott', description: 'Stjålet fra mormor', price: 150 },
  { name: 'Olje', description: 'Fra Småmekken', price: 15 },
  { name: 'Dyne', description: 'Lån dyne fra Vaskeriet.', price: 5 }
  // Hard coding examples. will change to a better file system later. hopefully :)
];

const ProductList = () => {
  return (
    <main>
      <section id="products">
        {/* Assuming productsData is defined in this file */}
        {productsData.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </section>
    </main>
  );
};

export default ProductList;