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
 * Cinematic hero section with a themed background image.
 *
 * The hero is always rendered in a dark cinematic scope (independent of the
 * site theme), so background photography never washes out and the headline
 * always keeps strong contrast in both light and dark themes.
 *
 * Inside the hero, semantic tokens like `text-foreground` /
 * `text-muted-foreground` automatically resolve to the dark-theme values
 * because we apply the `dark` class on the wrapper.
 */
const PageHero = ({
  image,
  children,
  className = "",
  withNavOffset = true,
}: PageHeroProps) => {
  return (
    <section className="dark relative overflow-hidden bg-[#0b1220] text-foreground">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Strong base darkening so text stays legible in both themes */}
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden="true"
      />
      {/* Left-heavy readability gradient for headline area */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
        aria-hidden="true"
      />
      {/* Soft fade into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

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
