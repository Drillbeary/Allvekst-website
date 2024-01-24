import React, { useState } from 'react';
import '../Styles/Home.css'; // Import your CSS file
import * as Images from '../Images/Index.js'; // Import your images
import * as txt from '../Text/Index.js'; // Import your Text


function GridHome() {
  const categories = [
    { id: 1, name: 'Småmekanisk', image: Images.Smamekanisk, Desc: txt.Småmekanisk.Desc, FlippedDesc: txt.Småmekanisk.FlippedDesc },
    { id: 2, name: 'Mormors', image: Images.Mormors, Desc: txt.Mormors.Desc, FlippedDesc: txt.Mormors.FlippedDesc },
    { id: 3, name: 'Vaskeriet', image: Images.Vaskeriet, Desc: txt.Småmekanisk.Desc, FlippedDesc: txt.Vaskeriet.FlippedDesc }, 
    { id: 4, name: 'Bygg og Anlegg', image: Images.Bygg, Desc: txt.Bygg.Desc, FlippedDesc: txt.Bygg.FlippedDesc },
    { id: 5, name: 'Serviceavdeling', image: Images.Serviceavdeling, Desc: txt.Serviceavdelingen.Desc, FlippedDesc: txt.Serviceavdelingen.FlippedDesc },
    { id: 6, name: 'Tiltak', image: Images.Tiltak, Desc: txt.Tiltak.Desc, FlippedDesc: txt.Tiltak.FlippedDesc }
    ,
    
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
    <div onClick={handleClick} className={`flip-card ${isFlipped ? 'flip-card-flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card-image" src={category.image} alt={category.name} />
          <h2 className="flip-card-title">{category.name}</h2>
          <p className="flip-card-short-desc">{category.Desc}</p>
          <button className="flip-card-button">Show More</button>
        </div>
        <div className="flip-card-back">
          <h2 className="flip-card-title">{category.name}</h2>
          <p className="flip-card-long-desc">{category.FlippedDesc}</p>
          <button className="flip-card-button">Show Less</button>
        </div>
      </div>
    </div>
  );
};
export default GridHome;