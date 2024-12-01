// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mathis | Tous droits réservés</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mathis-le-guen/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/mlgyn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:leguenmathispro@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
