import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#locations')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById('locations');
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Partners', href: '/partners' },
    { label: 'Locations', href: '/#locations' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-top'}`}>
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <Logo variant="white" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link ${location.pathname === link.href ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <Logo variant="white" />
              <button
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
