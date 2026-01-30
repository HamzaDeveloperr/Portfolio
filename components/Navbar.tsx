import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'SMM Services', path: '/social-media-marketing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-indigo-100">
              H
            </div>
            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>{CONFIG.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 nav-link-hover py-1 ${location.pathname === link.path ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg shadow-indigo-100"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-indigo-600 focus:outline-none transition-transform hover:scale-110">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-8 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold w-full text-center py-3 rounded-2xl transition-all ${location.pathname === link.path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-center font-black shadow-lg"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;