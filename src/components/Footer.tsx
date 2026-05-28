import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_NAME, formatWhatsAppMessage } from '../utils/whatsapp';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20  pb-10  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <Link to="/" className="text-3xl flex font-bold tracking-tighter mb-6 items-center gap-3 text-white hover:text-red-500 transition-colors">
            <img src="https://images.unsplash.com/photo-1779761262878-64f89e97652e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='h-12 w-12 overflow-hidden border border-red-700 rounded-full'/>
              {BRAND_NAME.toUpperCase()}
            </Link>
            <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
              Premium digital solutions for modern brands. We specialize in high-end web development and strategic social media marketing.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-500">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', path: '/services/web-development' },
                { name: 'Social Media Marketing', path: '/services/social-media' },
                { name: 'Project Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="text-zinc-300 hover:text-red-500 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-500">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Mail, href: "mailto:mostbet4242@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: '#ef4444' }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href} 
                  className="p-3 bg-zinc-900 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <motion.a 
              whileHover={{ x: 5 }}
              href={formatWhatsAppMessage("Hello, I have an inquiry.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-red-500 font-semibold hover:text-red-400 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm"
        >
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
