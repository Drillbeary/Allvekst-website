import React, { useState } from 'react';
import * as Images from '../Images/Index.js'; // Import your images
import '../Styles/Home.css'; // Import your CSS file
import * as txt from '../Text/Index.js'; // Import your Text


function GridHome() {
  const categories = [
    // Importing Txt and image, In the format Name, Image, Desc, FlippedDesc
    { id: 1, name: txt.Serviceavdelingen.Title, image: Images.Serviceavdeling, Desc: txt.Serviceavdelingen.Desc, FlippedDesc: txt.Serviceavdelingen.FlippedDesc },
    { id: 2, name: txt.Mormors.Title, image: Images.Mormors, Desc: txt.Mormors.Desc, FlippedDesc: txt.Mormors.FlippedDesc },
    { id: 3, name: txt.Vaskeriet.Title, image: Images.Vaskeriet, Desc: txt.Vaskeriet.Desc, FlippedDesc: txt.Vaskeriet.FlippedDesc },
    { id: 4, name: txt.Bygg.Title, image: Images.Bygg, Desc: txt.Bygg.Desc, FlippedDesc: txt.Bygg.FlippedDesc },
    { id: 5, name: txt.Småmekanisk.Title, image: Images.Småmekanisk, Desc: txt.Småmekanisk.Desc, FlippedDesc: txt.Småmekanisk.FlippedDesc },
    { id: 6, name: txt.Tiltak.Title, image: Images.Tiltak, Desc: txt.Tiltak.Desc, FlippedDesc: txt.Tiltak.FlippedDesc }
    
    // Add more categories...
  ];

  return (
    <div className="flip-container">
      {categories.map((category) => (
        <Card
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}

function Card({ category }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // Sets up the card, and the flip animation with Css classes
    <div onClick={handleClick} className={`flip-card ${isFlipped ? 'flip-card-flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card-image" src={category.image} alt={category.name} />
          <h2 className="flip-card-title">{category.name}</h2>
          <p>
          {category.Desc.split('\n').map((line, i) => {
            const boldLine = line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            return (
              <React.Fragment key={i}>
                <span dangerouslySetInnerHTML={{ __html: boldLine }} />
                <br />
              </React.Fragment>
            );
          })}
          </p>
          <button className="flip-card-button">Show More</button>
        </div>
        <div className="flip-card-back">
          <h2 className="flip-card-title">{category.name}</h2>
          <p>
          {category.FlippedDesc.split('\n').map((line, i) => {
            const boldLine = line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            return (
              <React.Fragment key={i}>
                <span dangerouslySetInnerHTML={{ __html: boldLine }} />
                <br />
              </React.Fragment>
            );
          })}
          </p>
          <button className="flip-card-button">Show Less</button>
        </div>
      </div>
    </div>
  );
};
export default GridHome;