import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

export const useNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return { isMenuOpen, toggleMenu };
};

const NavBar = (props) => {
    const location = useLocation();
    const { isMenuOpen, toggleMenu } = useNavigation();

    useEffect(() => {
        document.body.classList.remove('home-page', 'about-page', 'projects-page', 'contact-page', 'resume-page');
        if (location.pathname === '/About') {
            document.body.classList.add('about-page');
        } else if (location.pathname === '/Projects') {
            document.body.classList.add('projects-page');
        } else if (location.pathname === '/Contact') {
            document.body.classList.add('contact-page');
        } else {
            document.body.classList.add('home-page');
        }
    }, [location]);

    return (
        <div className='nav-bar'>
            <nav className='nav-links'>
                <div className='logo-nav-link'>
                    <Link to="/" className='nav-link-logo'>CACS</Link>     
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`main-nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} >About</Link>
                    <Link to="/Projects" className={`nav-link ${location.pathname === '/Projects' ? 'active' : ''}`}>Projects</Link>
                    <Link to="/Contact" className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}>Contact</Link>
                    <a href="https://drive.google.com/file/d/1gVxPpOKR8x-YrDD6sy2NgT4HnajsZxxd/view?usp=sharing" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="nav-link">
                       Resume
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
