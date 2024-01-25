import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; // Import your CSS file
import Video from '../Images/Droneshot.mp4';
import PlayButton from '../Images/Logo/play-button.png'

function HeaderHome() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/Allvekst-Home.txt')
      .then(response => response.text())
      .then(data => {
        setText(data);
      });
  }, []);
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoClick = () => {
      if (videoRef.current) {
        if (playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setPlaying(!playing);
      }
    };

    return (
      <div className="Header-container">
        <div className="Header-text">
          <h2>Din bedrift i din kommune</h2>
          <p>{text}</p>
        </div>
        <div className='Header-video'>
          <div className="Header-links">
            <Link to="/contact">Kontakt Oss!</Link>
            <Link to="/company">Bedriften</Link>
            <Link to="/lorem">lorem ipsum</Link>
            {/* Add more links as needed */}
          </div>
          <video  ref={videoRef} src={Video} onClick={handleVideoClick} />    
          {!playing && <img src={PlayButton} className="play-button" onClick={handleVideoClick} alt="Play video" />}
        </div>
      </div>
    );
}

export default HeaderHome;