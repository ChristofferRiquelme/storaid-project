import React from 'react'
import storeaidLogo from '../assets/storeaid-logo.svg'
import PrimaryButton from './PrimaryButton.jsx'

function Nav() {
  return (
    <nav>
        <div className="nav-item logo">
          <img src={storeaidLogo} alt="Storeaid Logo" />
        </div>
        <span className="material-icons-outlined menu-icon">
            menu
        </span>
        <div className="nav-item links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
        </div>
        <PrimaryButton text="Book Now" />
    </nav>
  )
}

export default Nav