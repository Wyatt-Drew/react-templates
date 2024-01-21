// React Navbar Component
import React from 'react';
import './Navbar.css';

const Dropdown = ({ children }) => {
  return (
    <div className="dropdown">
      {children}
    </div>
  );
};

const NavItem = ({ title, dropdownContent }) => {
  return (
    <div className="nav-item">
      {title}
      {dropdownContent && <Dropdown>{dropdownContent}</Dropdown>}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavItem title="Home" />
      <NavItem title="About" />
      <NavItem title="Services" dropdownContent={<div>            <ul style={{listStyleType: 'none'}}>
              <li>
                <a href="mailto:MyCorporateEmail@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://facebook.com/MyCorporateFacebook">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/MyCorporateTwitter">Twitter</a>
              </li>
              <li>
                <a href="https://twitter.com/MyCorporateTwitter">Careers</a>
              </li>
            </ul></div>} />
      <NavItem title="Contact" />
    </nav>
  );
};

export default Navbar;
