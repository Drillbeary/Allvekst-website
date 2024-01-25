import React from 'react';
import '../Styles/Home.css'; // Import your CSS file

function MenuIcon() {
  return (
    <div className="menu-icon">
      <a href="#link1" className="menu-button">Link 1</a>
      <a href="#link2" className="menu-button">Link 2</a>
      <a href="#link3" className="menu-button">Link 3</a>
    </div>
  );
}

export default MenuIcon;