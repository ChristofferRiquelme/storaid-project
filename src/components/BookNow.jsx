import React from 'react'
import PrimaryButton from './PrimaryButton'

function BookNow() {
  return (
    <section className="book-now">
        <div className="book-now-inner">
            <div className="book-now-title">
                <h3>Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h3>
            </div>
            <div className="book-now-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className="book-now-button">
                <PrimaryButton text="Book Now" />
            </div>
        </div>
    </section>
  )
}

export default BookNow