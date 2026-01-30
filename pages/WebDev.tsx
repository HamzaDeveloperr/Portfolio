
import React from 'react';
// Changed ALL_REVIEWS to INITIAL_REVIEWS
import { SERVICES_DATA, INITIAL_REVIEWS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ReviewSection from '../components/ReviewSection';
import SEO from '../components/SEO';
import { Code, Layout, Smartphone, Search } from 'lucide-react';

const WebDev: React.FC = () => {
  const webServices = SERVICES_DATA.filter(s => s.category === 'web');

  return (
    <div className="pt-20">
      <SEO 
        title="Custom Web Development" 
        description="Premium web development solutions. High performance, responsive design, and SEO-optimized sites."
      />
      
      {/* Hero Header */}
      <section className="bg-gray-900 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600 opacity-20 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Web <span className="text-indigo-500">Solutions</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Scalable, high-performance web applications built for growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><Layout size={24} /></div>
               <span className="text-xs font-bold uppercase tracking-widest">UI/UX</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><Smartphone size={24} /></div>
               <span className="text-xs font-bold uppercase tracking-widest">Responsive</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><Code size={24} /></div>
               <span className="text-xs font-bold uppercase tracking-widest">Modern</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-indigo-400"><Search size={24} /></div>
               <span className="text-xs font-bold uppercase tracking-widest">SEO</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 reveal">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-3">Portfolio</h2>
          <h3 className="text-4xl font-black text-gray-900 leading-tight">Web Development Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {webServices.map((service) => (
            <div key={service.id} className="reveal">
              <ServiceCard item={service} />
            </div>
          ))}
        </div>
      </section>

      {/* Changed ALL_REVIEWS to INITIAL_REVIEWS */}
      <ReviewSection reviews={INITIAL_REVIEWS} />
    </div>
  );
};

export default WebDev;
