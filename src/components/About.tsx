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
            <div className="stat-number">11</div>
            <div className="stat-label">Years in the<br />Business</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">90</div>
            <div className="stat-label">Licensed Brokers and<br />Accredited Salespersons</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">2,397</div>
            <div className="stat-label">All REMAX<br />Premier Listings</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">40</div>
            <div className="stat-label">Developer<br />Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};
