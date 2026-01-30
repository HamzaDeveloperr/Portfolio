import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * SEO Component: Dynamically updates the document head with relevant meta tags.
 * This is crucial for search engine indexing and social media previewing.
 */
const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Web Development, Social Media Marketing, SMM, Hamza Portfolio, React Developer", 
  ogImage = "https://picsum.photos/seed/hamza-seo/1200/630",
  ogType = "website"
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | Hamza`;

    // Helper to update or create meta tags
    const updateMetaTag = (attrName: string, attrValue: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${attrValue}"]` : `meta[name="${attrValue}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', attrValue);
        } else {
          element.setAttribute('name', attrValue);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // 3. Open Graph Tags (Facebook, LinkedIn, etc.)
    updateMetaTag('property', 'og:title', title, true);
    updateMetaTag('property', 'og:description', description, true);
    updateMetaTag('property', 'og:image', ogImage, true);
    updateMetaTag('property', 'og:type', ogType, true);

    // 4. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

  }, [title, description, keywords, ogImage, ogType]);

  return null; // This component doesn't render any visible UI
};

export default SEO;