// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">GrillMama</div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#order">Menu</a></li>
      </ul>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
};

export default Navbar;
