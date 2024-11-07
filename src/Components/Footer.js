// Components/Footer.js
import React from 'react';
import {  FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing icons
import './Footer.css'; // Ensure this file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Appointment Management System. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-socials">
        <a href="https://github.com/Amangupta81" className="social-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aman-gupta-632a3424a/" className="social-icon"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
