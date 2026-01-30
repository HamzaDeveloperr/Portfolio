import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WebDev from './pages/WebDev';
import SMM from './pages/SMM';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const triggerObservations = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach(el => {
        observer.observe(el);
      });
    };

    const timer = setTimeout(triggerObservations, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-600">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/social-media-marketing" element={<SMM />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;