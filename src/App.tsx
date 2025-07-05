import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <CaseStudies />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-500">
        <BackgroundEffects />
        <div className="relative z-20">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/conditions-utilisation" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;