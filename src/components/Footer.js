import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>About</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/contact'>Contact Page</Link>
            <Link to={"mailto:hareemkhan@gmail.com"}>Email</Link>
            <Link to='https://www.linkedin.com/in/hareemzkhan' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
            <Link to='https://github.com/Hareem-K' target='_blank' rel='noopener noreferrer'>Github</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    HK <i className='fab fa-typo3'></i>
                </Link>
            </div>
            <small className='website-rights'>HK © 2023</small>
            <div className='social-icons'>
            <Link
              className='social-icon-link mail'
              to='mailto:hareemkhan@gmail.com'
              target='_blank'
              aria-label='Email'
            >
              <i className='fas fa-envelope' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/hareemzkhan'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link github'
              to='https://github.com/Hareem-K'
              target='_blank'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </Link>

            </div>
        </div>
      </section>


    </div>
  );
}

export default Footer
