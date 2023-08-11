import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faEarthAmericas, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`menu ${isMenuOpen ? 'active' : ''} ${window.innerWidth >= 768 ? 'hidden-menu' : ''}`}>
      <div>
        <div className="logo-container">
          <img src="/WeatherIconBlack-removebg-preview.png" alt="Logo" className="logo-image" />
          <div className="logo-text">WeatherWise</div>
          <FontAwesomeIcon onClick={toggleMenu} icon={faBarsStaggered} size="2x" className="menu-toggle fa-ul fa-bounce" />
        </div>
      </div>

      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <FontAwesomeIcon icon={faHome} className="menu-icon" /> Página Inicial
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/weather" className="menu-link">
            <FontAwesomeIcon icon={faEarthAmericas} className="menu-icon" /> Aplicativo
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-link">
            <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" /> Sobre
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contact" className="menu-link">
            <FontAwesomeIcon icon={faEnvelope} className="menu-icon" /> Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
