import React, { useState } from 'react';
import '../Styles/Home.css'; // Import your CSS file
import backupImage from '../Images/Allvekst/Allvekst-logo.png';

function NewsHome() {
  const [selectedCategory, setSelectedCategory] = useState('Nyheter');

  const newsCategories = {
    'Nyheter': [
      { title: 'News 1', summary: 'Summary of News 1', image: 'url-to-image-1' },
      { title: 'News 2', summary: 'Summary of News 2', image: 'url-to-image-2' },
      { title: 'News 3', summary: 'Summary of News 3', image: 'url-to-image-3' }
    ],
    'Bedrifts Avis': [
      { title: 'News 4', summary: 'Summary of News 4', image: 'url-to-image-4' },
      { title: 'News 5', summary: 'Summary of News 5', image: 'url-to-image-5' },
      { title: 'News 6', summary: 'Summary of News 6', image: 'url-to-image-6' }
    ],
    'News 3': [
      { title: 'News 7', summary: 'Summary of News 7', image: 'url-to-image-7' },
      { title: 'News 8', summary: 'Summary of News 8', image: 'url-to-image-8' },
      { title: 'News 9', summary: 'Summary of News 9', image: 'url-to-image-9' }
    ]
  };

  return (
    <div className="news-home">
        <nav className='news-nav'>
            <button  onClick={() => setSelectedCategory('Nyheter')}>Nyheter</button>
            <button  onClick={() => setSelectedCategory('Bedrifts Avis')}>Bedrifts Avis</button>
            <button  onClick={() => setSelectedCategory('News 3')}>News 3</button>
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