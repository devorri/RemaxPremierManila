import React, { useState, useMemo, useEffect } from 'react';
import logoImage from '../assets/remax-premier-logo.webp';
import gumersindoImg from '../assets/partners/gumersindo.webp';
import glennisImg from '../assets/partners/glennis.webp';
import carloImg from '../assets/partners/carlo.webp';
import maryAnneImg from '../assets/partners/maryanne.webp';

interface Partner {
  name: string;
  role: string;
  locations: string;
  image: string;
  phone: string;
  email: string;
}

const allPartners: Partner[] = [
  { name: "Gumersindo Camcam", role: "Chairman", locations: "REMAX Premier", image: gumersindoImg, phone: "(+63) 918 940 3919", email: "juncamcam@yahoo.com" },
  { name: "Glennis DR Nitafan", role: "President", locations: "REMAX Premier", image: glennisImg, phone: "(+63) 917 822 5798", email: "gnitafan@gmail.com" },
  { name: "Carlo Lopez", role: "Partner", locations: "REMAX Premier", image: carloImg, phone: "(+63) 917 891 0290", email: "carlorlopez@gmail.com" },
  { name: "Mary Anne Meily", role: "Associate", locations: "REMAX Premier", image: maryAnneImg, phone: "(+63) 939 997 8888", email: "maryannemeily14@gmail.com" },
];

const PARTNERS_PER_PAGE = 15;

const PartnersPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    document.title = 'Partners | REMAX Premier';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchValue), 200);
    return () => clearTimeout(timer);
  }, [searchValue]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedPartner]);

  const roles = useMemo(() => {
    return [...new Set(allPartners.map(a => a.role))].sort();
  }, []);

  const locationOptions = useMemo(() => {
    const locs = new Set<string>();
    allPartners.forEach(a => {
      if (a.locations) {
        a.locations.split(',').forEach(l => locs.add(l.trim()));
      }
    });
    return [...locs].sort();
  }, []);

  const filteredPartners = useMemo(() => {
    const q = debouncedSearch.toLowerCase();
    return allPartners.filter(partner => {
      if (roleFilter && partner.role !== roleFilter) return false;
      if (locationFilter && !partner.locations.toUpperCase().includes(locationFilter.toUpperCase())) return false;
      if (q) {
        return (
          partner.name.toLowerCase().includes(q) ||
          partner.role.toLowerCase().includes(q) ||
          (partner.locations && partner.locations.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [debouncedSearch, roleFilter, locationFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredPartners.length / PARTNERS_PER_PAGE));
  const paginatedPartners = filteredPartners.slice(
    (currentPage - 1) * PARTNERS_PER_PAGE,
    currentPage * PARTNERS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, roleFilter, locationFilter]);

  const getFirstName = (fullName: string) => fullName.split(' ')[0];

  return (
    <main>
      {/* Hero */}
      <section className="agents-hero">
        <div className="agents-hero-inner">
          <h1 className="agents-hero-title">REMAX Premier Partners</h1>
          <div className="agents-search-bar">
            <svg viewBox="0 0 24 24" fill="none" className="agents-search-icon">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              className="agents-search-input"
              type="text"
              placeholder="Partner's Name or Focus Area"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search partners by name or focus area"
            />
            {searchValue && (
              <button
                type="button"
                className="agents-clear-btn"
                onClick={() => { setSearchValue(''); setDebouncedSearch(''); }}
                aria-label="Clear search"
              >
                <svg viewBox="0 0 24 24" fill="none" className="agents-clear-icon">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
            <button
              type="button"
              className="agents-search-submit"
              onClick={() => setDebouncedSearch(searchValue)}
              aria-label="Submit search"
            >
              <svg viewBox="0 0 24 24" fill="none" className="agents-search-submit-icon">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="agents-grid-section">
        <div className="agents-grid-inner">
          {/* Toolbar */}
          <div className="agents-toolbar">
            <span className="agents-result-count">
              {filteredPartners.length} partner{filteredPartners.length !== 1 ? 's' : ''}
            </span>
            <button
              type="button"
              className={`agents-filter-toggle ${showFilters ? 'agents-filter-toggle-active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg viewBox="0 0 24 24" fill="none" className="agents-filter-icon">
                <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="agents-filter-panel">
              <div className="agents-filter-group">
                <label className="agents-filter-label">Role</label>
                <select
                  className="agents-filter-select"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="">All Roles</option>
                  {roles.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="agents-filter-group">
                <label className="agents-filter-label">Location</label>
                <select
                  className="agents-filter-select"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locationOptions.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              {(roleFilter || locationFilter) && (
                <button
                  type="button"
                  className="agents-filter-clear"
                  onClick={() => { setRoleFilter(''); setLocationFilter(''); }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {/* Grid */}
          {paginatedPartners.length > 0 ? (
            <div className="agents-grid">
              {paginatedPartners.map((partner) => (
                <div
                  className="partner-card"
                  key={partner.name}
                  onClick={() => setSelectedPartner(partner)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPartner(partner); }}
                >
                  <div className="partner-card-photo-wrapper" onMouseMove={handleMouseMove}>
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="partner-card-photo"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Dynamic Mouse Tracking Pattern Overlay */}
                    <div className="mouse-track-pattern" />
                    {/* Hover pattern overlay */}
                    <div className="partner-card-overlay">
                      <div className="partner-card-overlay-pattern" />
                    </div>
                  </div>
                  <div className="partner-card-info">
                    <h3 className="partner-card-name">{partner.name}</h3>
                    <p className="partner-card-role">{partner.role}</p>
                    <p className="partner-card-locations">{partner.locations}</p>
                    <div className="partner-card-actions">
                      {partner.phone && (
                        <button
                          type="button"
                          className="partner-action-btn"
                          onClick={(e) => { e.stopPropagation(); window.open(`tel:${partner.phone}`); }}
                          aria-label={`Call ${partner.name}`}
                          title={partner.phone}
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="partner-action-icon">
                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </button>
                      )}
                      {partner.email && (
                        <button
                          type="button"
                          className="partner-action-btn"
                          onClick={(e) => { e.stopPropagation(); window.open(`mailto:${partner.email}`); }}
                          aria-label={`Email ${partner.name}`}
                          title={partner.email}
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="partner-action-icon">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="agents-empty">
              <p>No partners found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="agents-pagination">
              <button
                type="button"
                className="agents-page-arrow"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  type="button"
                  className={`agents-page-btn ${currentPage === page ? 'agents-page-active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="agents-page-arrow"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="partner-modal-overlay" onClick={() => setSelectedPartner(null)}>
          <div className="partner-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              type="button"
              className="partner-modal-close"
              onClick={() => setSelectedPartner(null)}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="partner-modal-content">
              {/* Logo at top */}
              <div className="partner-modal-logo">
                <img src={logoImage} alt="REMAX Premier Manila" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Photo Area with Mouse Tracking Overlay */}
              <div className="partner-modal-photo-area">
                <div className="partner-modal-photo-frame" onMouseMove={handleMouseMove}>
                  <img
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    className="partner-modal-photo"
                    decoding="async"
                  />
                  {/* Dynamic Mouse Tracking Pattern Overlay */}
                  <div className="mouse-track-pattern" />
                </div>
              </div>

              {/* Info Section */}
              <div className="partner-modal-info">
                <span className="partner-modal-role-label">{selectedPartner.role}</span>
                <h2 className="partner-modal-name">{selectedPartner.name}</h2>

                {/* Social Pill Buttons */}
                <div className="partner-modal-socials">
                  <a href="#" className="partner-modal-social-pill" onClick={(e) => e.preventDefault()}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    Facebook
                  </a>
                </div>

                {/* Divider Line */}
                <div className="partner-modal-divider" />

                {/* Contact Info Cards */}
                <div className="partner-modal-details">
                  <div className="partner-modal-detail-card">
                    <div className="partner-modal-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="partner-modal-detail-label">PHONE</span>
                      <span className="partner-modal-detail-value">{selectedPartner.phone}</span>
                    </div>
                    <a href={`tel:${selectedPartner.phone}`} className="partner-modal-detail-arrow" aria-label="Call">→</a>
                  </div>

                  <div className="partner-modal-detail-card">
                    <div className="partner-modal-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="partner-modal-detail-label">EMAIL</span>
                      <span className="partner-modal-detail-value">{selectedPartner.email}</span>
                    </div>
                    <a href={`mailto:${selectedPartner.email}`} className="partner-modal-detail-arrow" aria-label="Email">→</a>
                  </div>

                  <div className="partner-modal-detail-card">
                    <div className="partner-modal-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="partner-modal-detail-label">FOCUS AREAS</span>
                      <span className="partner-modal-detail-value">{selectedPartner.locations}</span>
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="partner-modal-about">
                  <h3 className="partner-modal-about-title">ABOUT {getFirstName(selectedPartner.name).toUpperCase()}</h3>
                  <p className="partner-modal-about-text">
                    {selectedPartner.name} is a {selectedPartner.role.toLowerCase()} at REMAX Premier, primarily focused on the {selectedPartner.locations} area/s. Can't wait to meet them to discuss your dream home? Contact them now!
                  </p>
                </div>

                {/* Bottom Social Icons */}
                <div className="partner-modal-bottom-socials">
                  <a href="#" className="partner-modal-bottom-social" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="partner-modal-bottom-social" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="partner-modal-bottom-social" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="#" className="partner-modal-bottom-social" aria-label="TikTok" onClick={(e) => e.preventDefault()}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                </div>

                {/* Footer */}
                <div className="partner-modal-footer">
                  <p>© REMAX Premier 2026</p>
                  <p>All rights reserved · Powered by <span style={{ color: '#37a47f', fontWeight: 600 }}>TomasDev</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PartnersPage;

