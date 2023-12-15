import {Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Allvekst from '../Pages/Allvekst';
import AllvekstMedia from '../Pages/AllvekstMedia';

const Layouts = () => (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Allvekst' element={<Allvekst/>}></Route>
      <Route path='/AllvekstMedia' element={<AllvekstMedia/>}></Route>
    </Routes>
  );

  export default Layouts;