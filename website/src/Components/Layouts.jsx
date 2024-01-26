import {Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import AllvekstNettbutikk from '../Pages/AllvekstNettbutikk';
import AllvekstMedia from '../Pages/AllvekstMedia';
import Contact from '../Pages/Contact';
import Company from '../Pages/Company';

const Layouts = () => (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Company' element={<Company/>}></Route>
      <Route path='/AllvekstNettbutikk' element={<AllvekstNettbutikk/>}></Route>
      <Route path='/AllvekstMedia' element={<AllvekstMedia/>}></Route>
    </Routes>
  );

  export default Layouts;