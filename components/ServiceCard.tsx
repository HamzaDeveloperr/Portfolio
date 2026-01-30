
import React from 'react';
import { MessageCircle, Layers, Globe } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONFIG } from '../constants';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const openWhatsApp = (msg?: string) => {
    // Universal wa.me link works with both standard and business apps
    const text = encodeURIComponent(msg || item.whatsappMessage);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  const handleSamplesClick = () => {
    // Branch logic based on category as requested
    if (item.category === 'web') {
      // For web development projects, force GitHub link and never use WhatsApp fallback
      const link = item.similarProjectsLink || "https://github.com/";
      window.open(link, '_blank');
    } else {
      // For SMM and others, keep original logic (WhatsApp fallback if no link)
      if (item.similarProjectsLink) {
        window.open(item.similarProjectsLink, '_blank');
      } else {
        openWhatsApp(`Hi Hamza, I'd like to see some portfolio samples for ${item.title}.`);
      }
    }
  };

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
           <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
              <Globe size={24} />
           </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
          {item.shortDescription}
        </p>

        <div className="space-y-3">
          <button 
            onClick={handleSamplesClick} 
            className="w-full flex items-center justify-center gap-3 py-4 border-2 border-gray-100 text-gray-600 rounded-2xl font-bold text-sm hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95 bg-white"
          >
            <Layers size={18} /> View Samples & Portfolio
          </button>
          
          <button 
            onClick={() => openWhatsApp()} 
            className="w-full flex items-center justify-center gap-3 py-5 bg-[#22c55e] text-white rounded-2xl font-black text-sm hover:bg-green-600 transition-all shadow-xl shadow-green-100 active:scale-95"
          >
            <MessageCircle size={20} /> Contact on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
