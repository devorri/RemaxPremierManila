import React from 'react';
import propertyImg from '../assets/property_confidence.jpg';

export const Confidence: React.FC = () => {
  return (
    <section className="confidence-section">
      <div className="confidence-container">
        {/* Left: Luxury Property Image */}
        <div className="confidence-image-col">
          <img 
            src={propertyImg} 
            alt="Luxury Interior" 
            className="confidence-image"
          />
          {/* Subtle slider dots like original */}
          <div className="confidence-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Right: Red Editorial Card */}
        <div className="confidence-text-col">
          <div className="confidence-content">
            <h2 className="confidence-heading">
              For Clients Who<br />Value Confidence
            </h2>
            <p className="confidence-description">
              Buying, selling, leasing, or investing in property is a major decision and confidence matters. With REMAX Capital's expertise, network, and commitment to service excellence, clients gain more than transactions; they gain trusted advisors.
            </p>
            <div className="confidence-actions">
              <a href="#find-property" className="btn-confidence">
                Find a Property
              </a>
              <a href="#list-property" className="btn-confidence">
                List a Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
