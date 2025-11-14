import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Contact.css';
import SendMessage from '../SendMessage';

export default function Contact() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className='contact'>CONTACT</h1>

            {/* <ContactCards /> */}

            {/* <div className='contact-item'>
                <img src="images/technology.png" alt="Email" className='contact-image' />
                <h1>Email</h1>
                <p className='contact-info'>Feel free to send me an email for any inquiries, opportunities, and more!</p>
                <Button buttonStyle="btn--primary" linkTo={"mailto:hareemkhan@gmail.com"} external>
                    Send Message
                </Button>
            </div> */}
            
            <div className="contact-container">
                <div className="contact-left">
                    <SendMessage />
                </div>

                <div className="contact-right">
                    <p>
                        I’d love to hear from you! Feel free to reach out for opportunities, 
                        collaborations, or general inquiries.
                    </p>
                    <h3>Get in Touch</h3>

                    <div className="contact-link">
                        <img src="/images/email.png" alt=""  className='email-icon'/>
                        <div>
                            <strong>Email</strong>
                            <p>hareemkhan@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <img src="/images/linkedin.png" alt="" />
                        <div>
                            <strong>LinkedIn</strong>
                            <p>
                                <a href="https://www.linkedin.com/in/hareemzkhan" target="_blank" rel="noopener noreferrer">
                                    Connect on LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <img src="/images/github.png" alt="" />
                        <div>
                            <strong>GitHub</strong>
                            <p>
                                <a href="https://github.com/Hareem-K" target="_blank" rel="noopener noreferrer">
                                    View my GitHub
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <img src="/images/devpost.svg" alt="" />
                        <div>
                            <strong>Devpost</strong>
                            <p>
                                <a href="https://devpost.com/Hareem-K" target="_blank" rel="noopener noreferrer">
                                    Hackathon Projects
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}