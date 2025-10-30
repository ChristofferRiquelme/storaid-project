import React from 'react'
import AboutUsImage from '../assets/about-us-image.svg'
import SecondaryButton from './SecondaryButton'
import YellowPhoneIcon from '../assets/yellow-phone-icon.svg'

function AboutUs() {
  return (
    <section className='about-us'>
        <div className="about-us-inner">
            <div className="about-us-items">
                <div className="about-us-item">
                    <div className="about-us-item-image">
                        <img src={AboutUsImage} alt="About Us Image" />
                    </div>
                    <div className="about-us-item-stats">
                        <div className="about-us-item-stats-experience">
                            <h2>12+</h2>
                            <p>Years of Experience</p>
                        </div>
                        <div className="about-us-item-stats-clients">
                            <h2>150K+</h2>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="about-us-item-stats-warehouses">
                            <h2>35+</h2>
                            <p>Warehouses</p>
                        </div>
                    </div>
                </div>

                <div className="about-us-item">
                    <div className="about-us-item-text">
                        <h4>About Us</h4>
                        <h3>Providing a Safe Space for Your Treasured Items</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="about-us-item-cards">
                        <div className="about-us-item-card">
                            <h5>Vision</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                        <div className="about-us-item-card">
                            <h5>Mission</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                    </div>
                    <div className="about-us-item-info">
                        <SecondaryButton text="Discover More" />
                        <div className="about-us-item-info-contact">
                            <img src={YellowPhoneIcon} alt="Yellow Phone Icon" />
                            <div className="about-us-item-info-contact-phone">
                                <h5>More Information</h5>
                                <h6>+46 8 123 122 44</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs