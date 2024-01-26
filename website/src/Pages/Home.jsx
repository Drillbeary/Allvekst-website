// Home.jsx
import React from 'react';
import '../Styles/Home.css';
import HeaderHome from '../Components/HeaderHome';
import GridHome from '../Components/GridHome';
import NewsHome from '../Components/NewsHome';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="home-wrap">
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