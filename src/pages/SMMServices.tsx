import React from 'react';
import { motion } from 'motion/react';
import { SMM_SERVICES } from '../constants/data';
import { formatWhatsAppMessage, BRAND_NAME } from '../utils/whatsapp';
import { CheckCircle2, Facebook, Instagram, Video, Target, TrendingUp, Users, MessageSquare } from 'lucide-react';

const SMMServices = () => {
  const handlePlanOrder = (planTitle: string) => {
    const message = `Hello ${BRAND_NAME},\n\nI am interested in the Social Media Marketing plan: "${planTitle}"\n\nPlease provide more details.`;
    window.open(formatWhatsAppMessage(message), '_blank');
  };

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
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Social Media Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We specialize in growing brands on the most impactful platforms. Our focus is exclusively on 
            <span className="font-bold text-black"> Facebook, Instagram, and TikTok</span> to ensure maximum results.
          </p>
        </motion.div>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: <Facebook className="w-10 h-10 text-blue-600 mr-4" />, title: 'Facebook', sub: 'Community & Ads', color: 'bg-blue-50', border: 'border-blue-100' },
            { icon: <Instagram className="w-10 h-10 text-pink-600 mr-4" />, title: 'Instagram', sub: 'Visual Branding', color: 'bg-pink-50', border: 'border-pink-100' },
            { icon: <Video className="w-10 h-10 text-black mr-4" />, title: 'TikTok', sub: 'Viral Growth', color: 'bg-zinc-100', border: 'border-zinc-200' }
          ].map((platform, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${platform.color} p-8 rounded-3xl border ${platform.border} flex items-center shadow-sm hover:shadow-md transition-all`}
            >
              {platform.icon}
              <div>
                <h3 className="font-bold text-xl">{platform.title}</h3>
                <p className="text-sm opacity-70">{platform.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Management Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <TrendingUp className="mr-3 text-red-700" /> Complete Management
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SMM_SERVICES.management.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start p-4 bg-zinc-50 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Users className="mr-3 text-red-700" /> Audience Engagement
            </h2>
            <div className="space-y-4">
              {SMM_SERVICES.engagement.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-5 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all cursor-default"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-zinc-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ads Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-[3rem] p-10 lg:p-20 mb-24 relative overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center">
              <Target className="mr-4 text-red-500" /> Sponsored Ads & Paid Promotions
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              We run highly targeted campaigns across Facebook, Instagram, and TikTok to generate leads, awareness, and sales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SMM_SERVICES.ads.map((ad, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center text-zinc-200"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  {ad}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full" />
        </motion.div>

        {/* Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Management Plans</h2>
          <p className="text-gray-600">Choose a plan that fits your business scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SMM_SERVICES.plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border-2 border-zinc-100 hover:border-red-500 transition-all flex flex-col shadow-sm hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-10 flex-grow">{plan.description}</p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlanOrder(plan.title)}
                className="w-full py-4.5 bg-red-700 text-white rounded-full font-bold text-lg hover:bg-red-500 transition-all shadow-xl shadow-red-700/20"
              >
                Inquire Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SMMServices;
