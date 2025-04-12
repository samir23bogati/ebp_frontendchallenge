import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
        <img src="/assets/logo.png" alt="Logo" className="logo-icon" />
          <h2>Logoipsum</h2>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#help">Help center</a></li>
            <li><a href="#get-started">Get started</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <a href="#login" className="login-link">Login</a>
          <button className="demo-button">Request a demo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;