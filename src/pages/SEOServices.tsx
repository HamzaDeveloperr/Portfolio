import React from 'react';
import { motion } from 'motion/react';
import { SEO_SERVICES } from '../constants/data';
import { generateOrderMessage, formatWhatsAppMessage } from '../utils/whatsapp';
import { ShoppingCart, CheckCircle, Search } from 'lucide-react';

const SEOServices = () => {
  const handleOrder = (service: typeof SEO_SERVICES[0]) => {
    const message = generateOrderMessage(service.title, service.description);
    window.open(formatWhatsAppMessage(message), '_blank');
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.610, 0.355, 1.000], // custom cubic-bezier easeOut
        staggerChildren: 0.12,
        delayChildren: 0.1,
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, x: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const imageVariantsAlt = {
    hidden: { opacity: 0, scale: 0.96, x: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
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
          <div className="flex items-center mb-6">
            <Search className="w-10 h-10 text-red-700 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">SEO Services</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Boost your online visibility and drive organic traffic with our professional Search Engine Optimization strategies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12"
        >
          {SEO_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className={`bg-white rounded-[2rem] overflow-hidden shadow-sm border border-black/5 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} group relative`}
              >
                {/* DISCOUNT_OFFER_START: Change the text below to update the discount for all SEO services */}
                <motion.div 
                  variants={elementVariants}
                  className="absolute top-6 right-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl z-20 animate-pulse"
                >
                  Special Offer: 15% OFF
                </motion.div>
                {/* DISCOUNT_OFFER_END */}

                <div className="lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
                  <motion.img 
                    variants={isEven ? imageVariants : imageVariantsAlt}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white">
                  <motion.h2 
                    variants={elementVariants}
                    className="text-3xl md:text-4xl font-bold mb-6"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p 
                    variants={elementVariants}
                    className="text-lg text-gray-600 mb-10 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  <div className="space-y-4 mb-10">
                    {['Keyword Research & Analysis', 'Content Strategy', 'Performance Tracking'].map((feature, i) => (
                      <motion.div 
                        key={i}
                        variants={featureVariants}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <CheckCircle className="w-5 h-5 text-red-700 mr-3" /> {feature}
                      </motion.div>
                    ))}
                  </div>
                  <motion.button 
                    variants={elementVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOrder(service)}
                    className="inline-flex items-center justify-center px-10 py-4.5 bg-red-700 text-white rounded-full font-bold text-lg hover:bg-red-500 transition-all group shadow-xl shadow-red-700/20"
                  >
                    <ShoppingCart className="mr-2 w-5 h-5" /> Order Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SEOServices;
