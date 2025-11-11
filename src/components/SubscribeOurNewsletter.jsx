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
                <input type="email" placeholder="Enter your email" className='subscribe-our-newsletter-input' />
                <button type="submit" className='subscribe-our-newsletter-button'>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default SubscribeOurNewsletter