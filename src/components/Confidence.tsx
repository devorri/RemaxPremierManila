import React, { useEffect, useState } from 'react';
import galleryImage1 from '../assets/gallery/optimized/newgallery3.webp';
import galleryImage2 from '../assets/gallery/optimized/newgallery1.webp';
import galleryImage3 from '../assets/gallery/optimized/newgallery2.webp';
import galleryImage4 from '../assets/gallery/optimized/gallery4new.webp';

const galleryImages = [
  { src: galleryImage1, alt: 'Luxury property interior' },
  { src: galleryImage2, alt: 'Elegant property interior' },
  { src: galleryImage3, alt: 'RE/MAX Premier team at an event' },
  { src: galleryImage4, alt: 'Premium property interior' },
];

export const Confidence: React.FC = () => {
  const [{ activeSlide, previousSlide }, setSlideState] = useState({
    activeSlide: 0,
    previousSlide: 0,
  });

  useEffect(() => {
    galleryImages.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });

    const slideshow = window.setInterval(() => {
      setSlideState(({ activeSlide: currentSlide }) => ({
        previousSlide: currentSlide,
        activeSlide: (currentSlide + 1) % galleryImages.length,
      }));
    }, 4000);

    return () => window.clearInterval(slideshow);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setSlideState(({ activeSlide: currentSlide }) => ({
      previousSlide: currentSlide,
      activeSlide: slideIndex,
    }));
  };

  return (
    <section className="confidence-section">
      <div className="confidence-container">
        <div className="confidence-image-col">
          <img
            src={galleryImages[previousSlide].src}
            alt=""
            className="confidence-image confidence-image-previous"
            aria-hidden="true"
          />
          <img
            key={activeSlide}
            src={galleryImages[activeSlide].src}
            alt={galleryImages[activeSlide].alt}
            className={`confidence-image confidence-image-current${activeSlide !== previousSlide ? ' slide-in' : ''}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="confidence-dots" aria-label="Property gallery navigation">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`dot${index === activeSlide ? ' active' : ''}`}
                aria-label={`Show gallery image ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Right: Red Editorial Card */}
        <div className="confidence-text-col">
          <div className="confidence-content">
            <h2 className="confidence-heading">
              For Clients Who<br />Value Confidence
            </h2>
            <p className="confidence-description">
              Buying, selling, leasing, or investing in property is a major decision and confidence matters. With REMAX Premier's expertise, network, and commitment to service excellence, clients gain more than transactions; they gain trusted advisors.
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
