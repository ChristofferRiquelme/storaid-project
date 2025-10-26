import React from 'react'
import storeaidLogo from '../assets/storeaid-logo.svg'

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
        <div className="nav-item button">
            <a href="#">Book Now</a>
        </div>
    </nav>
  )
}

export default Nav