import React, { useState } from 'react';
import '../Styles/Home.css'; // Import your CSS file
import backupImage from '../Images/Logo/Allvekst-logo.png';

function NewsHome() {
  const [selectedCategory, setSelectedCategory] = useState('Nyheter');

  const newsCategories = {
    'Nyheter': [
      { title: 'Nyheter 1', summary: 'Summary of Nyheter 1', image: 'url-to-image-1' },
      { title: 'Nyheter 2', summary: 'Summary of Nyheter 2', image: 'url-to-image-2' },
      { title: 'Nyheter 3', summary: 'Summary of Nyheter 3', image: 'url-to-image-3' }
    ],
    'Bedrifts Avis': [
      { title: 'Avis 1', summary: 'Summary of Avis 4', image: 'url-to-image-4' },
      { title: 'Avis 2', summary: 'Summary of Avis 5', image: 'url-to-image-5' },
      { title: 'Avis 3', summary: 'Summary of Avis 6', image: 'url-to-image-6' }
    ],
    'Videos': [
      { title: 'Videos 1', summary: 'Summary of Videos 1', image: 'url-to-image-7' },
      { title: 'Videos 2', summary: 'Summary of Videos 2', image: 'url-to-image-8' },
      { title: 'Videos 3', summary: 'Summary of Videos 3', image: 'url-to-image-9' }
    ]
  };

  return (
    <div className="news-home">
        <nav className='news-nav'>
            <button  onClick={() => setSelectedCategory('Nyheter')}>Nyheter</button>
            <button  onClick={() => setSelectedCategory('Bedrifts Avis')}>Bedrifts Avis</button>
            <button  onClick={() => setSelectedCategory('Videos')}>Videos</button>
        </nav>
        <div className='news-container'>
            {newsCategories[selectedCategory].map((news, index) => (
                <div key={index} className="news-content">
                <div className='news-text'>
                <h2>{news.title}</h2>
                <p>{news.summary}</p>
                </div>
                <img className='news-image'
                    src={news.image} 
                    alt={news.title} 
                    onError={(e) => {e.target.onerror = null; e.target.src=backupImage}}
                />
                </div>
            ))}
            </div>
    </div>
  );
}

export default NewsHome;