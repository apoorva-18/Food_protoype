// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>GrillMama</h2>
        <p>Serving lip-smackin’ meals with passion.</p>
      </div>

      <ul className="footer-links">
        <li><a href="#About Us">About Us</a></li>
        <li><a href="#Contact Us">Contact Us</a></li>
        <li><a href="#Help">Help</a></li>
        <li><a href="#Privacy Policy">Privacy Policy</a></li>


      </ul>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} GrillMama. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
