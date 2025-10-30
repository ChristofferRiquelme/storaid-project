import React from 'react'
import SecondaryButton from './SecondaryButton'

function Hero({ title, subtitle, text, image }) {
  return (
    <section className='hero'>
        <div className="hero-inner">
            <div className="hero-content">
                {subtitle && <h4 className="hero-subtitle">{subtitle}</h4>}
                {title && <h1 className="hero-title">{title}</h1>}
                {text && <p className="hero-text">{text}</p>}
            <SecondaryButton text="Discover More" />
            </div>

        {image && (
            <div className="hero-image">
                <img src={image} alt="Hero Image" />
            </div>
        )}
        </div>
    </section>
  )
}

export default Hero