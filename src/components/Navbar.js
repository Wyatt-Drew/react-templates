import React, { useState } from 'react';
import './Navbar.css'; // This will be our CSS file for styling

const NavbarItem = ({ title, dropdownContent }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="navbar-item" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {title}
      {hover && dropdownContent && (
        <div className="dropdown">
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarItem title="Home" />
      <NavbarItem title="About" />
      <NavbarItem 
        title="Services" 
        dropdownContent={<div>Service 1<br />Service 2<br />Service 3</div>} 
      />
      <NavbarItem title="Contact" />
    </div>
  );
};

export default Navbar;
