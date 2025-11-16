import React from 'react';
import { Link } from 'react-router-dom';
import storeaidLogo from '../assets/storeaid-logo.svg';
import PrimaryButton from './PrimaryButton.jsx';

function Nav() {
  return (
    <nav>
        <div className="nav-item logo">
          <Link to="/">
            <img src={storeaidLogo} alt="Storeaid Logo" />
          </Link>
        </div>
        <span className="material-icons-outlined menu-icon">
            menu
        </span>
        <div className="nav-item links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        <PrimaryButton text="Book Now" to="/booking" />
    </nav>
  )
}

export default Nav;