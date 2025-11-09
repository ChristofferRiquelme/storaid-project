import React from 'react'
import SecurityIcon from '../assets/security-icon.svg'
import AffordableIcon from '../assets/affordable-icon.svg'
import CleanIcon from '../assets/clean-icon.svg'
import AcessIcon from '../assets/24-7-icon.svg'
import Image from '../assets/why-choose-us-image.svg'

function WhyChooseUs() {
  return (
    <section className='why-choose-us'>
        <div className="why-choose-us-inner">
            <div className="why-choose-us-subtitle">
                <h4>Why Choose Us</h4>
            </div>
            <div className="why-choose-us-title-and-text">
                <div className="why-choose-us-title">
                    <h3>Choose Us for Exceptional Storage Solutions</h3>
                </div>
                <div className="why-choose-us-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>
            <div className="why-choose-us-content">
                <div className="why-choose-us-content-items">
                    <div className="why-choose-us-content-item">
                        <div className="why-choose-us-content-item-icon">
                            <img src={SecurityIcon} alt="Security Icon" />
                        </div>
                        <div className="why-choose-us-content-item-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="why-choose-us-content-item">
                        <div className="why-choose-us-content-item-icon">
                            <img src={AffordableIcon} alt="Affordable Icon" />
                        </div>
                        <div className="why-choose-us-content-item-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="why-choose-us-content-item">
                        <div className="why-choose-us-content-item-icon">
                            <img src={CleanIcon} alt="Clean Icon" />
                        </div>
                        <div className="why-choose-us-content-item-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="why-choose-us-content-item">
                        <div className="why-choose-us-content-item-icon">
                            <img src={AcessIcon} alt="24/7 Access Icon" />
                        </div>
                        <div className="why-choose-us-content-item-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>
                <div className="why-choose-us-content-image">
                    <img src={Image} alt="Why Choose Us Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs