import React, { useState, useEffect } from 'react';
import './JoinCommunityPopup.css'; // Import the CSS for styling
import productImage from '../assets/grass.jpg';

const JoinCommunityPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 50) {
        if (!showPopup) {
          setShowPopup(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our community!');
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popupContainer">
      <div className = "column">
      <img className = 'productImage' src={productImage}/>
      </div>
      <div className = "column">
        <div className="popup">
          <button className="exitButton" onClick={handleClose}>X</button>
          <h2>Give us your e-mail so we can give you 25% off next time you visit us</h2>
          <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="First Name" required /> */}
            <input type="email" placeholder="Email" required />
            {/* <input type="tel" placeholder="Phone Number" required /> */}
            <button type="submit">Get Offers</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityPopup;
