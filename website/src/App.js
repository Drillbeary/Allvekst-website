import React from 'react';
import './Styles/App.css';

import Layouts from './Components/Layouts';
import Navigation from './Components/Navigation';

const App = () => (
  <div className='app'>
    <h1>Allvekst Nettbutikk</h1>
    <Navigation />
    <Layouts />
  </div>
);

export default App;
