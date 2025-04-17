import React from 'react';
import { FaHome, FaBell, FaSearch, FaUser } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for navigation
import './header.css'; // For styling

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        {/* Navigate to Home page */}
        <Link to="/" className="icon-link">
          <FaHome className="icon" title="Home" />
        </Link>
      </div>
      <div className="header-right">
        {/* Navigate to Search page */}
        <Link to="/search" className="icon-link">
          <FaSearch className="icon" title="Search" />
        </Link>
        {/* Navigate to Notifications page */}
        <Link to="/notifications" className="icon-link">
          <FaBell className="icon" title="Notifications" />
        </Link>
        {/* Navigate to Profile page */}
        <Link to="/profile" className="icon-link">
          <FaUser className="icon" title="Profile" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
