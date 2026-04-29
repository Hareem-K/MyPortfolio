import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Contact.css';
import SendMessage from '../SendMessage';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* ── Dark hero strip ── */}
            <div className="contact-hero">
                <span className="contact-hero__eyebrow">Let's connect</span>
                <h1 className="contact-hero__headline">Have a project in mind?<br /><em>I'd love to hear from you.</em></h1>
                <p className="contact-hero__sub">
                    Whether it's an opportunity, a collaboration, or just a hello —
                    my inbox is always open.
                </p>
            </div>

            {/* ── Two-column body ── */}
            <div className="contact-container">

                {/* Left: form */}
                <div className="contact-left">
                    <SendMessage />
                </div>

                {/* Right: info */}
                <div className="contact-right">
                    <h2 className="contact-right__title">Get in touch</h2>
                    <p className="contact-right__intro">
                        I'm currently open to new opportunities and interesting collaborations.
                        The best way to reach me is via email, but you're also welcome to connect on LinkedIn.
                    </p>

                    <div className="contact-link">
                        <div className="contact-link__icon">
                            <img src="/images/email.png" alt="Email" />
                        </div>
                        <div className="contact-link__body">
                            <strong>Email</strong>
                            <p>hareemkhan@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <div className="contact-link__icon">
                            <img src="/images/linkedin.png" alt="LinkedIn" />
                        </div>
                        <div className="contact-link__body">
                            <strong>LinkedIn</strong>
                            <p>
                                <a href="https://www.linkedin.com/in/hareemzkhan" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/hareemzkhan
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <div className="contact-link__icon">
                            <img src="/images/github.png" alt="GitHub" />
                        </div>
                        <div className="contact-link__body">
                            <strong>GitHub</strong>
                            <p>
                                <a href="https://github.com/Hareem-K" target="_blank" rel="noopener noreferrer">
                                    github.com/Hareem-K
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <div className="contact-link__icon">
                            <img src="/images/devpost.svg" alt="Devpost" />
                        </div>
                        <div className="contact-link__body">
                            <strong>Devpost</strong>
                            <p>
                                <a href="https://devpost.com/Hareem-K" target="_blank" rel="noopener noreferrer">
                                    devpost.com/Hareem-K
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-available">
                        <span className="contact-available__dot" />
                        Available for new opportunities
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}