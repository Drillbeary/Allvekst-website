import React, { useEffect, useState } from 'react';
import Video from '../Images/Allvekst-AS-2022.mp4';
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
    return (
      <div className='Header-wrap'>
      <div className="Header-container">
        <div className="Header-text">
          <h2>Folk- Først og Fremst</h2>
          <p>{text}</p>
        </div>
        <div className='Header-video'>
          <video  ref={videoRef} src={Video} onClick={handleVideoClick} />
          {!playing && <img src={PlayButton} className="play-button" onClick={handleVideoClick} alt="Play video" />}
        </div>
      </div>
      </div>
    );
}

export default HeaderHome;