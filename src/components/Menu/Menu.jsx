import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <div className="logo-container">
        <img src="/WeatherIconBlack-removebg-preview.png" alt="Logo" className="logo-image" />
        <div className="logo-text">WeatherWise</div>
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
