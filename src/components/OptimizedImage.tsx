import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  showSkeleton?: boolean;
  webpSrc?: string;
  avifSrc?: string;
  blurDataURL?: string;
  srcSet?: string;
  sizes?: string;
  webpSrcSet?: string;
  avifSrcSet?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
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
  fetchPriority,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: ''
  };

  const handleLoad = useCallback(() => setIsLoading(false), []);
  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div className={cn('relative overflow-hidden bg-muted/50', aspectRatioClasses[aspectRatio], containerClassName)}>
      {/* Skeleton loader */}
      {isLoading && showSkeleton && (
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
          {avifSrcSet && avifSrcSet.trim() && <source srcSet={avifSrcSet} type="image/avif" sizes={sizes} />}
          {avifSrc && avifSrc.trim() && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrcSet && webpSrcSet.trim() && <source srcSet={webpSrcSet} type="image/webp" sizes={sizes} />}
          {webpSrc && webpSrc.trim() && <source srcSet={webpSrc} type="image/webp" />}
          
          <img
            src={src}
            alt={alt}
            srcSet={srcSet && srcSet.trim() ? srcSet : undefined}
            sizes={sizes}
            loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
            decoding="async"
            // @ts-ignore - fetchPriority is a valid HTML attribute
            fetchpriority={fetchPriority}
            // Anti-CLS: provide intrinsic size hints when caller did not pass them.
            // Aspect ratio is enforced via container classes; these defaults give
            // the browser a reservation box before the image loads.
            width={(props as { width?: number }).width ?? 1600}
            height={(props as { height?: number }).height ?? 900}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-500 ease-out',
              isLoading ? 'opacity-0' : 'opacity-100',
              className
            )}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
