// SEO data for all pages
export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

export const seoData: Record<string, PageSEO> = {
  // Main pages
  home: {
    title: 'Professional Estate Agent Websites | MoveIn Media',
    description: 'MoveIn Media creates stunning, professional websites exclusively for estate agents. Fixed pricing from £5,000, fast delivery, and no hidden costs. Showcase your properties beautifully.',
    keywords: 'estate agent websites, property websites UK, real estate web design, estate agency websites, professional property websites, estate agent web development'
  },
  
  about: {
    title: 'About Us - Expert Estate Agent Website Designers',
    description: 'Learn about MoveIn Media, specialists in creating professional websites for estate agents. We understand the property industry and build websites that convert viewers into clients.',
    keywords: 'estate agent web design company, property website specialists, real estate web designers UK, about MoveIn Media'
  },
  
  packages: {
    title: 'Website Packages & Pricing for Estate Agents',
    description: 'Choose from our Silver Template (£5,000), Gold Template (£12,000), or Fully Customised Website packages. Fixed pricing, no hidden fees. Perfect solutions for estate agencies of all sizes.',
    keywords: 'estate agent website packages, property website pricing, estate agency web design prices, template websites for estate agents'
  },
  
  process: {
    title: 'Our Website Design Process for Estate Agents',
    description: 'Discover our streamlined 6-step process for creating your perfect estate agent website. From initial consultation to launch, we make it simple and stress-free.',
    keywords: 'estate agent website design process, property website development steps, web design workflow'
  },
  
  caseStudies: {
    title: 'Estate Agent Website Case Studies & Success Stories',
    description: 'See real examples of stunning estate agent websites we\'ve created. Explore our portfolio of successful property websites that drive leads and showcase properties beautifully.',
    keywords: 'estate agent website examples, property website portfolio, real estate web design case studies, estate agency website showcase'
  },
  
  faq: {
    title: 'FAQs - Estate Agent Website Design Questions Answered',
    description: 'Got questions about our estate agent website services? Find answers about pricing, timelines, customization options, and more in our comprehensive FAQ section.',
    keywords: 'estate agent website FAQs, property website questions, web design FAQ estate agents'
  },
  
  freeAudit: {
    title: 'Free Estate Agent Website Audit - Get Your Free Analysis',
    description: 'Get a comprehensive, free analysis of your current estate agent website. Discover opportunities to improve performance, SEO, user experience, and lead generation.',
    keywords: 'free website audit estate agents, property website analysis, estate agency website review, free web design audit'
  },
  
  insights: {
    title: 'Estate Agent Website Insights & Expert Advice | MoveIn Media',
    description: 'Expert articles on improving estate agent websites. Learn about common problems, performance optimization, lead generation strategies, and industry best practices.',
    keywords: 'estate agent website advice, property website tips, real estate web design insights, estate agency website best practices, property website optimization'
  },
  
  // Template pages
  templateOne: {
    title: 'Template One - Modern Estate Agent Website Design',
    description: 'Explore our Template One design - a sleek, modern website perfect for forward-thinking estate agents. Includes property showcase, contact forms, and mobile-responsive design.',
    keywords: 'estate agent website template, modern property website design, template estate agency website'
  },
  
  templateTwo: {
    title: 'Template Two - Professional Estate Agent Website',
    description: 'View our Template Two design - a professional, trustworthy website layout ideal for established estate agencies. Features elegant property displays and lead capture forms.',
    keywords: 'professional estate agent template, property website template, estate agency design template'
  },
  
  custom: {
    title: 'Custom Estate Agent Websites - Bespoke Design Quote',
    description: 'Need something unique? Request a quote for a fully customised estate agent website built specifically for your agency\'s needs. Unlimited design possibilities.',
    keywords: 'custom estate agent website, bespoke property website, tailored estate agency web design, custom web development'
  },
  
  // Service pages
  websiteDesign: {
    title: 'Estate Agent Website Design Services | MoveIn Media',
    description: 'Professional estate agent website design services that showcase your properties and attract more clients. Fixed pricing, fast turnaround, and industry expertise.',
    keywords: 'estate agent website design, property website design services, estate agency web design, real estate website design UK'
  },
  
  websiteRedesign: {
    title: 'Estate Agent Website Redesign Services | Modernise Your Site',
    description: 'Transform your outdated estate agent website with our professional redesign service. Modern design, improved user experience, and better lead generation.',
    keywords: 'estate agent website redesign, property website refresh, estate agency site redesign, website modernisation'
  },
  
  propertySearch: {
    title: 'Property Search Website Development | Advanced Search Features',
    description: 'Powerful property search functionality for your estate agent website. Advanced filters, map integration, and seamless user experience to help clients find their perfect home.',
    keywords: 'property search development, estate agent search functionality, advanced property search, real estate search features'
  },
  
  speedOptimisation: {
    title: 'Estate Agent Website Speed Optimisation | Faster Loading Times',
    description: 'Speed up your estate agent website for better user experience and SEO rankings. Professional performance optimisation that reduces load times and improves conversions.',
    keywords: 'website speed optimisation, estate agent website performance, fast loading property websites, web performance improvement'
  },
  
  // Legal pages
  terms: {
    title: 'Terms & Conditions | MoveIn Media',
    description: 'Read our terms and conditions for estate agent website design services. Clear, transparent terms covering our services, pricing, and policies.',
    keywords: 'terms and conditions, MoveIn Media terms, website design terms'
  },
  
  privacy: {
    title: 'Privacy Policy | MoveIn Media',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information. We respect your privacy and comply with UK data protection laws.',
    keywords: 'privacy policy, data protection, GDPR compliance, MoveIn Media privacy'
  }
};

// Helper function to get SEO data for a page
export function getPageSEO(pageKey: string): PageSEO {
  return seoData[pageKey] || seoData.home;
}