import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '/src/styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change l'état si l'utilisateur défile de 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="navbar-title">Mon Portfolio</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">
              <FaHome className="navbar-icon" />
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaUserAlt className="navbar-icon" />
              À propos
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaProjectDiagram className="navbar-icon" />
              Projets
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaEnvelope className="navbar-icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
