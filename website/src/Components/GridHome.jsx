import React, { useState } from 'react';
import '../Styles/Home.css'; // Import your CSS file

function GridHome() {

  const categories = [
    { id: 1, name: 'Småmekanisk', image: 'Småmekanisk.jpg', shortDesc: 'Short description for Vaskeri', longDesc: 'Detailed description for Vaskeri' },
    { id: 2, name: 'Paravan', image: 'Paravan.jpg', shortDesc: 'Short description for Vaskeri', longDesc: 'Detailed description for Vaskeri' },
    { id: 3, name: 'Vaskeriet', image: 'Vaskeriet.jpg', shortDesc: 'Short description for Småmekanisk', longDesc: 'Detailed description for Småmekanisk' }, 
    { id: 4, name: 'Bygg og Anlegg', image: 'Bygg-og-Anlegg.jpg', shortDesc: 'Short description for Vaskeri', longDesc: 'Detailed description for Vaskeri' },
    { id: 5, name: 'Remidt', image: 'Remidt.jpg', shortDesc: 'Short description for Småmekanisk', longDesc: 'Detailed description for Småmekanisk' }
   ,
    
    // Add more categories...
  ];
  const [expandedCard, setExpandedCard] = useState(1);

  return (
    <div className="flex-container">
      {categories.map((category, index) => (
        <Card
          key={category.id}
          category={category}
          index={index}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          categories={categories}
        />
      ))}
    </div>
  );
}
function calculateGridPlacement(index, expandedCard, categories) {
  // Create a 2D grid array
  const grid = Array(50).fill().map(() => Array(2).fill(false));

  // Mark the position of the expanded card as occupied
  if (expandedCard !== null) {
    const expandedRow = Math.floor(expandedCard / 2);
    const expandedCol = expandedCard % 2;
    grid[expandedRow][expandedCol] = true;
    if (expandedRow < 49) {
      grid[expandedRow + 1][expandedCol] = true;
    }
  }

  // Find the next available position for the current card
  let row = 0;
  let col = 0;
  for (let i = 0; i <= index; i++) {
    while (grid[row] && grid[row][col]) {
      row++;
      if (row > 49) {
        row = 0;
        col++;
      }
      if (col > 1) {
        col = 0;
      }
    }
    if (i !== index) {
      grid[row][col] = true;
    }
  }

  // Calculate the grid column and row
  let gridColumn = `${index % 2 + 1} / span 1`;
  let gridRow = Math.floor(index / 2) + 1;

  // If a card is expanded and it's in the same column and above the current card, push the current card down
  if (expandedCard !== null && expandedCard % 2 === index % 2 && expandedCard < index) {
    gridRow++;
  }
  


  const rowSpan = (expandedCard === index) ? 2 : 1;
  gridRow = `${gridRow} / span ${rowSpan}`;

  return { gridColumn, gridRow };
}

function Card({ category, index, expandedCard, setExpandedCard, categories }) {
  const isExpanded = expandedCard === index;
  const { gridColumn, gridRow } = calculateGridPlacement(index, expandedCard, categories);


  return (
    <div className={`flex-card ${isExpanded ? 'flex-expanded' : ''}`} style={{ gridColumn: gridColumn, gridRow: gridRow }}>
      <img src={category.image} alt={category.name} />
      <h2>{category.name}</h2>
      <div className={`flex-description ${isExpanded ? 'flex-expanded' : ''}`}>
        <p>{isExpanded ? category.longDesc : category.shortDesc}</p>
      </div>
      <button onClick={() => setExpandedCard(prevExpandedCard => prevExpandedCard === index ? null : index)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
export default GridHome;