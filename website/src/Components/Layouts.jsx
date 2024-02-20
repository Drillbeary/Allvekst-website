import { Route, Routes } from 'react-router-dom';

import AllvekstMedia from '../Pages/AllvekstMedia';
import AllvekstNettbutikk from '../Pages/AllvekstNettbutikk';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Tiltak from '../Pages/Tiltak';
import Vision from '../Pages/Vision';

const Layouts = () => (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Vision' element={<Vision/>}></Route>
      <Route path='/Tiltak' element={<Tiltak/>}></Route>
      <Route path='/AllvekstNettbutikk' element={<AllvekstNettbutikk/>}></Route>
      <Route path='/AllvekstMedia' element={<AllvekstMedia/>}></Route>
    </Routes>
  );

  export default Layouts;