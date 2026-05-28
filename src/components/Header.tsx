import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { BRAND_NAME, formatWhatsAppMessage } from '../utils/whatsapp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'SEO Services', path: '/services/seo' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-2xl flex gap-3 justify-center items-center font-bold tracking-tighter text-red-700 hover:text-red-500 transition-colors">
          <img src="https://images.unsplash.com/photo-1779761262878-64f89e97652e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='h-12 w-12 overflow-hidden border border-red-700 rounded-full'/>
            {BRAND_NAME.toUpperCase()}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 1).map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link to={link.path} className="text-sm font-medium text-red-700 hover:text-red-500 transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <div className="relative group">
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  to="/services"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className="flex items-center text-sm font-medium text-red-700 hover:text-red-500 transition-colors"
                >
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-black/5 py-2 mt-2"
                  >
                    {services.map((service) => (
                      <Link 
                        key={service.name} 
                        to={service.path} 
                        className="block px-4 py-3 text-sm hover:bg-red-50 hover:text-red-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link to={link.path} className="text-sm font-medium text-red-700 hover:text-red-500 transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={formatWhatsAppMessage("Hello, I would like to get a quote.")}
              target="_blank"
              rel="noreferrer"
              className="bg-red-700 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-red-500 transition-all flex items-center shadow-lg shadow-red-700/20"
            >
              Get a Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-red-700 hover:text-red-500">Home</Link>
              <div className="px-3 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Services</p>
                {services.map((service) => (
                  <Link 
                    key={service.name} 
                    to={service.path} 
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-medium text-red-700 hover:text-red-500"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-red-700 hover:text-red-500">Gallery</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-red-700 hover:text-red-500">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-red-700 hover:text-red-500">Contact</Link>
              <div className="pt-4">
                <a 
                  href={formatWhatsAppMessage("Hello, I would like to get a quote.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-red-700 hover:bg-red-500 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center shadow-lg shadow-red-700/20"
                >
                  <MessageSquare className="mr-2 w-5 h-5" /> Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
