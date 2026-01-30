
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONFIG } from '../constants';

interface ProjectCardProps {
  project: ServiceItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Hamza, I'm interested in a project similar to "${project.title}".`);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
          <button 
            onClick={openWhatsApp}
            className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Discuss Project <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
          {project.category === 'web' ? 'Web Development' : 'Marketing Solution'}
        </div>
        <h3 className="text-xl font-black text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <button 
          onClick={openWhatsApp}
          className="flex items-center gap-2 text-green-600 font-black text-xs uppercase tracking-widest hover:text-green-700 transition-colors"
        >
          <MessageCircle size={16} /> Order Similar Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
