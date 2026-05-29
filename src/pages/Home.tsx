import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Globe, Share2, CheckCircle2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../utils/whatsapp';
import LiveOrdersSection from '../components/LiveOrdersSection';


const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

  {/* Animated Background Images */}
  <div className="absolute inset-0 z-0 overflow-hidden">

  <motion.div
    initial={{ scale: 1.08 }}
    animate={{
      x: ["0%", "-25%"],
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",

        // Mobile faster / Desktop normal fast
        duration: typeof window !== "undefined" && window.innerWidth < 768 ? 14 : 22,

        ease: "linear",
      },
    }}
    className="flex w-max h-full"
  >
    {[
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",

      // Duplicate images for smooth infinite loop
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",
      // Duplicate images for smooth infinite loop
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",
      // Duplicate images for smooth infinite loop
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",
    ].map((src, idx) => (
      <div
        key={idx}
        className="w-screen h-full shrink-0 relative"
      >
        <img
          src={src}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
          draggable={false}
        />
      </div>
    ))}
  </motion.div>

  {/* Softer Overlay */}
  <div className="absolute inset-0 bg-white/30 z-10" />

  {/* Premium Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 z-10" />

</div>

  {/* Hero Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
    <div className="max-w-3xl">

      <motion.span
        variants={itemVariants}
        className="inline-block px-5 py-2 bg-white/40 backdrop-blur-md text-red-600 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-white/30 shadow-sm"
      >
        Digital Excellence
      </motion.span>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[0.95]"
      >
        Crafting Digital{" "}
        <span className="text-red-600">Masterpieces.</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl"
      >
        We build high-end websites and drive massive growth
        through strategic social media marketing.
        Elevate your brand with {BRAND_NAME}.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-5"
      >

        {/* Primary Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/services/web-development"
            className="px-9 py-4 bg-red-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-700 shadow-xl shadow-red-500/20 flex items-center justify-center group"
          >
            Explore Services

            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Secondary Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/contact"
            className="px-9 py-4 bg-white/30 backdrop-blur-md hover:text-white border hover:border-red-700/40 rounded-full font-semibold text-lg transition-all duration-300 border-red-500/40 text-red-600 hover:bg-red-700 shadow-lg flex items-center justify-center"
          >
            Contact Us
          </Link>
        </motion.div>

      </motion.div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide specialized services designed to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Web Dev */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-red-700" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Web Development</h3>

              <p className="text-gray-600 mb-8 grow text-lg leading-relaxed">
                From high-performance business websites to complex e-commerce solutions.
              </p>

              <Link to="/services/web-development" className="text-red-700 font-bold flex items-center">
                View Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* SMM */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
                <Share2 className="w-8 h-8 text-red-700" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Social Media Marketing</h3>

              <p className="text-gray-600 mb-8 grow text-lg leading-relaxed">
                Strategic management and paid advertising for growth.
              </p>

              <Link to="/services/social-media" className="text-red-700 font-bold flex items-center">
                View Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* SEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
                <Search className="w-8 h-8 text-red-700" />
              </div>

              <h3 className="text-3xl font-bold mb-4">SEO Services</h3>

              <p className="text-gray-600 mb-8 grow text-lg leading-relaxed">
                Boost your visibility and organic traffic.
              </p>

              <Link to="/services/seo" className="text-red-700 font-bold flex items-center">
                View Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <LiveOrdersSection />
    </motion.div>
  );
};

export default Home;