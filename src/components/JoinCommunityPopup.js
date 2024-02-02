import React, { useState, useEffect } from 'react';
import './JoinCommunityPopup.css'; // Import the CSS for styling

const JoinCommunityPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Check if the mouse is leaving the viewport from the top
      if (e.clientY < 50) {
        // Only show the popup if it hasn't been shown already
        if (!showPopup) {
          setShowPopup(true);
        }
      }
    };

    // Add the mouseleave event listener to the document
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup the event listener
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup]); // Add showPopup to the dependency array to prevent multiple popups

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here
    alert('Thank you for joining our community!');
    setShowPopup(false); // Close the popup after submission
  };

  if (!showPopup) return null;

  return (
    <div className="popupContainer">
      <div className="popup">
        <h2>Join the Community</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <button type="submit">Sign Me Up</button>
        </form>
      </div>
    </div>
  );
};

export default JoinCommunityPopup;
