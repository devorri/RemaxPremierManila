import React from 'react';
import logoImage from '../assets/remax-premier-logo.webp';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'colored';
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`remax-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>
      <img
        src={logoImage}
        alt="REMAX Premier Manila"
        loading="eager"
        decoding="async"
        style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};
