import React from 'react'
import { use, useState } from 'react'

function BookingUnitForm() {
        const [formData, setformData] = useState({ name: '', email: '', selectedUnit: '', purpose: '' });
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
    
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (res.ok) {
                setSubmitted(true);
                setformData({ name: '', email: '', selectedUnit: '', purpose: '' });
            }
        };
    
        if (submitted) {
            return (
                <div className='contact-form-thank-you'>
                    <h2>Thank You!</h2>
                    <p>Your message has been sent successfully. We will get back to you shortly.</p>
                    <button className='booking-form-thank-you-button' onClick={handleOk}>OK</button>
                </div>
            );
        }
        
  return (
    <form className='contact-form' onSubmit={handleSubmit} noValidate>
        <div className="body">
            <div className="body-second-row">
                <div className="body-second-row-email">
                    <label>Your Name <span>*</span></label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} required placeholder='Your name' />
                    <span>{errors.email && errors.email}</span>
                </div>
                <div className="body-second-row-phone">
                    <label>Email <span>*</span></label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
                </div>
            </div>
            <div className="body-third-row">
                <label>Choose Unit <span>*</span></label>
                <input type="text" name='selectedUnit' value={formData.selectedUnit} onChange={handleChange} required placeholder='Choose Unit' />
                <span>{errors.selectedUnit && errors.selectedUnit}</span>
            </div>
            <div className="body-fourth-row">
                <label>Storage purpose <span>*</span></label>
                <textarea className='comment-section' name="purpose" value={formData.purpose} onChange={handleChange} required placeholder='Describe your storage purpose so that we can match your request'></textarea>
                <span>{errors.purpose && errors.purpose}</span>
            </div>
            <div className="body-submit">
                <button className='body-submit-button' type="submit">Book Unit</button>
            </div>
        </div>
    </form>
  )
}

export default BookingUnitForm