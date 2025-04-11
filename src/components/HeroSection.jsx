import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Get instant cash flow with invoice factoring</h1>
          <p>Why wait? Get same day funding and a faster way to access cash flow.</p>
          <button className="hero-btn">Get started</button>
          <div className="hero-indicators">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="hero-graphic">
          <img src="/assets/herosection.png" alt="Decorative Graphic" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
