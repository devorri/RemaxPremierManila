import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { PartnersCarousel } from '../components/PartnersCarousel';
import { Confidence } from '../components/Confidence';
import { JoinTeam } from '../components/JoinTeam';
import { Locations } from '../components/Locations';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'REMAX Premier | Real Estate Brokerage';
    if (location.hash === '#locations') {
      setTimeout(() => {
        const locSection = document.getElementById('locations');
        if (locSection) {
          const top = locSection.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <PartnersCarousel />
      <Confidence />
      <JoinTeam />
      <Locations />
    </main>
  );
};

export default HomePage;
