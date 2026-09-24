import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.webp';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">REMAX Premier Manila</p>
          <h1 className="hero-title">
            Your Property Deserves the Right Strategy.
          </h1>
          <p className="hero-description">
            Trusted real estate guidance for owners who want to sell, lease, or maximize the value of their property.
          </p>

          <div className="hero-cta-group">
            <Link to="/partners" className="hero-cta-primary">
              Our Partners
            </Link>
            <Link to="/contact-us" className="hero-cta-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        <button 
          className="hero-scroll-btn" 
          onClick={scrollToAbout} 
          aria-label="Scroll down"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};
