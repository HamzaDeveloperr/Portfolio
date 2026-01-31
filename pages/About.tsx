import React from 'react';
import { CONFIG } from '../constants';
import { Mail, Phone, ExternalLink, Award, Coffee, Zap, Target, TrendingUp, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';
import hamzaAbout from '../Images/hamza_about.jpeg';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <SEO 
        title="Meet Hamza | Digital Solutions Expert" 
        description="Learn about Hamza's journey in web development and social media marketing. Discover how we help brands scale with technology and creative strategy."
        keywords="About Hamza, Digital Consultant, Web Expert, Marketing Specialist, Professional Journey"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 reveal">
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
<img 
  src="./Images/hamza_about.jpeg" 
  alt={CONFIG.name} 
  className="w-full h-auto object-cover" 
/>            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 reveal delay-100">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href={`mailto:${CONFIG.email}`} className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"><Mail size={18} /></div>
                  <span className="text-sm font-medium">{CONFIG.email}</span>
                </a>
                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"><Phone size={18} /></div>
                  <span className="text-sm font-medium">{CONFIG.whatsapp}</span>
                </a>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Official Verification</h4>
                <a 
                  href={CONFIG.fiverrUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-2xl hover:bg-black transition-colors"
                >
                  <span className="font-bold">Fiverr Profile</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            {/* Hamza Bio */}
            <section className="reveal delay-200">
              <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Lead Developer</h2>
              <h1 className="text-5xl font-black text-gray-900 mb-8 leading-tight">About {CONFIG.name}</h1>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  I am a passionate digital professional with over 5 years of experience in helping businesses establish a powerful presence online. My journey started with a fascination for how the web works, which eventually evolved into a full-scale career in Web Development and Social Media Marketing.
                </p>
                <p>
                  I believe that every project is unique and deserves a custom approach. Whether I'm writing clean code for a new application or analyzing social trends to boost engagement, my goal is always the same: deliver measurable results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 reveal">
                    <Award className="text-indigo-600 mb-4" size={32} />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Driven</h4>
                    <p className="text-sm text-gray-600">I never compromise on code quality or marketing aesthetics. Everything I build is made to last.</p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100 reveal delay-100">
                    <Zap className="text-purple-600 mb-4" size={32} />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h4>
                    <p className="text-sm text-gray-600">Time is money. I pride myself on meeting strict deadlines without sacrificing detail.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hassan SMM Expert Section */}
            <section className="reveal">
              <div className="bg-gray-50 rounded-[50px] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="Images/hassan.png" alt="Hassan SMM Expert" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                  <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest">SMM Specialist</h2>
                  <h3 className="text-4xl font-black text-gray-900 leading-tight">About Hassan</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Hassan is our dedicated Social Media Marketing expert. With a sharp eye for viral trends and a data-driven approach, he transforms digital platforms into thriving communities. His strategies focus on high engagement and sustainable brand growth.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-xl border border-gray-100">
                      <TrendingUp size={16} className="text-purple-500" />
                      <span className="text-xs font-bold">Viral Content</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-xl border border-gray-100">
                      <Target size={16} className="text-purple-500" />
                      <span className="text-xs font-bold">Audience Growth</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-xl border border-gray-100">
                      <BarChart3 size={16} className="text-purple-500" />
                      <span className="text-xs font-bold">ROI Focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Expertise Section */}
            <section className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 reveal">Our Combined Expertise</h3>
              <p className="text-gray-600 reveal delay-100">
                Together, we provide a holistic digital solution. While Hamza builds the engine (Web Development), Hassan provides the fuel (SMM), ensuring your brand not only functions perfectly but is seen by the right audience.
              </p>

              <div className="space-y-4 pt-4 reveal delay-200">
                 {[
                   { label: 'Web Development (Full Stack)', value: 95, color: 'bg-indigo-600' },
                   { label: 'Social Media Management (Expert)', value: 98, color: 'bg-purple-600' },
                   { label: 'Content Creation & Branding', value: 85, color: 'bg-indigo-500' },
                   { label: 'SEO & Growth Marketing', value: 90, color: 'bg-purple-500' }
                 ].map(skill => (
                   <div key={skill.label}>
                     <div className="flex justify-between items-center mb-1">
                       <span className="text-sm font-bold text-gray-900">{skill.label}</span>
                       <span className="text-sm font-medium text-gray-600">{skill.value}%</span>
                     </div>
                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div className={`h-full ${skill.color} rounded-full transition-all duration-1000`} style={{ width: `${skill.value}%` }}></div>
                     </div>
                   </div>
                 ))}
              </div>
            </section>
            
            <div className="p-10 bg-indigo-600 rounded-[40px] text-white flex flex-col md:flex-row items-center gap-8 reveal">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Coffee size={40} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Let's grab a virtual coffee</h4>
                <p className="text-indigo-100 mb-6">Want to talk about your project or just share an idea? We're always open to interesting conversations.</p>
                <a href="/#/contact" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:shadow-xl transition-all">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
