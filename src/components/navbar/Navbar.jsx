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
              to="/cars"
              className={activeLink === 'cars' ? 'active' : ''}
              onClick={() => handleLinkClick('cars')}
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/reserve"
              className={activeLink === 'reserve' ? 'active' : ''}
              onClick={() => handleLinkClick('reserve')}
            >
              Reserve
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className={activeLink === 'reservations' ? 'active' : ''}
              onClick={() => handleLinkClick('reservations')}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/addcars"
              className={activeLink === 'addcars' ? 'active' : ''}
              onClick={() => handleLinkClick('addcars')}
            >
              Add Cars
            </Link>
          </li>
          <li>
            <Link
              to="/delete"
              className={activeLink === 'delete' ? 'active' : ''}
              onClick={() => handleLinkClick('delete')}
            >
              Delete Cars
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
