import React, { use, useState } from 'react'

function GetInTouchForm() {
    const [formData, setformData] = useState({ name: '', email: '', comment: '', phoneNumber: '', subject: '' });
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
            if (formData[field].trim() === '' && field !== 'phoneNumber') {
                newErrors[field] = `This ${field} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setSubmitted(true);
            setformData({ name: '', email: '', comment: '', phoneNumber: '', subject: '' });
        }
    };

    if (submitted) {
        return (
            <div className='contact-form-thank-you'>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                <button className='contact-form-thank-you-button' onClick={handleOk}>OK</button>
            </div>
        );
    }

  return (
    <form className='contact-form' onSubmit={handleSubmit} noValidate>
        <div className="body">
            <div className="body-first-row">
                <label>Your Name <span>*</span></label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} required placeholder='Your name' />
                <span>{errors.name && errors.name}</span>
            </div>
            <div className="body-second-row">
                <div className="body-second-row-email">
                    <label>Email <span>*</span></label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} required placeholder='Email' />
                    <span>{errors.email && errors.email}</span>
                </div>
                <div className="body-second-row-phone">
                    <label>Telephone</label>
                    <input type="tel" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder='Telephone' />
                </div>
            </div>
            <div className="body-third-row">
                <label>Subject <span>*</span></label>
                <input type="text" name='subject' value={formData.subject} onChange={handleChange} required placeholder='How can we help you' />
                <span>{errors.subject && errors.subject}</span>
            </div>
            <div className="body-fourth-row">
                <label>Comments / Questions <span>*</span></label>
                <textarea className='comment-section' name="comment" value={formData.comment} onChange={handleChange} required placeholder='Comments'></textarea>
                <span>{errors.comment && errors.comment}</span>
            </div>
            <div className="body-submit">
                <button className='body-submit-button' type="submit">Submit</button>
            </div>
        </div>
    </form>
  )
}

export default GetInTouchForm