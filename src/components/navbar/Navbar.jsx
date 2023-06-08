import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsFacebook } from 'react-icons/bs';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>CarBnB</h2>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link
              to="/home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === 'services' ? 'active' : ''}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <BsFacebook />
        <BsFacebook />
        <BsFacebook />
        <BsFacebook />
        <BsFacebook />
      </div>
      <div className="footer">
        <p>Copyright © 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Navbar;
