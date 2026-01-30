
export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  isApproved: boolean;
  serviceId: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: 'web' | 'smm' | 'sms';
  externalLink?: string; 
  similarProjectsLink?: string; 
  whatsappMessage: string; 
  reviews?: Review[]; // Made optional as they will be fetched from "backend"
}

export interface SiteConfig {
  name: string;
  email: string;
  whatsapp: string;
  fiverrUrl: string;
  socials: {
    tiktok: string;
    instagram: string;
    linkedin: string;
  };
}
