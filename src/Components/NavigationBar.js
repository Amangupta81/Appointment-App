// Components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const NavigationBar = () => {
  return (
    <nav className="navbar">
      {/* Left-aligned brand/logo */}
      <div className="navbar-logo">
        <h1>Appointment Management System</h1>
      </div>

      {/* Right-aligned links and sign-up button */}
      <div className="nav-container">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li> {/* Changed to "/" */}
          <li><Link to="/login">Login</Link></li> {/* Changed to lowercase "login" */}
          <li><Link to="/about">About Us</Link></li> {/* Changed to lowercase "about" */}
          <li><Link to="/contact">Contact</Link></li> {/* Changed to lowercase "contact" */}
        </ul>
        <Link to="/signup" className="signup-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
