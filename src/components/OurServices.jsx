import React from 'react'
import servicesImage from '../assets/our-services-image.svg'

function OurServices() {
  return (
    <section className='our-services'>
        <div className="our-services-inner">
            <div className="our-services-subtitle">
                <h4>Our Services</h4>
            </div>
            <div className="our-services-title-and-text">
                <div className="our-services-title">
                    <h3>Specialized Storage for Every Special Item</h3>
                </div>
                <div className="our-services-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>
            <div className="our-services-items">
                <div className="our-services-item">
                    <h4>Diverse Unit Sizes</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="our-services-item">
                    <h4>Moving Assistance</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="our-services-item">
                    <h4>Vehicle Storage</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="our-services-item">
                    <h4>Top-Notch Security</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="our-services-item-image">
                    <img src={servicesImage} alt="Our Services Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices