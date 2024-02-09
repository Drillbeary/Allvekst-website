import React, { useState } from 'react';
import * as Image from '../Images/Index.js'; // Import your images
import '../Styles/Home.css'; // Import your CSS file
import * as txt from '../Text/Index.js'; // Import your Text


function GridHome() {
  const categories = [
    // Importing Txt and image, In the format Name, Image, Desc, FlippedDesc
    {
      id: 1,
      name: txt.Serviceavdelingen.Title,
      image: Image.Serviceavdeling,
      Desc: txt.Serviceavdelingen.Desc,
      FlippedDesc: txt.Serviceavdelingen.FlippedDesc,
      contact_image: Image.ContactServiceavdeling,
      contact_name: txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    },
    {
      id: 2,
      name: txt.Mormors.Title,
      image: Image.Mormors,
      Desc: txt.Mormors.Desc,
      FlippedDesc: txt.Mormors.FlippedDesc,
      contact_image: Image.ContactMormors,
      contact_name: txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    },
    {
      id: 3,
      name: txt.Vaskeriet.Title,
      image: Image.Vaskeriet,
      Desc: txt.Vaskeriet.Desc,
      FlippedDesc: txt.Vaskeriet.FlippedDesc,
      contact_image: Image.ContactVaskeriet,
      contact_name:  txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    },
    {
      id: 4,
      name: txt.Bygg.Title,
      image: Image.Bygg,
      Desc: txt.Bygg.Desc,
      FlippedDesc: txt.Bygg.FlippedDesc,
      contact_image: Image.ContactBygg,
      contact_name: txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    },
    {
      id: 5,
      name: txt.Småmekanisk.Title,
      image: Image.Småmekanisk,
      Desc: txt.Småmekanisk.Desc,
      FlippedDesc: txt.Småmekanisk.FlippedDesc,
      contact_image: Image.ContactSmåmekanisk,
      contact_name: txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    },
    {
      id: 6,
      name: txt.Tiltak.Title,
      image: Image.Tiltak,
      Desc: txt.Tiltak.Desc,
      FlippedDesc: txt.Tiltak.FlippedDesc,
      contact_image: Image.ContactTiltak,
      contact_name: txt.Contact.Name,
      contact_mobile: txt.Contact.Mobile,
      contact_email: txt.Contact.Email
    }
    
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
    <div className={`flip-card ${isFlipped ? 'flip-card-flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div><h1 className="flip-card-title">{category.name}</h1></div>
          <div>
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
          <img src={category.image} alt={category.name} />
          </div>
          
        </div>
        <div className="flip-card-back">
        <div><h1 className="flip-card-title">{category.name}</h1></div>
          <div>
          <img src={category.contact_image} alt={category.contact_name} />
          <p>name: {category.contact_name}</p>
          <p>mobile: {category.contact_mobile}</p>
          <p>email: {category.contact_email}</p>
          
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
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="flip-card-clickable-area" style={{ right: isFlipped ? 'auto' : '0', left: isFlipped ? '0' : 'auto' }}></div>
    </div>
  );
}
export default GridHome;