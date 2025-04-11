import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
        <img src="/assets/logo.png" alt="Logo" className="logo-icon" />
          <h2>Logoipsum</h2>
        </div>
        <nav className="nav-links">
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
