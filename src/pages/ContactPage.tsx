import React, { useState, useEffect } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | REMAX Premier';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="contact-page-wrapper">
      {/* Contact Main Section */}
      <section className="contact-main-section">
        <div className="contact-main-inner">
          {/* Left Column: Info */}
          <div className="contact-info-col">
            <h1 className="contact-info-heading">Contact Us</h1>
            <p className="contact-info-text">
              Have an inquiry about properties or joining our team? Send a message and let's start the conversation.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" className="contact-info-icon">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href="tel:09178225798" className="contact-info-value">+63 917 822 5798</a>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" className="contact-info-icon">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href="mailto:gnitafan@remax.net" className="contact-info-value">gnitafan@remax.net</a>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" className="contact-info-icon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="contact-info-value">24th Floor, Philippine Stock Exchange Tower, 26th corner 5th Avenue, Bonifacio Global City Taguig, Metro Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <input
                  className="contact-form-input"
                  name="name"
                  type="text"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contact-form-input"
                  name="phone"
                  type="tel"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-field">
                <input
                  className="contact-form-input"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-field">
                <select
                  className="contact-form-input contact-form-select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>Select Subject</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="leasing">Leasing a Property</option>
                  <option value="career">Career Opportunities</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact-form-field">
                <textarea
                  className="contact-form-input contact-form-textarea"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-submit-row">
                <button type="submit" className="contact-form-submit">
                  {submitted ? 'Submitted ✓' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
