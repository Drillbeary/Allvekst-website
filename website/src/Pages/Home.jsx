// Home.jsx
import React from 'react';
import Footer from '../Components/Footer';
import GridHome from '../Components/GridHome';
import HeaderHome from '../Components/HeaderHome';
import Nav from '../Components/NavHome';
import Segway from '../Components/Segway';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-wrap">
      <div className='Top-wrap'>
      <nav className='Nav-wrap'>
        <Nav />
      </nav>
      <header className='Header-wrap'>
          <HeaderHome />
      </header>
      </div>
      {/*
      <section className="news-wrap">
        <NewsHome />
      </section>
    */}
    <div className="Segway-wrap">
        <Segway />
      </div>

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