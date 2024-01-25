// Home.jsx
import React from 'react';
import '../Styles/Home.css';
import HeaderHome from '../Components/HeaderHome';
import GridHome from '../Components/GridHome';
import NewsHome from '../Components/NewsHome';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="home">
      <header>
        <div className='Header-wrap'>
          <HeaderHome />
        </div>
      </header>

      <section className="news">
        <NewsHome />
      </section>

      <main className="categories">
        <GridHome/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default Home;