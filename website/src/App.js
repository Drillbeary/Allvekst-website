// App.js
import React from 'react';
import ProductList from './components/Product/ProductList'; // Import the ProductList component
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import NavBar from './components/Layout/Navigation/Navbar/NavBar';
import Home from './Pages/Home';
import Products from './Pages/Store/Products';
import ShoppingCart from './Pages/ShoppingCart';
import Service from './Pages/Store/Service';



const App = () => (
  <>

      <div>
        <NavBar />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/service" component={Service} />
        </Routes>

        {/* Additional content or footer goes here */}
      </div>

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