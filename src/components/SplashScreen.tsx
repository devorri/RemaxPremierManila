import React, { useState, useEffect } from 'react';
import logoImage from '../assets/remax-premier-logo.png';

export const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const [fadeContainer, setFadeContainer] = useState(false);

  useEffect(() => {
    // Start background container fade-out right when zoom-blur hits peak
    const fadeTimer = setTimeout(() => {
      setFadeContainer(true);
    }, 1900);

    // Completely remove splash screen component from DOM
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`splash-screen ${fadeContainer ? 'splash-fade-out' : ''}`}>
      <div className="splash-logo-wrapper">
        <img
          src={logoImage}
          alt="REMAX Premier Manila"
          className="splash-logo"
        />
      </div>
    </div>
  );
};
