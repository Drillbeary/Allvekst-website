import React from 'react';
import '../Styles/Home.css'; // Import your CSS file

function GridHome() {
  return (
    <div className="grid-home">
      {[1, 2, 3, 4, 5, 6].map((category) => (
        <Card key={category} />
      ))}
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <p>Category information</p>
    </div>
  );
}

export default GridHome;