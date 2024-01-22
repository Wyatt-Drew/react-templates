// React Navbar Component
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Dropdown = ({ children }) => {
  return (
    <div className="dropdown">
      {children}
    </div>
  );
};

const NavItem = ({ title, dropdownContent, to }) => {
  const content = dropdownContent ? (
    <div className="nav-item">
      {title}
      <Dropdown>{dropdownContent}</Dropdown>
    </div>
  ) : (
    <Link to={to} className="nav-item">
      {title}
    </Link>
  );

  return content;
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavItem title="Home" to="/"/>
      <NavItem title="About" />
      <NavItem title="Services" />
      <NavItem title="Contact Us" dropdownContent={<div>            <ul style={{listStyleType: 'none'}}>
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
            <NavItem title="Login" to="/login" />
    </nav>
  );
};

export default Navbar;
