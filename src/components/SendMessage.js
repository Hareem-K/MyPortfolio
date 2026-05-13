import React, { useState } from 'react';
import "./SendMessage.css";
import emailjs from '@emailjs/browser';

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill out all required fields.');
            return;
        }

        setLoading(true);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                phone: formData.phone,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => setLoading(false));
    };

    return (
        <div className='form-box'>
            <h3 className='contact-message'>Send me a message</h3>
            <hr className="form-divider" />

            <form onSubmit={handleSubmit} className="contact-form">

                {/* Row 1: Name + Email */}
                <div className="form-row">
                    <div className="form-field">
                        <input
                            className='form-control'
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="name">Name *</label>
                    </div>

                    <div className="form-field">
                        <input
                            className='form-control'
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email *</label>
                    </div>
                </div>

                {/* Row 2: Subject + Phone */}
                <div className="form-row">
                    <div className="form-field">
                        <input
                            className='form-control'
                            type='text'
                            name='subject'
                            id='subject'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="subject">Subject *</label>
                    </div>

                    <div className="form-field">
                        <input
                            className='form-control'
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='Phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label htmlFor="phone">Phone (optional)</label>
                    </div>
                </div>

                {/* Message */}
                <div className="form-field">
                    <textarea
                        className='form-control textarea'
                        name='message'
                        id='message'
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Your message *</label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="send-btn"
                >
                    {loading ? 'Sending…' : 'Send Message →'}
                </button>
            </form>
        </div>
    );
}