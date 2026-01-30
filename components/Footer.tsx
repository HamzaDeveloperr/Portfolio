
import React from 'react';
import { Mail, Phone, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { CONFIG } from '../constants';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <Instagram size={20} />, url: CONFIG.socials.instagram, label: 'Instagram' },
    { icon: <Linkedin size={20} />, url: CONFIG.socials.linkedin, label: 'LinkedIn' },
    { 
      icon: (
        <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72a162.55 162.55 0 1 1-162.55-162.55 161.42 161.42 0 0 1 31.81 3.14v82.35a79.82 79.82 0 1 0-31.81 154.17 80.25 80.25 0 0 0 80.25-80.25V0h84.69a109.12 109.12 0 0 0 109.12 109.12v100.79z"/>
        </svg>
      ), 
      url: CONFIG.socials.tiktok, 
      label: 'TikTok' 
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand and Bio */}
          <div className="md:col-span-1 reveal">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-[360deg] transition-transform duration-700">H</div>
              <span className="text-2xl font-black tracking-tighter">{CONFIG.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Expert Web Development and Social Media Marketing services tailored to help your brand shine in the digital landscape.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal delay-200">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Explore</h3>
            <ul className="space-y-4">
              <li><a href="/#/web-development" className="text-gray-400 footer-link-hover text-sm block">Web Development</a></li>
              <li><a href="/#/social-media-marketing" className="text-gray-400 footer-link-hover text-sm block">Social Marketing</a></li>
              <li><a href="/#/about" className="text-gray-400 footer-link-hover text-sm block">My Story</a></li>
              <li><a href="/#/contact" className="text-gray-400 footer-link-hover text-sm block">Hire Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="reveal delay-400">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Reach Out</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${CONFIG.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">{CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                {/* Standardized WhatsApp link for broad app compatibility */}
                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-sm text-gray-400 hover:text-white transition-colors">{CONFIG.whatsapp}</a>
              </li>
              <li className="pt-2">
                <a 
                  href={`https://wa.me/${CONFIG.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl text-xs font-black uppercase hover:bg-green-700 transition-all shadow-xl hover:shadow-green-500/20 active:scale-95"
                >
                  Direct WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Fiverr */}
          <div className="reveal delay-600">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Marketplace</h3>
            <a 
              href={CONFIG.fiverrUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10 group-hover:border-green-500/50 group-hover:bg-white/10 transition-all flex items-center justify-between hover:scale-[1.02] active:scale-95">
                <div>
                  <span className="block text-[10px] text-gray-500 mb-1 font-bold tracking-widest uppercase">Hire me on</span>
                  <span className="text-3xl font-black text-[#1dbf73]">fiverr<span className="text-green-500">.</span></span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <ExternalLink size={20} />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 reveal">
          <p className="text-sm text-gray-500 font-medium">© {new Date().getFullYear()} {CONFIG.name}. Crafting excellence daily.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
