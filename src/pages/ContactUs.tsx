import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';
import { generateContactMessage, formatWhatsAppMessage } from '../utils/whatsapp';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = generateContactMessage(
      formData.name,
      formData.phone,
      formData.email,
      formData.message
    );
    window.open(formatWhatsAppMessage(whatsappMsg), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6 text-red-700" />, title: 'Phone', val: '03422072225' },
                { icon: <Mail className="w-6 h-6 text-red-700" />, title: 'Email', val: 'mostbet4242@gmail.com' },
                { icon: <MapPin className="w-6 h-6 text-red-700" />, title: 'Location', val: 'Chungi Amber Siduh, Lahore' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-12 border-t border-zinc-200"
            >
              <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-400 mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="#" 
                    className="p-4 bg-white rounded-2xl shadow-sm border border-black/5 hover:bg-red-50 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="Hamza"
                />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    placeholder="+1 234 567 890"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    placeholder="hamza@example.com"
                  />
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-red-700 text-white rounded-full font-bold text-xl hover:bg-red-500 transition-all flex items-center justify-center shadow-xl shadow-red-700/20"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
