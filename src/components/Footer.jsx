import React from 'react'
import linkArrowIcon from '../assets/link-arrow-icon.svg'

function Footer() {
  return (
    <section className='footer'>
        <div className="footer-inner">
            <div className="footer-content">
                <div className="footer-copyright">
                    <p>© 2025 StorAid, All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-link-terms-and-conditions">
                        <a href="/terms-and-conditions"><img src={linkArrowIcon} alt="Link arrow icon" />Terms & Conditions</a>
                    </div>
                    <div className="footer-link-privacy-policy">
                        <a href="/privacy-policy"><img src={linkArrowIcon} alt="Link arrow icon" />Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer