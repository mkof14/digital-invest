// Shared per-project icon registry.
// Use `getProjectIcon(slug)` anywhere we need a themed icon for a portfolio
// project. Each icon is a small custom SVG (uses currentColor) so it picks up
// the surrounding text color / project accent.

import React from 'react';
import {
  HealthDNAIcon,
  EcosystemCoreIcon,
  PartnershipIcon,
  DailyPulseIcon,
  AILoopIcon,
  GrowthArrowIcon,
  SynergyOrbitIcon,
} from '@/components/icons/BrandIcons';

type IconProps = { className?: string };

// ---- Inline themed icons (not in BrandIcons) ----

export const RobotArmIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M12 7v3l-4 3v4" />
    <circle cx="8" cy="17" r="1.4" fill="currentColor" stroke="none" />
    <path d="M12 10l5 2v5" />
    <rect x="4" y="20" width="16" height="2" rx="1" />
  </svg>
);

export const DroneIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="5" r="2.5" /><circle cx="19" cy="5" r="2.5" />
    <circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
    <path d="M7 7l4 4M17 7l-4 4M7 17l4-4M17 17l-4-4" />
    <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>
);

export const StethoscopeIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3v6a4 4 0 0 0 8 0V3" />
    <path d="M9 13v3a4 4 0 0 0 8 0v-2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

export const MoonCycleIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4a8 8 0 1 0 4 12 6 6 0 0 1-4-12z" />
    <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
    <circle cx="11" cy="15" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
  </svg>
);

export const BrainWaveIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1V4H9z" />
    <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-1V4h1z" />
    <path d="M2 12h2l1-2 2 4 1-2h2" />
    <path d="M14 12h2l1-2 2 4 1-2h2" opacity="0.7" />
  </svg>
);

export const HeartPulseIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l2-4 3 8 2-6 2 2h5" />
    <path d="M20 8a4 4 0 0 0-7-2 4 4 0 0 0-7 2" opacity="0.5" />
  </svg>
);

export const HourglassAgeIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 21h12" />
    <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
    <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const SeedSproutIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M12 14c-4 0-6-3-6-6 4 0 6 3 6 6z" />
    <path d="M12 12c4 0 6-2 6-5-4 0-6 2-6 5z" />
  </svg>
);

export const FamilyIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="6" r="2.2" /><path d="M3 14a4 4 0 0 1 8 0v3H3z" />
    <circle cx="17" cy="6" r="2.2" /><path d="M13 14a4 4 0 0 1 8 0v3h-8z" />
    <circle cx="12" cy="11" r="1.6" /><path d="M9 17a3 3 0 0 1 6 0v3H9z" />
  </svg>
);

export const CaneSeniorIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v8l-3 7" />
    <path d="M12 10l4 3" />
    <path d="M16 8a2 2 0 1 1 0 4v9" />
  </svg>
);

export const SkinFaceIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11a7 7 0 0 1 14 0v3a7 7 0 0 1-7 7 7 7 0 0 1-7-7z" />
    <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <path d="M9 16c1 1 5 1 6 0" />
  </svg>
);

export const PlateForkIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="7" />
    <circle cx="12" cy="13" r="3.5" opacity="0.5" />
    <path d="M5 5v5a2 2 0 0 0 2 2V5" />
    <path d="M19 5v8" /><path d="M17.5 5v3a1.5 1.5 0 0 0 3 0V5" />
  </svg>
);

export const SunCheckIcon = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4" />
  </svg>
);

// ---- Per-project registry ----

export const projectIcons: Record<string, React.ReactNode> = {
  'biomath-core': <EcosystemCoreIcon className="w-4 h-4" />,
  'biomathcore': <EcosystemCoreIcon className="w-4 h-4" />,
  'biomathlife': <HealthDNAIcon className="w-4 h-4" />,
  'saven': <RobotArmIcon className="w-4 h-4" />,
  'agron': <RobotArmIcon className="w-4 h-4" />,
  'agron-work': <PartnershipIcon className="w-4 h-4" />,
  'terraaero': <DroneIcon className="w-4 h-4" />,
  'mrx-health': <StethoscopeIcon className="w-4 h-4" />,
  'baseline': <DailyPulseIcon className="w-4 h-4" />,
  'luna-balance': <MoonCycleIcon className="w-4 h-4" />,
  'stresscore': <BrainWaveIcon className="w-4 h-4" />,
  'vitalcore': <HeartPulseIcon className="w-4 h-4" />,
  'bioagecore': <HourglassAgeIcon className="w-4 h-4" />,
  'longevitycore': <SeedSproutIcon className="w-4 h-4" />,
  'familycore': <FamilyIcon className="w-4 h-4" />,
  'seniorcore': <CaneSeniorIcon className="w-4 h-4" />,
  'skincore': <SkinFaceIcon className="w-4 h-4" />,
  'myday': <AILoopIcon className="w-4 h-4" />,
  'itsgoodtoday': <SunCheckIcon className="w-4 h-4" />,
  'table-served': <PlateForkIcon className="w-4 h-4" />,
  'digital-invest-portfolio': <GrowthArrowIcon className="w-4 h-4" />,
};

/** Returns a custom themed icon for the given project slug. */
export const getProjectIcon = (slug: string): React.ReactNode =>
  projectIcons[slug] || <SynergyOrbitIcon className="w-4 h-4" />;

/**
 * Returns a themed icon at a custom size (in tailwind class form, e.g. "w-5 h-5").
 * Use when the default w-4 h-4 is too small for the surface.
 */
export const ProjectIcon = ({
  slug,
  className = 'w-4 h-4',
}: {
  slug: string;
  className?: string;
}) => {
  const Map: Record<string, React.ComponentType<IconProps>> = {
    'biomath-core': EcosystemCoreIcon,
    'biomathcore': EcosystemCoreIcon,
    'biomathlife': HealthDNAIcon,
    'saven': RobotArmIcon,
    'agron': RobotArmIcon,
    'agron-work': PartnershipIcon,
    'terraaero': DroneIcon,
    'mrx-health': StethoscopeIcon,
    'baseline': DailyPulseIcon,
    'luna-balance': MoonCycleIcon,
    'stresscore': BrainWaveIcon,
    'vitalcore': HeartPulseIcon,
    'bioagecore': HourglassAgeIcon,
    'longevitycore': SeedSproutIcon,
    'familycore': FamilyIcon,
    'seniorcore': CaneSeniorIcon,
    'skincore': SkinFaceIcon,
    'myday': AILoopIcon,
    'itsgoodtoday': SunCheckIcon,
    'table-served': PlateForkIcon,
    'digital-invest-portfolio': GrowthArrowIcon,
  };
  const Cmp = Map[slug] || SynergyOrbitIcon;
  return <Cmp className={className} />;
};
