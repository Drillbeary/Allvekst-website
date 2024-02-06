import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Video from '../Images/Allvekst-AS-2022.mp4';
import AllvekstLogo from "../Images/Logo/Allvekst-logo.png";
import MenuIcon from '../Images/Logo/menu-icon.svg';
import PlayButton from '../Images/Logo/play-button.svg';
import '../Styles/Home.css'; // Import your CSS file
import data from '../Text/Allvekst-Home.json';


function HeaderHome() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(data.Text);
  }, []); // Add an empty dependency array so this effect only runs once, when the component mounts

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
  function handleClick() {
    const links = document.querySelector('.Header-links');
    links.classList.toggle('button-clicked');
  }
    return (
      <div className="Header-container">
        <div className="Header-text">
        <img src={AllvekstLogo} alt="Allvekst Logo" className='Header-Logo' />
          <h1>bytt til svg bilder</h1>
          <h2>Folk- Først og Fremst</h2>
          <p>{text}</p>
        </div>
        <div className='Header-video'>
          <div className="Header-links">
          <button onClick={handleClick} className="Header-menu-icon">
            <img src={MenuIcon} alt="Menu" />
          </button>
            <div className="Header-nav">
            <Link to="/">Hjem</Link>
            <Link to="/Vision">Vår Visjon</Link>
            <Link to="/contact">Kontakt Oss!</Link>
            </div>
          </div>
          <video  ref={videoRef} src={Video} onClick={handleVideoClick} />
          {!playing && <img src={PlayButton} className="play-button" onClick={handleVideoClick} alt="Play video" />}
        </div>
      </div>
    );
}

export default HeaderHome;