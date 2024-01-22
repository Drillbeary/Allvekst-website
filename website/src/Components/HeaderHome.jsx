import React, { useState, useEffect } from 'react';
import '../Styles/Home.css'; // Import your CSS file
import Video from '../Images/Allvekst/Droneshot.mp4';


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
      {/* ... */}
      <div className="Header-text">
        <h2>Din Lokalbedrift</h2>
        <p>{text}</p>
      </div>
      <div className='Header-video'>
      <video  ref={videoRef} src={Video} onClick={handleVideoClick} />    
      </div>
      </div>
  );
}

export default HeaderHome;