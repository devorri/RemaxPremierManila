import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column: Narrative */}
        <div className="about-left">
          <h2 className="about-heading">
            We are<br />
            <span className="brand-accent-text">REMAX Premier.</span>
          </h2>
          <p className="about-description">
            REMAX Premier has been a trusted name in Philippine real estate, powered by the global strength of the brand and driven by a culture of excellence, integrity, and results.
          </p>
          <a href="#learn-more" className="btn-outline-red">
            Learn More
          </a>
        </div>

        {/* Right Column: Key Statistics Grid */}
        <div className="about-stats-grid">
          <div className="stat-card">
            <div className="stat-number">₱12B+</div>
            <div className="stat-label">Property Value<br />Transacted</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">14+</div>
            <div className="stat-label">Years of<br />Experience</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">1,097+</div>
            <div className="stat-label">Property<br />Opportunities</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">110+</div>
            <div className="stat-label">Licensed Real Estate<br />Professionals Network</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Developer &amp; Project<br />Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
};
