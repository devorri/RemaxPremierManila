import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'colored';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'white' }) => {
  const textColor = variant === 'colored' ? '#003da5' : '#ffffff';

  return (
    <div className={`remax-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none' }}>
      {/* Iconic RE/MAX Balloon Icon */}
      <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C6.268 0 0 6.268 0 14C0 19.345 3.013 23.978 7.42 26.31L14 34L20.58 26.31C24.987 23.978 28 19.345 28 14C28 6.268 21.732 0 14 0Z" fill="#DC1C2E"/>
        {/* Left white stripe */}
        <path d="M4 14C4 8.477 8.477 4 14 4V24C8.477 24 4 19.523 4 14Z" fill="#FFFFFF"/>
        {/* Blue right stripe */}
        <path d="M14 4C19.523 4 24 8.477 24 14C24 19.523 19.523 24 14 24V4Z" fill="#003DA5"/>
        {/* Middle red slice */}
        <path d="M11 2C11 2 14 1 17 2V26C14 27 11 26 11 26V2Z" fill="#DC1C2E"/>
        {/* Basket */}
        <rect x="11.5" y="30" width="5" height="3.5" rx="0.5" fill="#C59B27"/>
      </svg>
      
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 900, fontSize: '24px', letterSpacing: '-0.5px', fontFamily: 'Poppins, sans-serif' }}>
          <span style={{ color: textColor }}>RE</span>
          <span style={{ color: '#DC1C2E', margin: '0 1px' }}>/</span>
          <span style={{ color: textColor }}>MAX</span>
        </div>
        <div style={{ 
          fontSize: '11px', 
          fontWeight: 600, 
          letterSpacing: '5px', 
          color: textColor, 
          fontFamily: 'Poppins, sans-serif',
          marginTop: '2px',
          textTransform: 'uppercase'
        }}>
          CAPITAL
        </div>
      </div>
    </div>
  );
};
