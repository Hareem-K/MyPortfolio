import React, { useState } from 'react';
import "./SendMessage.css";
import emailjs from '@emailjs/browser';

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        setLoading(true);

        emailjs.send(
            'service_xcmuprg',
            'template_wbmtvuc',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'jTgMDDl0Gh9lXuOh5'
        )
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => setLoading(false));
    };

    return (
        <div className='form-box'>
            <h3 className='contact-message'>Feel free to send me a message for any inquiries, opportunities, and more!</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Name'
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
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        className='form-control'
                        name='message'
                        placeholder='Your Message...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '8px 20px',
                        borderRadius: '15px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease-out',
                        color: 'white',
                        backgroundColor: 'black',
                        border: '1px solid black'
                    }}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = 'black';
                            e.currentTarget.style.border = '1px solid black';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!loading) {
                            e.currentTarget.style.backgroundColor = 'black';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.border = '1px solid black';
                        }
                    }}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>


            </form>
        </div>
    );
}
