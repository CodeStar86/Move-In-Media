import { useEffect } from 'react';

const SITE_URL = (import.meta as any).env?.VITE_SITE_URL || 'https://movein-media.co.uk';

interface SEOProps {
  /** Page title without the brand suffix */
  title: string;
  /** Meta description (recommended per page) */
  description?: string;
  /** Absolute/relative path for canonical + OG URL (e.g. "/about") */
  canonicalPath?: string;
  /** Absolute URL to an OG image */
  ogImage?: string;
  /** Set true to add noindex,nofollow (e.g. admin pages) */
  noIndex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content?: string) {
  if (!content) return;
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertLink(rel: string, href?: string) {
  if (!href) return;
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: any) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
}

export function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage = `${SITE_URL}/og-image.png`,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    try {
      if (!title || typeof document === 'undefined') return;

      const fullTitle = `${title} | Move In Media`;
      const canonicalUrl = `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

      // Title
      document.title = fullTitle;

      // Robots
      upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow');

      // Description (keep existing default if not provided)
      if (description) upsertMeta('name', 'description', description);

      // Canonical
      upsertLink('canonical', canonicalUrl);

      // Open Graph
      upsertMeta('property', 'og:type', 'website');
      upsertMeta('property', 'og:site_name', 'Move In Media');
      upsertMeta('property', 'og:url', canonicalUrl);
      upsertMeta('property', 'og:title', fullTitle);
      if (description) upsertMeta('property', 'og:description', description);
      upsertMeta('property', 'og:image', ogImage);

      // Twitter
      upsertMeta('name', 'twitter:card', 'summary_large_image');
      upsertMeta('name', 'twitter:title', fullTitle);
      if (description) upsertMeta('name', 'twitter:description', description);
      upsertMeta('name', 'twitter:image', ogImage);

      // Organization schema (site-wide)
      upsertJsonLd('org-schema', {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Move In Media",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "sameAs": [
          "https://www.instagram.com/moveinmedia"
        ]
      });

      // WebSite schema (site-wide)
      upsertJsonLd('website-schema', {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Move In Media",
        "url": SITE_URL
      });

      // Breadcrumb schema (page-level)
      const crumbs: Array<{ name: string; item: string }> = [
        { name: "Home", item: `${SITE_URL}/` }
      ];
      if (canonicalPath && canonicalPath !== '/') {
        // Use the page title as the last crumb label
        crumbs.push({ name: title, item: canonicalUrl });
      }

      upsertJsonLd('breadcrumb-schema', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((c, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": c.name,
          "item": c.item
        }))
      });
    } catch (error) {
      console.warn('SEO update failed:', error);
    }
  }, [title, description, canonicalPath, ogImage, noIndex]);

  return null;
}
