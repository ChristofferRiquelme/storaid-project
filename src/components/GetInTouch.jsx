import React from 'react'
import GetInTouchImage from '../assets/get-in-touch-image.svg'
import GetInTouchForm from './GetInTouchForm'

function GetInTouch() {
  return (
    <section className='get-in-touch'>
        <div className="get-in-touch-inner">
            <div className="get-in-touch-content">
                <div className="get-in-touch-info">
                    <div className="get-in-touch-info-title-and-text">
                        <h4>Get in Touch</h4>
                        <h3>Get Personalized Assistance – Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                    <div className="get-in-touch-info-image">
                        <img src={GetInTouchImage} alt="Get In Touch Image" />
                    </div>
                </div>
                <div className="get-in-touch-form">
                    <GetInTouchForm />
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch