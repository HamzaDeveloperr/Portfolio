
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Share2, ArrowRight, ShieldCheck, Users, Globe, Star, MessageSquare, CheckCircle } from 'lucide-react';
// Changed ALL_REVIEWS to INITIAL_REVIEWS
import { CONFIG, INITIAL_REVIEWS } from '../constants';
import ReviewSection from '../components/ReviewSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Expert Web Developer & SMM Strategist" 
        description="Hire Hamza for high-performance websites and viral social media marketing strategies. 100% satisfaction guaranteed."
        keywords="Hire Hamza, Web Development, SMM, Digital Marketing, Social Media Growth, Freelance Developer"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                Accepting new projects
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
                Transforming Ideas into <span className="text-indigo-600">Digital Reality.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl reveal delay-100">
                Hi, I'm {CONFIG.name}. I specialize in building high-performance websites and crafting winning social media strategies that drive real business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 reveal delay-200">
                <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-center hover:bg-indigo-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105">
                  Hire Me Now <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-center hover:bg-gray-50 transition-all transform hover:scale-105">
                  View Experience
                </Link>
              </div>

              {/* Clickable Rating Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-300 mb-12">
                <Link to="/web-development" className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Code size={20} /></div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Web Development</div>
                    <div className="flex items-center gap-1.5">
                      <Star size={14} fill="#fbbf24" className="text-amber-400" />
                      <span className="text-sm font-black">4.9/5.0</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
                </Link>
                <Link to="/social-media-marketing" className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all"><Share2 size={20} /></div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Social Marketing</div>
                    <div className="flex items-center gap-1.5">
                      <Star size={14} fill="#fbbf24" className="text-amber-400" />
                      <span className="text-sm font-black">4.7/5.0</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end reveal delay-400">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-200/30 rounded-full blur-3xl"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-[12px] border-white animate-float">
                <img src="https://api.imghippo.com/files/diu1347tMY.jpeg" alt="Hamza Portfolio" className="w-full h-full object-cover" />
              </div>
              
              {/* Trust Indicators Overlay */}
              <div className="absolute top-10 left-0 bg-white p-4 rounded-2xl shadow-xl reveal delay-500 hover:scale-105 transition-transform cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"><MessageSquare size={20} /></div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Live Support</div>
                    <div className="text-sm font-black">27 Clients Chatting ...</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl reveal delay-600 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Verified</div>
                    <div className="text-sm font-black text-gray-900">Top Rated Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-3">Professional Services</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Expert Solutions Scaled for Excellence</h3>
            <p className="text-gray-500 text-lg">Choose a dedicated service category to hire for your next big project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-left delay-100 group p-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-white p-10 rounded-[22px] h-full flex flex-col items-start transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Code size={32} />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Web Development</h4>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  From landing pages to complex enterprise platforms, I build responsive, SEO-optimized, and lightning-fast websites tailored to your needs.
                </p>
                <Link to="/web-development" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-center hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Hire For Web Dev <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="reveal-right delay-200 group p-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-white p-10 rounded-[22px] h-full flex flex-col items-start transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Share2 size={32} />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Social Media Marketing</h4>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  Grow your brand's presence across all major platforms. I handle content creation, community management, and targeted ad campaigns.
                </p>
                <Link to="/social-media-marketing" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-center hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Hire For Marketing <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Indicators */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="space-y-4 reveal delay-100 group">
              <div className="mx-auto text-indigo-400 group-hover:scale-125 transition-transform duration-500">
                <ShieldCheck size={40} className="mx-auto" />
              </div>
              <div className="text-3xl font-black">100%</div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Verified Expert</div>
            </div>
            <div className="space-y-4 reveal delay-200 group">
              <div className="mx-auto text-indigo-400 group-hover:scale-125 transition-transform duration-500">
                <Users size={40} className="mx-auto" />
              </div>
              <div className="text-3xl font-black">1000+</div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Global Clients</div>
            </div>
            <div className="space-y-4 reveal delay-300 group">
              <div className="mx-auto text-indigo-400 group-hover:scale-125 transition-transform duration-500">
                <MessageSquare size={40} className="mx-auto" />
              </div>
              <div className="text-3xl font-black">24/7</div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Live Support</div>
            </div>
            <div className="space-y-4 reveal delay-400 group">
              <div className="mx-auto text-indigo-400 group-hover:scale-125 transition-transform duration-500">
                <CheckCircle size={40} className="mx-auto" />
              </div>
              <div className="text-3xl font-black">500+</div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Success Projects</div>
            </div>
            <div className="space-y-4 reveal delay-500 group">
              <div className="mx-auto text-indigo-400 group-hover:scale-125 transition-transform duration-500">
                <Globe size={40} className="mx-auto" />
              </div>
              <div className="text-3xl font-black">25+</div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal">
        {/* Changed ALL_REVIEWS to INITIAL_REVIEWS */}
        <ReviewSection reviews={INITIAL_REVIEWS} />
      </div>
      
      {/* Call to Action */}
      <section className="py-24 reveal px-4 sm:px-0">
        <div className="max-w-5xl mx-auto text-center bg-indigo-600 rounded-[50px] py-20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10 reveal">Ready to Hire Hamza?</h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto relative z-10 reveal delay-200">Let's discuss how we can bring your vision to life with professional expertise and dedicated support.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105 relative z-10 reveal delay-400">
            Hire Me Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
