import React, { useState, useMemo, useEffect } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  { question: "What service does REMAX Premier offer?", answer: "We specialize in real estate sales, leasing, and investment advisory for residential, commercial, and luxury properties in the Philippines." },
  { question: "Are your closing services available for clients who did not transact with your brokers?", answer: "Yes! We offer transfer works, due diligence, tax assistance, annotation processing, escrow assistance, loan applications, and more. Our team ensures a smooth and efficient closing process, regardless of whether the transaction was handled by our brokers." },
  { question: "How can I contact REMAX Premier or list my property?", answer: "You can reach us via direct message on our social media accounts (Facebook & Instagram), email us at info@remaxpremier.ph, or call us at 0917 898 4917. We're always ready to assist!" },
  { question: "Why choose REMAX Premier?", answer: "With a network of top-tier real estate agents, and market expertise, we provide seamless transactions and excellent service for buyers, sellers, and investors." },
  { question: "Do you assist first-time homebuyers?", answer: "Yes! We guide first-time buyers through every step, from property selection to financing and closing." },
  { question: "How can I schedule a property viewing?", answer: "Simply message us on Facebook or Instagram to inquire about a property, and we'll connect you with an agent to arrange a viewing at your convenience." },
  { question: "Does REMAX Premier offer career opportunities for realtors?", answer: "Yes! We provide training, mentorship, and a strong support system for aspiring and experienced real estate professionals." },
  { question: "How can I join REMAX Premier as a broker/real estate agent?", answer: "You may inquire by sending an email at info@remaxpremier.ph" },
  { question: "What are the requirements for leasing or buying a property?", answer: "Requirements vary, but typically include valid IDs, proof of income, and financial documents. Our agents will guide you through the process." },
  { question: "Do you assist with property financing?", answer: "While we don't offer direct financing, our real estate agents will help connect you with trusted banks and financial institutions to assist with home loans." },
  { question: "What can I expect from REMAX Premier agents when selling or leasing my property?", answer: "Our agents handle every step to maximize your property's exposure and secure the right buyer or tenant. This includes:\n• Uploading listings to top online portals like Lamudi, Carousell, and DotProperty, as well as broker groups on WhatsApp, Telegram, and Viber.\n• Matching property requirements with qualified buyers and tenants, and collaborating with other brokers for the best opportunities.\n• Providing timely updates on your listing's progress through consistent follow-ups with leads and agents." },
  { question: "How do I know if a property is a good investment?", answer: "You can count on our real estate agents for their expertise in market research and due diligence, ensuring you make informed decisions on potential returns and long-term value." },
  { question: "Can foreigners buy property in the Philippines?", answer: "Foreigners can own condominium units but are restricted from directly owning land. Our agents can help you explore investment opportunities that align with these regulations." },
  { question: "How long does it take to sell a property?", answer: "It depends on market conditions, property location, and pricing. Our agents use strategic marketing to ensure a fast and efficient sale." },
  { question: "Do you help in managing rental properties?", answer: "Our real estate agents will do their utmost best to find the right lessees for property owners. They can assist with tenant screening and other essential aspects of the leasing process, ensuring a smooth and professional transaction while staying within their scope of work." },
];

const FaqsPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'FAQs | REMAX Premier';
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = useMemo(() => {
    const q = searchValue.toLowerCase().trim();
    if (!q) return faqData;
    return faqData.filter(
      f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [searchValue]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <main>
      {/* Hero */}
      <section className="faqs-hero">
        <div className="faqs-hero-inner">
          <h1 className="faqs-hero-title">FAQs</h1>
          <div className="faqs-search-bar">
            <svg viewBox="0 0 24 24" fill="none" className="faqs-search-icon">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              className="faqs-search-input"
              type="text"
              placeholder="Search here.."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search frequently asked questions"
            />
            {searchValue && (
              <button
                type="button"
                className="faqs-clear-btn"
                onClick={() => setSearchValue('')}
                aria-label="Clear search"
              >
                <svg viewBox="0 0 24 24" fill="none" className="faqs-clear-icon">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
            <button type="button" className="faqs-search-submit" aria-label="Submit search">
              <svg viewBox="0 0 24 24" fill="none" className="faqs-search-submit-icon">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="faqs-accordion-section">
        <div className="faqs-accordion-inner">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div className="faqs-accordion-item" key={index}>
                  <button
                    type="button"
                    className="faqs-accordion-trigger"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faqs-accordion-question">{faq.question}</span>
                    <span className={`faqs-accordion-chevron ${isOpen ? 'faqs-chevron-open' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`faqs-accordion-panel ${isOpen ? 'faqs-panel-open' : ''}`}
                    role="region"
                  >
                    <p className="faqs-accordion-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faqs-empty">
              <p>No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default FaqsPage;
