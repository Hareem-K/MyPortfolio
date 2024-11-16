import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Contact.css';
import { Button } from '../Button';
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

            <SendMessage />

            <div className='contact-items-container'>
                <div className='contact-item'>
                    <img src="images/linkedin.png" alt="LinkedIn" className='contact-image' />
                    <h1>LinkedIn</h1>
                    <p className='contact-info'>Let's connect on LinkedIn!</p>
                    <Button buttonStyle="btn--download" linkTo={"https://www.linkedin.com/in/hareemzkhan"} external>
                        Let's Connect!
                    </Button>
                </div>

                <div className='contact-item'>
                    <img src="images/github.png" alt="GitHub" className='contact-image' />
                    <h1>Github</h1>
                    <p className='contact-info'>Don't forget to check out my GitHub profile to view all of my projects!</p>
                    <Button buttonStyle="btn--download" linkTo={"https://github.com/Hareem-K"} external>
                        Github
                    </Button>
                </div>

                <div className='contact-item'>
                    <img src="images/devpost.svg" alt="Devpost" className='contact-image' />
                    <h1>Devpost</h1>
                    <p className='contact-info'>Check out my devpost profile to see my hackathons and projects!</p>
                    <Button buttonStyle="btn--download" linkTo={"https://devpost.com/Hareem-K"} external>
                        Devpost
                    </Button>
                </div>

            </div>

            {/* <img src="images/Profile_QR.png" alt="QRCode" className='QR' /> */}

            <Footer />
        </>
    );
}
