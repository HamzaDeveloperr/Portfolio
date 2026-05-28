import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Globe, Share2, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('web');

  const categories = [
    {
      id: 'web',
      title: 'Web Development Services',
      icon: <Globe className="w-8 h-8 text-red-700" />,
      description: 'High-end websites, e-commerce, and performance optimization.',
      link: '/services/web-development',
      color: 'bg-red-50',
      borderColor: 'border-red-100'
    },
    {
      id: 'smm',
      title: 'Social Media Marketing Services',
      icon: <Share2 className="w-8 h-8 text-red-700" />,
      description: 'Strategic management and ads for Facebook, Instagram, and TikTok.',
      link: '/services/social-media',
      color: 'bg-red-50',
      borderColor: 'border-red-100'
    },
    {
      id: 'seo',
      title: 'SEO Services',
      icon: <Search className="w-8 h-8 text-red-700" />,
      description: 'Boost your online visibility and drive organic traffic with professional SEO.',
      link: '/services/seo',
      color: 'bg-red-50',
      borderColor: 'border-red-100'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400">
            Select a category to explore our specialized digital solutions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${cat.color} dark:bg-zinc-800 rounded-2xl flex items-center justify-center mr-6`}
                  >
                    {cat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white">{cat.title}</h3>
                    <p className="text-gray-500 dark:text-zinc-400 hidden sm:block">{cat.description}</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 dark:text-zinc-400 ${openCategory === cat.id ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openCategory === cat.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-gray-600 dark:text-zinc-400 mb-8 text-lg leading-relaxed">
                        {cat.description} We provide comprehensive solutions tailored to your business goals. Click below to see our full list of services and pricing.
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link 
                          to={cat.link}
                          className="inline-flex items-center px-8 py-4 bg-red-700 text-white rounded-full font-bold hover:bg-red-500 transition-all group shadow-lg shadow-red-700/10"
                        >
                          View Detailed Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
