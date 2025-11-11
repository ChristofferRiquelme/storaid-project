import React from 'react'
import { useState, useEffect } from 'react'
import TestimonialsQuote from '../assets/testimonials-quote.svg'

function Testimonials({ backgroundImage, overlayColor, overlayOpacity }) {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    }

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            .then(response => response.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);
    
  return (
    <section className='testimonials' style={backgroundStyle}>
        {overlayColor && (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: overlayColor,
                opacity: overlayOpacity,
                pointerEvents: 'none',
            }} />
        )}
        <div className="testimonials-inner" style={{ position: 'relative', zIndex: 1 }}>
            <div className="testimonials-content">
                <div className="testimonials-content-subtitle">
                    <h4>Testimonials</h4>
                </div>
                <div className="testimonials-content-title">
                    <h3>See What Our Clients Have to Say</h3>
                </div>
                <div className="testimonials-content-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>

            <div className="testimonials-cards">
                <div className="testimonials-card">
                    <div className="testimonials-card-rating">
                        <p>{testimonials[0]?.rating}</p>
                    </div>
                    <div className="testimonials-card-text">
                        <p>{testimonials[0]?.comment}</p>
                    </div>
                    <div className="testimonials-card-info">
                        <div className="testimonials-card-info-figure">
                            <img src={testimonials[0]?.avatarUrl} alt={testimonials[0]?.name} />
                        </div>
                        <div className="testimonials-card-info-name-and-title">
                            <h6>{testimonials[0]?.name}</h6>
                            <p>{testimonials[0]?.companyName}</p>
                        </div>
                        <div className="testimonials-card-info-image">
                            <img src={TestimonialsQuote} alt="Quote Icon" />
                        </div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="testimonials-card-rating">
                        <p>{testimonials[1]?.rating}</p>
                    </div>
                    <div className="testimonials-card-text">
                        <p>{testimonials[1]?.comment}</p>
                    </div>
                    <div className="testimonials-card-info">
                        <div className="testimonials-card-info-figure">
                            <img src={testimonials[1]?.avatarUrl} alt={testimonials[1]?.name} />
                        </div>
                        <div className="testimonials-card-info-name-and-title">
                            <h6>{testimonials[1]?.name}</h6>
                            <p>{testimonials[1]?.companyName}</p>
                        </div>
                        <div className="testimonials-card-info-image">
                            <img src={TestimonialsQuote} alt="Quote Icon" />
                        </div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="testimonials-card-rating">
                        <p>{testimonials[2]?.rating}</p>
                    </div>
                    <div className="testimonials-card-text">
                        <p>{testimonials[2]?.comment}</p>
                    </div>
                    <div className="testimonials-card-info">
                        <div className="testimonials-card-info-figure">
                            <img src={testimonials[2]?.avatarUrl} alt={testimonials[2]?.name} />
                        </div>
                        <div className="testimonials-card-info-name-and-title">
                            <h6>{testimonials[2]?.name}</h6>
                            <p>{testimonials[2]?.companyName}</p>
                        </div>
                        <div className="testimonials-card-info-image">
                            <img src={TestimonialsQuote} alt="Quote Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials