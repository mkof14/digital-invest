/**
 * Utility functions for managing dynamic meta tags for SEO
 */

export const updateMetaTags = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
}: {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}) => {
  // Update document title
  document.title = title;

  // Helper function to update or create meta tag
  const updateMetaTag = (selector: string, content: string, attribute: 'name' | 'property' = 'name') => {
    let element = document.querySelector(selector) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, selector.replace(`[${attribute}="`, '').replace('"]', ''));
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Update description
  if (description) {
    updateMetaTag('[name="description"]', description, 'name');
  }

  // Update Open Graph tags
  if (ogTitle || title) {
    updateMetaTag('[property="og:title"]', ogTitle || title, 'property');
  }
  if (ogDescription || description) {
    updateMetaTag('[property="og:description"]', ogDescription || description || '', 'property');
  }
  if (ogImage) {
    updateMetaTag('[property="og:image"]', ogImage, 'property');
  }
  updateMetaTag('[property="og:type"]', ogType, 'property');

  // Update Twitter Card tags
  if (twitterTitle || title) {
    updateMetaTag('[name="twitter:title"]', twitterTitle || title, 'name');
  }
  if (twitterDescription || description) {
    updateMetaTag('[name="twitter:description"]', twitterDescription || description || '', 'name');
  }
  if (twitterImage || ogImage) {
    updateMetaTag('[name="twitter:image"]', twitterImage || ogImage || '', 'name');
  }

  // Update canonical URL
  if (canonicalUrl) {
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonicalUrl);
  }
};

export const resetMetaTags = () => {
  // Reset to default title
  document.title = 'Digital Invest Inc. - Private Multi-Sector Portfolio | Technology & Innovation';
  
  // Reset description - legal-safe wording
  const description = 'Private portfolio company operating AI, biotechnology, and agricultural technology projects. Information for qualified parties only. U.S.-based operations. Not a public offering platform.';
  updateMetaTags({
    title: document.title,
    description,
    canonicalUrl: 'https://digitalinvest.com/',
  });
};

/**
 * Truncate text to specified length, adding ellipsis if needed
 */
export const truncateForMeta = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + '...';
};
