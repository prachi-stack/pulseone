import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="logo" onClick={() => scrollToSection('hero')}>
                        <img src="/logo.svg" alt="PulseOne Logo" />
                        <span className="logo-text">PulseOne</span>
                    </div>

                    <div className="nav-links">
                        <a onClick={() => scrollToSection('problems')} className="nav-link">
                            Problems
                        </a>
                        <a onClick={() => scrollToSection('benefits')} className="nav-link">
                            Benefits
                        </a>
                        <a onClick={() => scrollToSection('pillars')} className="nav-link">
                            PulseOne Ecosystem
                        </a>
                        <a onClick={() => scrollToSection('faq')} className="nav-link">
                            FAQs
                        </a>
                        <button className="btn">Get Started</button>
                    </div>

                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className="mobile-menu-line"></span>
                        <span className="mobile-menu-line"></span>
                        <span className="mobile-menu-line"></span>
                    </button>
                </div>
            </nav>

            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
            ></div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-menu-logo">
                        <img src="/logo.svg" alt="PulseOne Logo" />
                        <span className="logo-text">PulseOne</span>
                    </div>
                    <button
                        className="mobile-menu-close"
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav className="mobile-menu-nav">
                    <a href="#features" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        Features
                    </a>
                    <a href="#benefits" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        Benefits
                    </a>
                    <a href="#howitworks" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        How It Works
                    </a>
                    <a href="#contact" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        Contact
                    </a>
                </nav>

                <div className="mobile-menu-footer">
                    <button className="mobile-menu-cta" onClick={toggleMobileMenu}>
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
