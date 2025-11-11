import React from 'react'

function SubscribeOurNewsletter() {
  return (
    <section className="subscribe-our-newsletter">
        <div className="subscribe-our-newsletter-inner">
            <div className="subscribe-our-newsletter-title-and-text">
                <h3>Subscribe Our Newsletter</h3>
                <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>
            <div className="subscribe-our-newsletter-input-and-button">
                    <div className="input-wrapper">
                        <input id='subscribe-input' className='subscribe-our-newsletter-input' type="email" placeholder="Enter your email" />
                        <span className="asterisk">*</span>
                    </div>
                <button className='subscribe-our-newsletter-button' type="submit">Submit</button>
            </div>
        </div>
    </section>
  )
}

export default SubscribeOurNewsletter