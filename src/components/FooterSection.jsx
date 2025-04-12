import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
        <div className="footer-inner">
      <div className="footer-container">
        <div className="footer-description">
          <p>
           Aspiring Full Stack Developer | Computer Engineer |
         Passionate about creating innovative mobile apps and websites.
           Fueled by curiosity and a desire to build solutions for the future.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/samir-bogati-62bb04165/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:samir23boagti@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/samir23bogati" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <ul>
              <li>Payments</li>
              <li>Invoice Factoring</li>
              <li>Invoice Finance</li>
              <li>Supplier Finance</li>
              <li>Customer Finance</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Frequently asked questions</li>
              <li>Knowledge base</li>
              <li>API documentation</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/contact">Contact us</a>
        </div>
        <div>
        <a href="/site-map">Site map</a>
        <a href="https://samir23bogati.github.io/portfolio/" target="_blank"rel="noopener noreferrer">@samirbogati</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;