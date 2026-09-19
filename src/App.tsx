import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PartnersCarousel } from './components/PartnersCarousel';
import { Confidence } from './components/Confidence';
import { JoinTeam } from './components/JoinTeam';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="remax-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PartnersCarousel />
        <Confidence />
        <JoinTeam />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
