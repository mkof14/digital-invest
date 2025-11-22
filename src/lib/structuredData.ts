/**
 * Utility functions for generating JSON-LD structured data for SEO
 */

interface Project {
  title: string;
  short_description: string;
  long_description?: string;
  category: string;
  hero_image_url: string;
  slug: string;
  target_amount?: number | null;
  current_raised?: number;
  currency?: string;
  status: string;
  location?: string | null;
}

interface NewsPost {
  title: string;
  body: string;
  published_at: string;
  slug: string;
  type: string;
  category?: string | null;
}

/**
 * Generate Organization structured data for homepage
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Invest Inc.",
    "url": "https://digitalinvest.com",
    "logo": "https://digitalinvest.com/digital-invest-logo.png",
    "description": "Private investment platform for qualified investors in AI, biotechnology, precision medicine, and agricultural technology projects.",
    "founder": {
      "@type": "Person",
      "name": "Michael Kofman"
    },
    "sameAs": [
      "https://www.linkedin.com/company/digitalinvestinc",
      "https://www.facebook.com/digitalinvestinc",
      "https://www.youtube.com/@digitalinvestinc",
      "https://twitter.com/digitalinvestinc"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Investor Relations",
      "email": "info@digitalinvest.com"
    }
  };
};

/**
 * Generate Product/Service structured data for project pages
 */
export const generateProjectSchema = (project: Project) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.short_description,
    "image": project.hero_image_url,
    "url": `https://digitalinvest.com/projects/${project.slug}`,
    "category": project.category,
    "brand": {
      "@type": "Organization",
      "name": "Digital Invest Inc."
    }
  };

  if (project.target_amount && project.currency) {
    schema.offers = {
      "@type": "Offer",
      "priceCurrency": project.currency,
      "price": project.target_amount,
      "availability": project.status === 'OPEN' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    };
  }

  return schema;
};

/**
 * Generate Article structured data for news posts
 */
export const generateArticleSchema = (post: NewsPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "articleBody": post.body,
    "datePublished": post.published_at,
    "dateModified": post.published_at,
    "author": {
      "@type": "Organization",
      "name": "Digital Invest Inc."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Invest Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalinvest.com/digital-invest-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://digitalinvest.com/news/${post.slug}`
    }
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate BreadcrumbList structured data
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Inject structured data into page
 */
export const injectStructuredData = (schema: object, id: string = 'structured-data') => {
  // Remove existing script if present
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script element
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Remove structured data from page
 */
export const removeStructuredData = (id: string = 'structured-data') => {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};
