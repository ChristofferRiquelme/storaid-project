import React from 'react'
import { useState } from 'react'

function SubscribeOurNewsletter() {
        const [formData, setformData] = useState({ email: '' });
        const [errors, setErrors] = useState({});
        const [submitted, setSubmitted] = useState(false);
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setformData({ ...formData, [name]: value });
    
            if (value.trim() === '') {
                setErrors(prevErrors => ({ ...prevErrors, [name]: `This ${name} is required` }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
            }
        };
    
        const handleOk = () => {
            setSubmitted(false);
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const newErrors = {}
            Object.keys(formData).forEach(field => {
                if (formData[field].trim() === '') {
                    newErrors[field] = `This ${field} is required`;
                }
            });
    
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
    
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (res.ok) {
                setSubmitted(true);
                setformData({ email: '' });
            }
        };
    
        if (submitted) {
            return (
                <div className='contact-form-thank-you'>
                    <h2>Thank You!</h2>
                    <p>Your subscription has been sent successfully. We will get back to you shortly.</p>
                    <button className='booking-form-thank-you-button' onClick={handleOk}>OK</button>
                </div>
            );
        }
  return (
    <form className="subscribe-our-newsletter" onSubmit={handleSubmit} noValidate>
        <div className="subscribe-our-newsletter-inner">
            <div className="subscribe-our-newsletter-title-and-text">
                <h3>Subscribe Our Newsletter</h3>
                <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>
            <div className="subscribe-our-newsletter-input-and-button">
                    <div className="input-wrapper">
                        <input className='subscribe-our-newsletter-input' type="email" name='email' value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                        <span className="asterisk">*</span>
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                <button className='subscribe-our-newsletter-button' type="submit">Submit</button>
            </div>
        </div>
    </form>
  )
}

export default SubscribeOurNewsletter