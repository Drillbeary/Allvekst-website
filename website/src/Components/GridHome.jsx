import React, { useState } from 'react';
import * as Image from '../Images/Index.js'; // Import your images
import '../Styles/Home.css'; // Import your CSS file
import * as txt from '../Text/Index.js'; // Import your Text


function GridHome() {
  const categories = [
    // Importing Txt and image, In the format Name, Image, Desc, FlippedDesc
    {
      id: 0,
      name: txt.Serviceavdelingen.Title,
      image: Image.Serviceavdeling,
      Desc: txt.Serviceavdelingen.Desc,
      FlippedDesc: txt.Serviceavdelingen.FlippedDesc,
      SaleImg: Image.SaleServiceavdeling,
      contact_image: Image.ContactServiceavdeling,
      contact_name: txt.Contact[0].Name,
      contact_mobile: txt.Contact[0].Mobile,
      contact_email: txt.Contact[0].Email
    },
    {
      id: 1,
      name: txt.Mormors.Title,
      image: Image.Mormors,
      Desc: txt.Mormors.Desc,
      FlippedDesc: txt.Mormors.FlippedDesc,
      SaleImg: Image.SaleMormors,
      contact_image: Image.ContactMormors,
      contact_name: txt.Contact[1].Name,
      contact_mobile: txt.Contact[1].Mobile,
      contact_email: txt.Contact[1].Email
    },
    {
      id: 2,
      name: txt.Vaskeriet.Title,
      image: Image.Vaskeriet,
      Desc: txt.Vaskeriet.Desc,
      FlippedDesc: txt.Vaskeriet.FlippedDesc,
      SaleImg: Image.SaleVaskeriet,
      contact_image: Image.ContactVaskeriet,
      contact_name: txt.Contact[2].Name,
      contact_mobile: txt.Contact[2].Mobile,
      contact_email: txt.Contact[2].Email
    },
    {
      id: 3,
      name: txt.Bygg.Title,
      image: Image.Bygg,
      Desc: txt.Bygg.Desc,
      FlippedDesc: txt.Bygg.FlippedDesc,
      SaleImg: Image.SaleBygg,
      contact_image: Image.ContactBygg,
      contact_name: txt.Contact[3].Name,
      contact_mobile: txt.Contact[3].Mobile,
      contact_email: txt.Contact[3].Email
    },
    {
      id: 4,
      name: txt.Småmekanisk.Title,
      image: Image.Småmekanisk,
      Desc: txt.Småmekanisk.Desc,
      FlippedDesc: txt.Småmekanisk.FlippedDesc,
      SaleImg: Image.SaleSmåmekanisk,
      contact_image: Image.ContactSmåmekanisk,
      contact_name: txt.Contact[4].Name,
      contact_mobile: txt.Contact[4].Mobile,
      contact_email: txt.Contact[4].Email
    },
    {
      id: 5,
      name: txt.Allshine.Title,
      image: Image.Allshine,
      Desc: txt.Allshine.Desc,
      FlippedDesc: txt.Allshine.FlippedDesc,
      SaleImg: Image.SaleAllshine,
      contact_image: Image.ContactAllshine,
      contact_name: txt.Contact[5].Name,
      contact_mobile: txt.Contact[5].Mobile,
      contact_email: txt.Contact[5].Email
    }
    
    // Add more categories...
  ];
  console.log(txt.Contact[0].Name);

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
          <img className="flip-card-title-img"src={category.image} alt={category.name} />
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
          </div>
          
        </div>
        <div className="flip-card-back">

          <div>
            <div className="flip-card-contact-details">
          <img className='flip-card-contact-details-img' src={category.contact_image} alt={category.contact_name} />
          <div className="flip-card-contact-details-text">
          <h2>{category.contact_name}</h2>
          <p>{category.contact_mobile}</p>
          <p>{category.contact_email}</p>
          </div>
          <img className='flip-card-sale' src={category.SaleImg} alt='Backside Sales'/>
          </div>
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
        <div onClick={handleClick} className="flip-card-clickable-area" style={{ right: '0', left: 'auto' }}>
          <img src={Image.Arrow_button} alt="arrow button" className={`flip-card-arrow ${isFlipped ? 'flip-card-arrow-flipped' : ''}`}/>
        </div>
      
    </div>
  );
}
export default GridHome;