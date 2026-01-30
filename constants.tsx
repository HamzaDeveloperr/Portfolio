
import { SiteConfig, ServiceItem, Review } from './types';

export const CONFIG: SiteConfig = {
  name: 'Hamza',
  email: 'mostbet4242@gmail.com',
  whatsapp: '03422072225',
  fiverrUrl: 'https://www.fiverr.com/', 
  socials: {
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
};

export const INITIAL_REVIEWS: Review[] = [
  { id: '1', author: 'Alex Johnson', rating: 5, comment: 'Hamza delivered a high-quality strategy faster than expected.', date: '2024-11-17', isApproved: true, serviceId: 'web-1' },
  { id: '2', author: 'Sarah Williams', rating: 5, comment: 'Incredible growth! My engagement rates tripled in weeks.', date: '2025-09-25', isApproved: true, serviceId: 'smm-1' },
  { id: '3', author: 'Michael R.', rating: 4, comment: 'Very professional web design. Great communication.', date: '2025-12-01', isApproved: true, serviceId: 'web-2' },
   { id: '4', author: 'David L.', rating: 5, comment: 'Excellent work on my e-commerce site. Highly recommended!', date: '2025-11-30', isApproved: true, serviceId: 'web-2' },
  // { id: '5', author: 'Emily S.', rating: 5, comment: 'The TikTok strategy was a game-changer for my brand!', date: '2025-10-15', isApproved: true, serviceId: 'smm-1' }
];

export const WEB_SERVICES: ServiceItem[] = [
  {
    id: 'web-1',
    title: 'Custom Business Websites',
    category: 'web',
    shortDescription: 'Modern, responsive websites built with React and Tailwind CSS.',
    longDescription: 'We build high-performance, SEO-optimized websites that represent your brand effectively. Our focus is on user experience, speed, and clean code that scales with your business.',
    image: 'Images/Saloon.gif',
    externalLink: 'https://github.com/hamza-webdev/business-portfolios',
    similarProjectsLink: 'https://github.com/hamza-webdev/business-portfolios',
    whatsappMessage: 'Hi Hamza, I am interested in hiring you for a custom website Developer.',
  },
  // {
  //   id: 'web-2',
  //   title: 'E-commerce Solutions',
  //   category: 'web',
  //   shortDescription: 'Scalable online stores with seamless payment integration.',
  //   longDescription: 'Full-featured e-commerce platforms designed to convert visitors into customers. Includes product management, secure checkout, and mobile-first design optimized for sales.',
  //   image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
  //   externalLink: 'https://github.com/hamza-webdev/ecommerce-solutions',
  //   similarProjectsLink: 'https://github.com/hamza-webdev/ecommerce-solutions',
  //   whatsappMessage: 'Hi Hamza, I want to hire you for an online store project.',
  // }
];

export const SMM_SERVICES: ServiceItem[] = [
  {
    id: 'smm-1',
    title: 'Viral TikTok & Reels Strategy',
    category: 'smm',
    shortDescription: 'Dominating short-form video algorithms with trending, high-retention content.',
    longDescription: 'We handle everything from trend research to professional video editing. Our strategy is designed to hit the "For You" page consistently, building massive brand awareness and organic followers.',
    image: 'Images/smm1.png',
    externalLink: 'https://www.tiktok.com',
    whatsappMessage: 'Hi Hamza, I want to hire you for a Viral Video strategy.',
  },
  {
    id: 'smm-2',
    title: 'Facebook & Instagram Ad Management',
    category: 'smm',
    shortDescription: 'High-ROI paid campaigns targeting your perfect customers with precision.',
    longDescription: 'Stop wasting money on ads that don\'t convert. We build complex sales funnels, retargeting campaigns, and high-quality creative assets.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    whatsappMessage: 'Hi Hamza, I need to hire you for Meta Ad campaigns.',
  }
];

export const SERVICES_DATA: ServiceItem[] = [...WEB_SERVICES, ...SMM_SERVICES];
