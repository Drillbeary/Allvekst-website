// Home.jsx
import React from 'react';
import Footer from '../Components/Footer';
import GridHome from '../Components/GridHome';
import HeaderHome from '../Components/HeaderHome';
import Nav from '../Components/NavHome';
import NewsHome from '../Components/NewsHome';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-wrap">
      <nav className='Nav-wrap'>
        <Nav />
      </nav>
      <header className='Header-wrap'>
          <HeaderHome />
      </header>

      <section className="news-wrap">
        <NewsHome />
      </section>
  
      <main className="categories-wrap">
        <GridHome/>
      </main>

      <footer className='Footer-wrap'>
        <Footer />
      </footer>
    </div>
  );
}


export default Home;