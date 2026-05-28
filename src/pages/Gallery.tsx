import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../constants/data';

const Gallery = () => {
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Our Work
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our premium web development and social media marketing projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {GALLERY_ITEMS.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 transition-shadow hover:shadow-2xl cursor-pointer"
              >
                
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2"
                  >
                    {item.description}
                  </motion.span>

                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-2xl font-bold"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                <div className="p-6 md:hidden">
                  <span className="text-red-700 text-xs font-bold uppercase tracking-widest mb-1 block">
                    {item.description}
                  </span>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            </a>
          ))}

        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;