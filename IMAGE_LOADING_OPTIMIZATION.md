# Image Loading Optimization

This document describes the progressive image loading implementation for optimal performance.

## Features

### 1. Progressive Loading with Blur Placeholder
- Images load in stages: blur placeholder → high-quality image
- Smooth transitions using CSS animations
- Reduced perceived loading time

### 2. Lazy Loading
- Native browser lazy loading (`loading="lazy"`)
- Images load only when entering viewport
- Improved initial page load performance

### 3. Shimmer Effect
- Animated shimmer for skeleton loaders
- SVG-based placeholder with gradient animation
- Provides visual feedback during loading

### 4. Modern Image Formats Support
- AVIF (best compression)
- WebP (wide support)
- JPEG/PNG fallback

## Components

### OptimizedImage Component

```tsx
import OptimizedImage from '@/components/OptimizedImage';
import { shimmerDataURL } from '@/lib/imageUtils';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  blurDataURL={shimmerDataURL(400, 300)}
  className="w-full h-full object-cover"
/>
```

**Props:**
- `src`: Main image source
- `alt`: Alt text (required for SEO)
- `blurDataURL`: Optional blur placeholder
- `webpSrc`: Optional WebP version
- `avifSrc`: Optional AVIF version
- `aspectRatio`: 'square' | 'video' | 'portrait' | 'auto'
- `showSkeleton`: Show skeleton loader (default: true)

### Image Utils

```typescript
import { 
  shimmerDataURL, 
  generateBlurPlaceholder,
  preloadImage,
  getOptimizedImagePath 
} from '@/lib/imageUtils';

// Generate shimmer effect
const placeholder = shimmerDataURL(700, 475);

// Generate blur placeholder
const blur = generateBlurPlaceholder(10, 10, '#71717a');

// Preload image
await preloadImage('/path/to/image.jpg');

// Get optimized paths
const paths = getOptimizedImagePath('/image.jpg');
// Returns: { avif: '/image.avif', webp: '/image.webp', fallback: '/image.jpg' }
```

## Performance Improvements

### Before Optimization
- Cumulative Layout Shift (CLS): High
- Largest Contentful Paint (LCP): Slow
- No visual feedback during loading

### After Optimization
- ✅ CLS: Minimal (reserved space + skeleton)
- ✅ LCP: Faster (progressive loading)
- ✅ Smooth animations and transitions
- ✅ Better user experience with visual feedback

## Loading States

1. **Initial State**: Shimmer animation or blur placeholder
2. **Loading State**: Spinning indicator overlay
3. **Loaded State**: Full image with fade-in animation
4. **Error State**: Fallback message

## CSS Animations

Custom Tailwind animations:
- `animate-shimmer`: Sliding gradient effect
- `animate-blur-fade-in`: Blur + fade + scale transition
- `animate-fade-in`: Simple fade transition

## Best Practices

1. **Always provide alt text** for accessibility and SEO
2. **Use appropriate aspect ratios** to prevent layout shifts
3. **Choose blur placeholder size** based on image complexity
4. **Consider WebP/AVIF versions** for production
5. **Test on slow connections** to verify loading experience

## Browser Support

- **Lazy Loading**: All modern browsers
- **AVIF**: Chrome 85+, Firefox 93+, Edge 85+
- **WebP**: All modern browsers (IE 11 requires fallback)
- **Blur Placeholder**: All browsers supporting CSS filters

## Future Enhancements

- [ ] Implement responsive images with srcset
- [ ] Add automatic image optimization during build
- [ ] Integration with CDN for image delivery
- [ ] Dynamic blur hash generation from images
- [ ] Service worker caching strategy
