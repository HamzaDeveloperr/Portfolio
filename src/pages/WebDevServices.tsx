import React from 'react';
import { motion } from 'motion/react';
import { WEB_SERVICES } from '../constants/data';
import { generateOrderMessage, formatWhatsAppMessage } from '../utils/whatsapp';
import { ShoppingCart, CheckCircle } from 'lucide-react';

const WebDevServices = () => {
  const handleOrder = (service: typeof WEB_SERVICES[0]) => {
    const message = generateOrderMessage(service.title, service.description);
    window.open(formatWhatsAppMessage(message), '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Web Development</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            We build premium, high-performance websites that serve as the digital foundation for your business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {WEB_SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-black/5 flex flex-col lg:flex-row group relative"
            >
              {/* DISCOUNT_OFFER_START: Change the text below to update the discount for all web services */}
              <div className="absolute top-6 right-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl z-20 animate-pulse">
                Special Offer: 20% OFF
              </div>
              {/* DISCOUNT_OFFER_END */}

              <div className="lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4 mb-10">
                  {['Fully Responsive Design', 'SEO Optimized Structure', 'Fast Loading Performance'].map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center text-gray-700 font-medium"
                    >
                      <CheckCircle className="w-5 h-5 text-red-700 mr-3" /> {feature}
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOrder(service)}
                  className="inline-flex items-center justify-center px-10 py-4.5 bg-red-700 text-white rounded-full font-bold text-lg hover:bg-red-500 transition-all group shadow-xl shadow-red-700/20"
                >
                  <ShoppingCart className="mr-2 w-5 h-5" /> Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WebDevServices;
