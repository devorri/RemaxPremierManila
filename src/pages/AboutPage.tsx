import React, { useEffect } from 'react';
import gumersindoImg from '../assets/partners/gumersindo.webp';
import glennisImg from '../assets/partners/glennis.webp';
import carloImg from '../assets/partners/carlo.webp';
import maryAnneImg from '../assets/partners/maryanne.webp';
import aboutHeroImg from '../assets/gallery/hero.webp';
import foundingStoryImg1 from '../assets/gallery/gallery1.webp';
import foundingStoryImg2 from '../assets/gallery/gallery2.webp';
import trustImg from '../assets/gallery/gallery4.webp';

const partners = [
  {
    name: 'Gumersindo Camcam',
    company: 'Chairman',
    phone: '(+63) 918 940 3919',
    email: 'juncamcam@yahoo.com',
    image: gumersindoImg,
  },
  {
    name: 'Glennis DR Nitafan',
    company: 'President',
    phone: '(+63) 917 822 5798',
    email: 'gnitafan@gmail.com',
    image: glennisImg,
  },
  {
    name: 'Carlo Lopez',
    company: 'Partner',
    phone: '(+63) 917 891 0290',
    email: 'carlorlopez@gmail.com',
    image: carloImg,
  },
  {
    name: 'Mary Anne Meily',
    company: 'Associate',
    phone: '(+63) 939 997 8888',
    email: 'maryannemeily14@gmail.com',
    image: maryAnneImg,
  },
];

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
              src={aboutHeroImg}
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

          </div>
          <div className="founding-images">
            <div className="founding-image-wrapper">
              <img
                className="founding-image"
                src={foundingStoryImg1}
                alt="REMAX Premier founding members"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="founding-image-wrapper founding-image-offset">
              <img
                className="founding-image"
                src={foundingStoryImg2}
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
              "At RE/MAX Premier, your goals come first. We pair you with agents who act with integrity, communicate clearly, and stay with you until the deal is done, so you can buy, sell, or invest with confidence."
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
              src={trustImg}
              alt="REMAX Premier Awards 2025"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-vision-text">
            <h2 className="about-section-heading">
              Service you <em>can trust</em>
            </h2>
            <p className="about-body-text">
              "REMAX Premier invests in the tools, training, and systems that help our agents serve you better. Guided by professionalism, ethics, innovation, and collaboration, we're committed to exceptional service at every step of your property journey and to shaping the future of real estate in the Philippines."            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-inner">
          <h2 className="about-section-heading partners-heading">
            Our <em>Partners</em>
          </h2>
          <p className="about-body-text partners-subtitle">
            Meet the dedicated professionals behind REMAX Premier who bring expertise, integrity, and passion to every transaction.
          </p>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div className="partner-card" key={partner.name}>
                <div className="partner-image-wrapper">
                  <img
                    className="partner-image"
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                  <span className="partner-company">{partner.company}</span>
                  <div className="partner-contact">
                    <a href={`tel:${partner.phone.replace(/\s|\(|\)/g, '')}`} className="partner-contact-link">
                      <svg className="partner-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {partner.phone}
                    </a>
                    <a href={`mailto:${partner.email}`} className="partner-contact-link">
                      <svg className="partner-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      {partner.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

