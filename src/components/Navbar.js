// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                Experience
                            </NavLink>
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
