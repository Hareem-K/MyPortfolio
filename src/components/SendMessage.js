import React, { useState } from 'react';
import { Button } from './Button';
import "./SendMessage.css";

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false); // New loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // name, email, and message fields are all required
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        setLoading(true); // Set loading to true when submission starts

        try {
            const response = await fetch('https://formsubmit.co/hareemkhan@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Message sent successfully!');
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        }

        setLoading(false); // Set loading to false after submission is complete
    };

    return (
        <>  
            <div className='form-box'>
                {/* <img src="images/Profile_QR.png" alt="QRCode" className='QR' /> */}
                <h3 className='contact-message'>Feel free to send me a message for any inquiries, opportunities, and more!</h3>
                <div className='form-group'>
                    <input 
                        className='form-control' 
                        id='name' 
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
                        id='email' 
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
                        id='message' 
                        name='message' 
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <input type="hidden" name="_subject" value="New Email!"></input>
                <Button 
                    onClick={handleSubmit} 
                    buttonStyle="btn--download"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Sending...' : 'Send Message'} {/* Conditionally render button text */}
                </Button>
            </div>
        </>
    );
}
