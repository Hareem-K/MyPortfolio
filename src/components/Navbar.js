// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 960) {
                setClick(false); // Close the mobile menu when resizing to avoid issues
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        HK <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Button className='my--button' buttonStyle='btn--outline' linkTo='/contact' onClick={closeMobileMenu}>
                                CONTACT
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
