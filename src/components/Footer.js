import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <Link to='/' className='footer-logo'>
            HK<span className="navbar-logo-symbol">✦</span>
          </Link>
          <p className='footer-tagline'>
            Software engineering graduate building interfaces that are intuitive, elegant, and purposeful.
          </p>
          <span className='footer-status'>
            <span className='footer-dot' />
            Open to opportunities
          </span>
        </div>

        <nav className='footer-nav'>
          <div className='footer-col'>
            <h4>Pages</h4>
            <Link to='/'>About</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='footer-col'>
            <h4>Connect</h4>
            <Link to='mailto:hareemkhan@gmail.com'>Email</Link>
            <Link to='https://www.linkedin.com/in/hareemzkhan' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
            <Link to='https://github.com/Hareem-K' target='_blank' rel='noopener noreferrer'>GitHub</Link>
            <Link to='https://devpost.com/Hareem-K' target='_blank' rel='noopener noreferrer'>Devpost</Link>
          </div>
        </nav>
      </div>

      <div className='footer-bottom'>
        <small className='footer-copy'>© 2026 Hareem Khan</small>
        <div className='footer-icons'>
          <Link className='footer-icon' to='mailto:hareemkhan@gmail.com' aria-label='Email'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>

          <Link className='footer-icon' to='https://www.linkedin.com/in/hareemzkhan' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.5v-7H9v7zm-1.25-8a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 17h-2.5v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17H10v-7h2.5v1.1c.46-.69 1.27-1.1 2-1.1 1.66 0 3 1.34 3 3V17z"/>
            </svg>
          </Link>

          <Link className='footer-icon' to='https://github.com/Hareem-K' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
