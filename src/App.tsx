import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { SplashScreen } from './components/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AgentsPage from './pages/AgentsPage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="remax-app">
        <SplashScreen />
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/partners" element={<AgentsPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
