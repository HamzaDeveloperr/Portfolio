import React from 'react';
import InquiryForm from '../components/InquiryForm';
import { CONFIG } from '../constants';
import { Mail, Phone, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen overflow-hidden">
      <SEO 
        title="Get in Touch | Project Inquiry" 
        description="Have a project idea? Reach out to Hamza for expert web development and social media marketing consultations. We respond within 24 hours."
        keywords="Contact Hamza, Hire Web Developer, Marketing Inquiry, Project Consultation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">Let's Build Something <span className="text-indigo-600">Great Together</span></h1>
          <p className="text-lg text-gray-500">
            Have a question or a project idea? I'm always ready to help. Reach out via the form or through our direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8 reveal-left">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-10">
              <div className="reveal delay-100">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Direct Channels</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4 hover-lift">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0"><Mail size={24} /></div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 mb-1">Email Us</span>
                      <a href={`mailto:${CONFIG.email}`} className="text-gray-500 hover:text-indigo-600 transition-colors break-all">{CONFIG.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover-lift">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 mb-1">WhatsApp</span>
                      <a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-gray-500 hover:text-green-600 transition-colors">{CONFIG.whatsapp}</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="pt-8 border-t border-gray-100 reveal delay-300">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Follow Us</h3>
                <div className="flex gap-4">
                   {[
                     { icon: <Instagram />, url: CONFIG.socials.instagram },
                     { icon: <Linkedin />, url: CONFIG.socials.linkedin },
                   ].map((social, i) => (
                     <a key={i} href={social.url} className="w-12 h-12 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110">
                       {social.icon}
                     </a>
                   ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 reveal delay-500">
                <a 
                    href={CONFIG.fiverrUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block"
                >
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 group-hover:border-green-400 transition-all flex items-center justify-between hover:bg-white">
                        <div>
                            <span className="block text-[10px] text-gray-500 mb-1 font-bold uppercase tracking-widest">Hire on Fiverr</span>
                            <span className="text-2xl font-black text-[#1dbf73]">fiverr<span className="text-green-500">.</span></span>
                        </div>
                        <ExternalLink size={20} className="text-gray-400 group-hover:text-green-500" />
                    </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 reveal-right">
            <InquiryForm showTitle={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;