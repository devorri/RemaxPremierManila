import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | REMAX Premier';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ overflow: 'hidden' }}>
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-hero-title">About Us</h1>
        </div>
        <div className="about-hero-banner">
          <div className="about-hero-banner-media">
            <img
              className="about-hero-banner-image"
              src="https://www.remaxcapital.ph/about-us/hero.png"
              alt="REMAX Premier team gathering"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="founding-section">
        <div className="founding-inner">
          <div className="founding-text">
            <h2 className="about-section-heading">
              The Founding <br className="desktop-break" />Story
            </h2>
            <p className="about-body-text">
              Founded in 2014, REMAX Premier was born from a shared vision among four friends; a seasoned entrepreneur, real estate broker, banker, and lawyer, who aimed to elevate the standards of the Philippine real estate industry. Through a franchise agreement with RE/MAX Philippines, REMAX Premier officially began its journey toward real estate excellence.
            </p>
            <p className="about-body-text">
              From its first office in Movenue, Makati in 2015, REMAX Premier steadily expanded, moving to Rockwell, Makati in 2017, and continuing to grow its presence across Metro Manila. Today, the company is home to PRC-licensed and accredited agents delivering top-tier service.
            </p>
          </div>
          <div className="founding-images">
            <div className="founding-image-wrapper">
              <img
                className="founding-image"
                src="https://www.remaxcapital.ph/about-us/founding-1.png"
                alt="REMAX Premier founding members"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="founding-image-wrapper founding-image-offset">
              <img
                className="founding-image"
                src="https://www.remaxcapital.ph/about-us/founding-2.png"
                alt="REMAX Premier team event"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="about-quote-section">
        <div className="about-quote-inner">
          <blockquote className="about-blockquote">
            <p>
              Our focus is building a holistic environment that prioritizes agent growth, client satisfaction, professional integrity, and long-term success.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision-section">
        <div className="about-vision-inner">
          <div className="about-vision-image-wrapper">
            <img
              className="about-vision-image"
              src="https://www.remaxcapital.ph/about-us/vision.png"
              alt="REMAX Premier Awards 2025"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-vision-text">
            <h2 className="about-section-heading">
              From Vision <em>to Impact</em>
            </h2>
            <p className="about-body-text">
              REMAX Premier continues to invest in tools, training, and systems that empower agents to build sustainable real estate businesses. Guided by its core values of professionalism, ethics, innovation, and collaboration, the company remains committed to delivering exceptional service and shaping the future of real estate in the Philippines.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
