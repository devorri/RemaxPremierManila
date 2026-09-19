import React from 'react';

interface Partner {
  name: string;
  category?: string;
  logo: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: 'Ortigas Land',
    logo: (
      <div className="partner-logo-item">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#16733D" strokeWidth="2.5" strokeDasharray="14 10" />
          <circle cx="12" cy="12" r="4.5" fill="#16733D" />
        </svg>
        <span style={{ fontWeight: 600, color: '#16733D', fontSize: '18px', letterSpacing: '-0.2px' }}>
          Ortigas Land
        </span>
      </div>
    ),
  },
  {
    name: 'PHINMA Properties',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
          <path d="M0 14L12 0L24 14L12 28L0 14Z" fill="#187a44" />
          <path d="M14 14L22 4L30 14L22 24L14 14Z" fill="#2eb062" />
        </svg>
        <span style={{ fontWeight: 800, color: '#111', fontSize: '12px', letterSpacing: '1px', marginTop: '2px' }}>
          PHINMA
        </span>
        <span style={{ fontSize: '8px', color: '#666', letterSpacing: '1px', textTransform: 'uppercase' }}>
          PROPERTIES
        </span>
      </div>
    ),
  },
  {
    name: 'RHK Land Corporation',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 600, color: '#6b583e', lineHeight: 1 }}>
          ЯHK
        </span>
        <span style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#6b583e', textTransform: 'uppercase' }}>
          RHK LAND CORPORATION
        </span>
      </div>
    ),
  },
  {
    name: 'RLC Residences',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
          <span style={{ fontWeight: 900, color: '#003da5', fontSize: '24px', letterSpacing: '1px' }}>RL</span>
          <span style={{ fontWeight: 900, color: '#d99b26', fontSize: '24px' }}>C</span>
        </div>
        <span style={{ fontSize: '9px', fontWeight: 600, color: '#003da5', letterSpacing: '2px', textTransform: 'uppercase' }}>
          RESIDENCES
        </span>
      </div>
    ),
  },
  {
    name: 'Rockwell Land',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="3" height="16" rx="1" fill="#a6292b" />
          <rect x="8" y="2" width="3" height="20" rx="1" fill="#a6292b" />
          <rect x="13" y="5" width="3" height="14" rx="1" fill="#a6292b" />
          <rect x="18" y="7" width="3" height="10" rx="1" fill="#a6292b" />
        </svg>
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#555', letterSpacing: '1.2px', textTransform: 'uppercase', marginTop: '3px' }}>
          ROCKWELL LAND
        </span>
      </div>
    ),
  },
  {
    name: 'SM Prime',
    logo: (
      <div className="partner-logo-item">
        <span style={{ fontWeight: 900, color: '#003da5', fontSize: '20px', letterSpacing: '0.5px' }}>
          SM <span style={{ fontWeight: 400, color: '#003da5' }}>PRIME</span>
        </span>
      </div>
    ),
  },
  {
    name: 'SMDC',
    logo: (
      <div className="partner-logo-item">
        <span style={{ 
          background: '#FFF000', 
          color: '#DC1C2E', 
          fontWeight: 900, 
          fontSize: '18px', 
          padding: '4px 10px', 
          borderRadius: '4px',
          letterSpacing: '1px' 
        }}>
          SMDC
        </span>
      </div>
    ),
  },
  {
    name: 'Mosaic',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 20V8L9 4V20H4Z" fill="#1c2d5a" />
          <path d="M11 20V2L16 6V20H11Z" fill="#e57e25" />
          <path d="M18 20V10L21 12V20H18Z" fill="#718290" />
        </svg>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#111', letterSpacing: '1px', textTransform: 'lowercase', marginTop: '2px' }}>
          mosaic
        </span>
      </div>
    ),
  },
  {
    name: 'Ongpin Tower',
    logo: (
      <div className="partner-logo-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#b28e5d', letterSpacing: '1px', textTransform: 'uppercase' }}>
          ONGPIN TOWER
        </span>
        <span style={{ fontSize: '9px', color: '#b28e5d' }}>王彬·金璟閣</span>
      </div>
    ),
  },
];

export const PartnersCarousel: React.FC = () => {
  return (
    <div className="partners-section">
      <div className="partners-track-wrapper">
        <div className="partners-track">
          {/* First sequence */}
          {partners.map((p, idx) => (
            <div key={`p1-${idx}`} className="partner-slide">
              {p.logo}
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {partners.map((p, idx) => (
            <div key={`p2-${idx}`} className="partner-slide">
              {p.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
