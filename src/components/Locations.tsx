import React from 'react';
import bgcImg from '../assets/office_bgc.jpg';
import rockwellImg from '../assets/office_rockwell.jpg';
import sanJuanImg from '../assets/office_sanjuan.jpg';
import alabangImg from '../assets/office_alabang.jpg';

interface OfficeLocation {
  name: string;
  address: string;
  image: string;
}

const offices: OfficeLocation[] = [
  {
    name: 'BGC',
    address: '24th Floor, Philippine Stock Exchange Tower, 26th corner 5th Avenue, Bonifacio Global City, Taguig',
    image: bgcImg,
  },
  {
    name: 'Rockwell',
    address: '5th Floor, Phinma Plaza, Rockwell Center, Makati City',
    image: rockwellImg,
  },
  {
    name: 'San Juan',
    address: '135 Hoover Street, Addition Hills, San Juan City',
    image: sanJuanImg,
  },
  {
    name: 'Alabang',
    address: 'Unit 1105 Page 1 Building, Acacia Ave, Ayala Alabang, Muntinlupa City',
    image: alabangImg,
  },
];

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="locations-section">
      <div className="locations-container">
        {/* Left Column: Heading + Map */}
        <div className="locations-left">
          <h2 className="locations-heading">
            Strategic Presence.<br />
            Nationwide Reach.
          </h2>
          <p className="locations-description">
            REMAX Premier and its Broker Network are positioned at the heart of key business districts allowing us to serve clients efficiently across Metro Manila and beyond.
          </p>

          <div className="locations-map-wrapper">
            <iframe
              title="REMAX Capital Offices Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123548.86813401138!2d120.98595511874221!3d14.54763327660232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8d9d59247eb%3A0xb36f236ff4b8adfa!2sBonifacio%20Global%20City%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Office Cards Grid */}
        <div className="locations-grid">
          {offices.map((office) => (
            <div key={office.name} className="office-card">
              <div className="office-image-wrapper">
                <img
                  src={office.image}
                  alt={office.name}
                  className="office-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="office-info">
                <h3 className="office-name">{office.name}</h3>
                <p className="office-address">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
