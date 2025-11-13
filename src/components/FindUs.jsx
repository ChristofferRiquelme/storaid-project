import React from 'react'
import findUsImage from '../assets/find-us-image.svg'
import phoneIcon from '../assets/phone-yellow-icon.svg'
import mailIcon from '../assets/mail-secondary-icon.svg'
import pinLocationIcon from '../assets/pin-location-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import xIcon from '../assets/x-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import youtubeIcon from '../assets/youtube-icon.svg'

function FindUs() {
  return (
    <section className='find-us'>
        <div className="find-us-inner">
            <div className="find-us-content">
                <div className="find-us-content-image">
                    <img src={findUsImage} alt="Person Figure Image" />
                </div>
                <div className="find-us-content-description">
                    <div className="find-us-content-description-title-and-text">
                        <h3>Find Us On:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="find-us-content-description-contact">
                        <div className="find-us-content-description-contact-icon">
                            <img src={phoneIcon} alt="Phone Icon" />
                        </div>
                        <div className="find-us-content-description-contact-info">
                            <h5>Call Center</h5>
                            <p>+46 8 123 122 44</p>
                        </div>
                    </div>
                    <div className="find-us-content-description-contact">
                        <div className="find-us-content-description-contact-icon">
                            <img src={mailIcon} alt="Mail Icon" />
                        </div>
                        <div className="find-us-content-description-contact-info">
                            <h5>Email Address</h5>
                            <p>contact@domain.com</p>
                        </div>
                    </div>
                    <div className="find-us-content-description-contact">
                        <div className="find-us-content-description-contact-icon">
                            <img src={pinLocationIcon} alt="Location Pin Icon" />
                        </div>
                        <div className="find-us-content-description-contact-info">
                            <h5>Location</h5>
                            <p>Klarabergsviadukten 90, Stockholm</p>
                        </div>
                    </div>
                    <div className='find-us-content-description-socials'>
                        <div className="find-us-content-description-socials-text">
                            <h5>Our Social Media</h5>
                        </div>
                        <div className="find-us-content-description-socials-line"></div>
                        <div className="find-us-content-description-socials-icons">
                            <img src={facebookIcon} alt="Facebook Icon" />
                            <img src={xIcon} alt="X Icon" />
                            <img src={instagramIcon} alt="Instagram Icon" />
                            <img src={youtubeIcon} alt="YouTube Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FindUs