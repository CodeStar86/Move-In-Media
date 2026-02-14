import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({ 
  title, 
  description = 'MoveIn Media creates stunning, professional websites exclusively for estate agents. Get your custom estate agent website built with fixed pricing and fast delivery.',
  keywords = 'estate agent websites, property websites, real estate web design, estate agency websites UK',
  ogImage = 'https://movein-media.co.uk/og-image.jpg',
  noindex = false 
}: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://movein-media.co.uk';
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    try {
      if (!title) return;
      
      const fullTitle = title.includes('MoveIn Media') ? title : `${title} | MoveIn Media`;
      
      // Update document title
      if (typeof document !== 'undefined' && document.title !== undefined) {
        document.title = fullTitle;
      }

      // Update or create meta tags
      updateMetaTag('name', 'description', description);
      updateMetaTag('name', 'keywords', keywords);
      
      // Open Graph tags
      updateMetaTag('property', 'og:title', fullTitle);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'og:url', canonicalUrl);
      updateMetaTag('property', 'og:type', 'website');
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('property', 'og:site_name', 'MoveIn Media');
      
      // Twitter Card tags
      updateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateMetaTag('name', 'twitter:title', fullTitle);
      updateMetaTag('name', 'twitter:description', description);
      updateMetaTag('name', 'twitter:image', ogImage);

      // Robots meta tag
      if (noindex) {
        updateMetaTag('name', 'robots', 'noindex, nofollow');
      } else {
        updateMetaTag('name', 'robots', 'index, follow');
      }

      // Update canonical link
      updateCanonicalLink(canonicalUrl);

      // Force HTTPS redirect (if not already on HTTPS)
      if (typeof window !== 'undefined' && window.location.protocol === 'http:' && !window.location.hostname.includes('localhost')) {
        window.location.href = window.location.href.replace('http:', 'https:');
      }

    } catch (error) {
      console.warn('Failed to update SEO meta tags:', error);
    }
  }, [title, description, keywords, ogImage, canonicalUrl, noindex]);

  return null;
}

// Helper function to update or create meta tags
function updateMetaTag(attribute: 'name' | 'property', attributeValue: string, content: string) {
  if (typeof document === 'undefined') return;
  
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

// Helper function to update canonical link
function updateCanonicalLink(url: string) {
  if (typeof document === 'undefined') return;
  
  let link = document.querySelector('link[rel="canonical"]');
  
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}