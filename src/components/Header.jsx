import React from 'react'
import phoneIcon from '../assets/phone-icon.svg'
import mailIcon from '../assets/mail-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import xIcon from '../assets/x-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import youtubeIcon from '../assets/youtube-icon.svg'

function Header() {
  return (
    <div className="header">
        <div className="header-item contact">
            <div className="header-item-phone">
                <div className="header-item-phone-image">
                    <img src={phoneIcon} alt="Phone Icon" />
                </div>
                <div className="header-item-phone-number">
                    <a href="callto:+46812312244">+46 8 123 122 44</a>
                </div>
            </div>
            <div className="header-item-mail">
                <div className="header-item-mail-image">
                    <img src={mailIcon} alt="Mail Icon" />
                </div>
                <div className="header-item-mail-address">
                    <a href="mailto:contact@domain.com">contact@domain.com</a>
                </div>
            </div>
        </div>

        <div className="header-item socials">
            <div className="header-item-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook Icon" /></a>
            </div>
            <div className="header-item-social">
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X Icon" /></a>
            </div>
            <div className="header-item-social">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram Icon" /></a>
            </div>
            <div className="header-item-social">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube Icon" /></a>
            </div>
        </div>
    </div>
  )
}

export default Header