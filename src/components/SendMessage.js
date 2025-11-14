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
            'service_xcmuprg',
            'template_wbmtvuc',
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                phone: formData.phone,
                message: formData.message,
            },
            'jTgMDDl0Gh9lXuOh5'
        )
        .then(() => {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => setLoading(false));
    };

    return (
        <div className='form-box'>
            <h3 className='contact-message'>
                Feel free to send me a message for any inquiries, opportunities, or collaborations.
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Name *'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        placeholder='Email *'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='subject'
                        placeholder='Subject *'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='phone'
                        placeholder='Phone (optional)'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className='form-group'>
                    <textarea
                        className='form-control textarea'
                        name='message'
                        placeholder='Your Message *'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="send-btn"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
