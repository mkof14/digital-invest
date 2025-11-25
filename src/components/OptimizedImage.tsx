import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  showSkeleton?: boolean;
  webpSrc?: string; // Optional WebP version
  avifSrc?: string; // Optional AVIF version
  blurDataURL?: string; // Optional blur placeholder
  srcSet?: string; // Optional srcSet for responsive images
  sizes?: string; // Optional sizes attribute
  webpSrcSet?: string; // Optional WebP srcSet
  avifSrcSet?: string; // Optional AVIF srcSet
}

const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = 'auto',
  showSkeleton = true,
  webpSrc,
  avifSrc,
  blurDataURL,
  srcSet,
  sizes,
  webpSrcSet,
  avifSrcSet,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(blurDataURL || src);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: ''
  };

  useEffect(() => {
    // Preload high-quality image
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden bg-muted/50', aspectRatioClasses[aspectRatio], containerClassName)}>
      {/* Blur placeholder background */}
      {isLoading && blurDataURL && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-lg scale-110 opacity-50"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}
      
      {/* Skeleton loader with shimmer effect */}
      {isLoading && showSkeleton && !blurDataURL && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-muted via-muted/50 to-muted overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-sm text-muted-foreground">Image not available</p>
        </div>
      ) : (
        <picture>
          {/* Modern formats with responsive srcset - only if provided */}
          {avifSrcSet && avifSrcSet.trim() && <source srcSet={avifSrcSet} type="image/avif" sizes={sizes} />}
          {avifSrc && avifSrc.trim() && <source srcSet={avifSrc} type="image/avif" />}
          
          {webpSrcSet && webpSrcSet.trim() && <source srcSet={webpSrcSet} type="image/webp" sizes={sizes} />}
          {webpSrc && webpSrc.trim() && <source srcSet={webpSrc} type="image/webp" />}
          
          <img
            src={imageSrc}
            alt={alt}
            srcSet={srcSet && srcSet.trim() ? srcSet : undefined}
            sizes={sizes}
            loading="lazy"
            decoding="async"
            className={cn(
              'w-full h-full object-cover transition-all duration-700 ease-out',
              isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0',
              className
            )}
            onError={() => {
              console.error('Failed to load image:', src);
              setHasError(true);
            }}
            {...props}
          />
        </picture>
      )}
      
      {/* Loading indicator overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
