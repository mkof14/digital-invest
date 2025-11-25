/**
 * Generate a tiny blur placeholder data URL for progressive image loading
 * @param width - Width of the blur placeholder (default: 10px)
 * @param height - Height of the blur placeholder (default: 10px)
 * @param color - Base color for the placeholder (default: muted gray)
 * @returns Data URL string for blur placeholder
 */
export const generateBlurPlaceholder = (
  width: number = 10,
  height: number = 10,
  color: string = '#71717a'
): string => {
  // Create a tiny canvas for blur effect
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  // Create gradient for more realistic blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.5, adjustBrightness(color, 20));
  gradient.addColorStop(1, adjustBrightness(color, -20));

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL('image/png');
};

/**
 * Adjust color brightness
 */
const adjustBrightness = (color: string, percent: number): string => {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1);
};

/**
 * Shimmer effect SVG for loading state
 */
export const shimmerDataURL = (width: number = 700, height: number = 475): string => {
  const shimmer = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#27272a" offset="20%" />
          <stop stop-color="#3f3f46" offset="50%" />
          <stop stop-color="#27272a" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#18181b" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(shimmer)}`;
};

/**
 * Preload image and return promise
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Get optimized image path based on format support
 */
export const getOptimizedImagePath = (basePath: string): {
  avif?: string;
  webp?: string;
  fallback: string;
} => {
  const pathWithoutExt = basePath.replace(/\.[^/.]+$/, '');
  const ext = basePath.split('.').pop();

  return {
    avif: `${pathWithoutExt}.avif`,
    webp: `${pathWithoutExt}.webp`,
    fallback: basePath,
  };
};

/**
 * Generate responsive srcSet for different screen sizes
 * @param basePath - Base image path without extension
 * @param sizes - Array of widths to include in srcSet
 * @param format - Image format ('webp', 'avif', 'jpg')
 * @returns srcSet string
 */
export function generateSrcSet(
  basePath: string,
  sizes: number[] = [400, 800, 1200, 1600],
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string {
  const pathWithoutExt = basePath.replace(/\.[^/.]+$/, '');
  
  return sizes
    .map(width => `${pathWithoutExt}-${width}w.${format} ${width}w`)
    .join(', ');
}

/**
 * Check if modern format files exist (for development)
 * Returns false for Vite-imported assets (they will have modern formats only after build)
 */
function checkModernFormatsExist(basePath: string): boolean {
  // If it's an external URL, modern formats might exist on CDN
  if (basePath.startsWith('http')) return true;
  
  // If it's from public folder (starts with / but not /src/), modern formats might exist
  if (basePath.startsWith('/') && !basePath.includes('/src/') && !basePath.includes('/assets/')) {
    // Only return true for /lovable-uploads/ or other public paths
    return basePath.startsWith('/lovable-uploads/');
  }
  
  // For Vite imported assets (contain /assets/ or /src/), don't use modern formats in dev
  // They will be generated during production build
  return false;
}

/**
 * Get responsive image paths with modern formats and srcSet
 * Only returns modern formats if they are likely to exist
 */
export function getResponsiveImagePaths(basePath: string, sizes: number[] = [400, 800, 1200, 1600]): {
  avifSrcSet?: string;
  webpSrcSet?: string;
  srcSet?: string;
  avif?: string;
  webp?: string;
  fallback: string;
  sizes: string;
} {
  const optimized = getOptimizedImagePath(basePath);
  const shouldUseModernFormats = checkModernFormatsExist(basePath);
  
  return {
    // Only provide modern formats for public assets where they actually exist
    avifSrcSet: shouldUseModernFormats ? generateSrcSet(basePath, sizes, 'avif') : undefined,
    webpSrcSet: shouldUseModernFormats ? generateSrcSet(basePath, sizes, 'webp') : undefined,
    srcSet: shouldUseModernFormats ? generateSrcSet(basePath, sizes, 'jpg') : undefined,
    avif: shouldUseModernFormats ? optimized.avif : undefined,
    webp: shouldUseModernFormats ? optimized.webp : undefined,
    fallback: basePath,
    // Default sizes - adjust based on your layout
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  };
}
