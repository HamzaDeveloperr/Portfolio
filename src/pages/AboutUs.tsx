import React from 'react';
import { motion } from 'motion/react';
import { Globe, Share2, User } from 'lucide-react';

const AboutUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of dedicated digital experts committed to elevating brands through technology and strategic marketing.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Web Dev Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-bold mb-6">
                <Globe className="w-4 h-4 mr-2" /> Web Development Division
              </div>
              <h2 className="text-4xl font-bold mb-6">Expert Web Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our web development team focuses on creating high-performance, scalable, and visually stunning digital experiences. We believe a website is more than just code; it's the digital home of your brand.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <User className="w-8 h-8 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Managed By</p>
                  <h4 className="text-xl font-bold">Hamza</h4>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1779761547175-a34bf38a1b7c" 
                alt="Web Development"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* SMM Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1779761262859-8e7ffe413b9e" 
                alt="Social Media Marketing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-bold mb-6">
                <Share2 className="w-4 h-4 mr-2" /> SMM Division
              </div>
              <h2 className="text-4xl font-bold mb-6">Strategic Social Growth</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our social media marketing division is dedicated to building community and driving conversions on Facebook, Instagram, and TikTok. We combine creative content with data-driven ad strategies.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <User className="w-8 h-8 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Managed By</p>
                  <h4 className="text-xl font-bold">Hassan</h4>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
