import axios from 'axios';
import React, { useEffect, useState } from 'react';
import backupImage from '../Images/Logo/Allvekst-logo.png';
import FacebookIcon from '../Images/Logo/facebook-icon.svg';
import InstagramIcon from '../Images/Logo/instagram-icon.svg';
import YoutubeIcon from '../Images/Logo/youtube-icon.svg';
import '../Styles/Home.css'; // Import your CSS file


function NewsHome() {
  const [selectedCategory, setSelectedCategory] = useState('Facebook');
  const [videos, setVideos] = useState([]);


  // fetch youtube videos from API
  useEffect(() => {
    axios.get('/fetch-youtube-videos')
      .then(response => {
        const videoData = response.data.map(video => ({
          title: video.snippet.title,
          summary: video.snippet.description,
          image: video.snippet.thumbnails.default.url,
          link: `https://www.youtube.com/watch?v=${video.id.videoId}`
        }));
        setVideos(videoData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const newsCategories = { // The news categories
    'Facebook': [
      { title: 'Nyheter 1', summary: 'Summary of Nyheter 1', image: 'url-to-image-1' },
      { title: 'Nyheter 2', summary: 'Summary of Nyheter 2', image: 'url-to-image-2' },
      { title: 'Nyheter 3', summary: 'Summary of Nyheter 3', image: 'url-to-image-3' }
    ],
    'Instagram': [
      { title: 'Avis 1', summary: 'Summary of Avis 4', image: 'url-to-image-4' },
      { title: 'Avis 2', summary: 'Summary of Avis 5', image: 'url-to-image-5' },
      { title: 'Avis 3', summary: 'Summary of Avis 6', image: 'url-to-image-6' }
    ],
    'Youtube': videos // Add the fetched videos to the news categories
  };
  const categoryIcons = {
    'Facebook': <img style={{height: '48px'}} src={FacebookIcon} alt="Facebook" />,
    'Instagram': <img style={{height: '48px'}} src={InstagramIcon} alt="Instagram" />,
    'Youtube': <img style={{height: '48px'}} src={YoutubeIcon} alt="Youtube" />,
  };

  return (
    <div className="news-home">
        <nav className='news-nav'>
            {Object.keys(newsCategories).map((category, index) => (
              // Map through the news categories and create a button for each category
                <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'nav-active' : ''}
                >
                    <span className="news-category-text">{category}</span>
                    <span className="news-category-icon">{categoryIcons[category]}</span>
                </button>
            ))}
        </nav>
        <div className='news-container'>
          {newsCategories[selectedCategory].map((news, index) => (
            // Map through the news and create a div for each news
            <div
              key={index}
              className={`news-content ${index === 0 ? 'first-item' : ''}`}
              onClick={() =>{ const newWindow = window.open(news.link, '_blank'); newWindow.opener = null; }}
              style={{ cursor: 'pointer' }}
            >
              <div className='news-text'>
                <h2>{news.title}</h2>
                <p>{news.summary}</p>
              </div>
              <img
                className='news-image'
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