import React, { use, useState } from 'react'

function GetInTouchForm() {
    const [formData, setformData] = useState({ name: '', email: '', message: '', phone: '', subject: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

  return (
    <form className='contact-form' noValidate>
        <div className="body">
            <div className="body-first-row">
                <label>Your Name <span>*</span></label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} required placeholder='Your name' />
            </div>
            <div className="body-second-row">
                <div className="body-second-row-email">
                    <label>Email <span>*</span></label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} required placeholder='Email' /></div>
                <div className="body-second-row-phone">
                    <label>Telephone</label>
                    <input type="tel" name='phone' value={formData.phone} onChange={handleChange} placeholder='Telephone' />
                </div>
            </div>
            <div className="body-third-row">
                <label>Subject <span>*</span></label>
                <input type="text" name='subject' value={formData.subject} onChange={handleChange} required placeholder='How can we help you' />
            </div>
            <div className="body-fourth-row">
                <label>Comments / Questions <span>*</span></label>
                <textarea className='comment-section' name="message" value={formData.message} onChange={handleChange} required placeholder='Comments'></textarea>
            </div>
            <div className="body-submit">
                <button className='body-submit-button' type="submit">Submit</button>
            </div>
        </div>
    </form>
  )
}

export default GetInTouchForm