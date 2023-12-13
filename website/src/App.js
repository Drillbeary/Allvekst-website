// App.js
import React from 'react';

import ProductList from './components/Product/ProductList'; // Import the ProductList component

const App = () => (
  <>
    <header>
      <h1>Nettbutikk</h1>
      {/* Nav bar, will move this later*/}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#service">Service</a></li>
          </ul>
          <li><a href="#cart">Shopping Cart</a></li>
          <li><a href="#Allvekst">Allvekst</a></li>
        </ul>
      </nav>
    </header>
    <main>
      {/* Main content section, will also move this later*/}
      <section id="home">
        <h2>Welcome to our webstore</h2>
        <p>Find great products</p>
      </section>
    </main>
    {/* Products section*/}
    <section>
      <ProductList/>
    </section>
    
    {/* Footer section*/}
    <footer>
      <p>&copy; 2023 Web Store. All rights reserved.</p>
    </footer>
  </>
);

export default App;