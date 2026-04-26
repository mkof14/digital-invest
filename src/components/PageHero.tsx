import { ReactNode } from "react";

interface PageHeroProps {
  /** Imported image asset (ES6 import) used as the hero background. */
  image: string;
  /**
   * Section content (title, subtitle, CTAs). Rendered on top of the image
   * with a readability gradient overlay.
   */
  children: ReactNode;
  /** Optional extra classes for the inner content wrapper. */
  className?: string;
  /**
   * If true, applies extra top padding to clear the fixed Navigation.
   * Default: true.
   */
  withNavOffset?: boolean;
}

/**
 * Cinematic hero section with a themed background image, dark overlay
 * gradient (left-heavy for text legibility) and consistent spacing.
 *
 * Designed to mirror the homepage hero look across the rest of the site.
 */
const PageHero = ({
  image,
  children,
  className = "",
  withNavOffset = true,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      {/* Readability overlays — keep text crisp over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/72 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/85" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          withNavOffset ? "pt-32 pb-24" : "py-24"
        } ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default PageHero;
