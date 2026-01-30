
import React from 'react';
// Changed ALL_REVIEWS to INITIAL_REVIEWS
import { SERVICES_DATA, INITIAL_REVIEWS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ReviewSection from '../components/ReviewSection';
import SEO from '../components/SEO';
import { Send, BarChart3, Users, ShieldCheck } from 'lucide-react';

const SMSServices: React.FC = () => {
  const smsServices = SERVICES_DATA.filter(s => s.category === 'sms');

  return (
    <div className="pt-20">
      <SEO 
        title="SMS Marketing Services" 
        description="Global bulk SMS solutions for businesses. Reach customers instantly."
      />
      
      {/* Hero Header */}
      <section className="bg-indigo-600 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">SMS <span className="text-indigo-200">Marketing</span></h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-12">
            Direct-to-customer communication with 98% open rates.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <div className="bg-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/20">
               <Send size={20} className="text-indigo-200" />
               <span className="font-bold text-sm">Bulk Sending</span>
             </div>
             <div className="bg-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/20">
               <BarChart3 size={20} className="text-indigo-200" />
               <span className="font-bold text-sm">Live Reports</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 reveal">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-3">Our Platform</h2>
          <h3 className="text-4xl font-black text-gray-900 leading-tight">Messaging Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {smsServices.map((service) => (
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

export default SMSServices;
