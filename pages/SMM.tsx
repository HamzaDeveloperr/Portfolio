
import React from 'react';
// Changed ALL_REVIEWS to INITIAL_REVIEWS
import { SMM_SERVICES, INITIAL_REVIEWS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ReviewSection from '../components/ReviewSection';
import InquiryForm from '../components/InquiryForm';
import { Target, TrendingUp, BarChart3, ShieldCheck, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const SMM: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Premium SMM & Social Growth" 
        description="Dominate social platforms with expert strategies in Viral Content, Ads, and direct SMS marketing."
      />
      
      {/* Dynamic SMM Hero */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[150px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-widest mb-8 border border-white/5">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Results-Oriented Marketing
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] reveal">
                Scale Your <span className="text-indigo-500">Brand</span> Beyond Limits.
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed reveal delay-200">
                Advanced Social Media Marketing (SMM) and direct messaging solutions designed to capture attention and convert audiences into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4 reveal delay-400">
                <div className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-3xl flex items-center gap-3 border border-white/10">
                    <TrendingUp size={24} className="text-indigo-400" />
                    <span className="font-bold text-sm">98% Viral Hooks</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-3xl flex items-center gap-3 border border-white/10">
                    <Target size={24} className="text-indigo-400" />
                    <span className="font-bold text-sm">Precision Targeting</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-3xl flex items-center gap-3 border border-white/10">
                    <ShieldCheck size={24} className="text-indigo-400" />
                    <span className="font-bold text-sm">SSL Secure Platforms</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Service Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">Expert SMM Solutions</h3>
          </div>
          <p className="text-gray-500 font-medium max-w-xs mt-6 md:mt-0">
            Every service is customized to your unique brand voice and business goals.
          </p>
        </div>

        {/* REUSABLE CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {SMM_SERVICES.map((service, idx) => (
            <div key={service.id} className={`reveal delay-${(idx % 2) * 200}`}>
              <ServiceCard item={service} />
              
            </div>

        
          ))}
        </div>
      </section>

      {/* Analytics Feature */}
      <section className="py-24 bg-gray-950 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 rounded-[4rem] p-10 md:p-20 border border-white/10 flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2 reveal-left">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/20 blur-[50px] rounded-full"></div>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Analytics" className="relative rounded-[3rem] shadow-2xl border border-white/10" />
                  </div>
               </div>
               <div className="lg:w-1/2 space-y-8 reveal-right">
                  <h4 className="text-3xl font-black text-white">Data-Driven Success</h4>
                  <p className="text-gray-400 text-lg">
                     We don't just post content; we track every click, like, and share to refine your strategy in real-time. Our focus is always on your bottom line.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <div className="text-3xl font-black text-indigo-400">+250%</div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Average Engagement</div>
                     </div>
                     <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <div className="text-3xl font-black text-indigo-400">10x</div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">ROI Growth</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Changed ALL_REVIEWS to INITIAL_REVIEWS */}
      <ReviewSection reviews={INITIAL_REVIEWS} />

      {/* Inquiry Form Area */}
      <section className="py-32 bg-white reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Get Started</h2>
            <h3 className="text-5xl font-black text-gray-900 mb-6">Request A Custom Proposal</h3>
            <p className="text-gray-500 text-lg">Share your vision with us and we'll create a tailored roadmap for your brand's growth.</p>
          </div>
          <InquiryForm defaultService="Social Media Marketing" showTitle={false} />
        </div>
      </section>
    </div>
  );
};

export default SMM;
