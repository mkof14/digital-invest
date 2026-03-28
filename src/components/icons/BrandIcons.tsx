// Custom SVG icons designed specifically for Digital Invest's brand identity.
// These are not generic Lucide icons — each one is crafted for the company's sectors.

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/** Health & Longevity — DNA helix with heartbeat pulse */
export const HealthDNAIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M8 4C8 4 12 8 16 8C20 8 24 4 24 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 12C8 12 12 16 16 16C20 16 24 12 24 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 20C8 20 12 24 16 24C20 24 24 20 24 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 28C8 28 12 24 16 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
    <path d="M8 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
    <path d="M24 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
    {/* Heartbeat overlay */}
    <path d="M4 16H10L12 12L14 20L16 14L18 18L20 16H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);

/** AgroTech — Abstract leaf with data grid pattern */
export const AgroDataIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M6 28C6 28 6 14 16 6C26 14 26 28 26 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M10 16C10 16 13 18 16 18C19 18 22 16 22 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    <path d="M8 22C8 22 12 24 16 24C20 24 24 22 24 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    {/* Data nodes */}
    <circle cx="16" cy="12" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="20" cy="18" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="24" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

/** FoodTech — Molecular gastronomy / dish concept */
export const FoodMolecularIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Plate ring */}
    <circle cx="16" cy="18" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="16" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    {/* Molecular structure */}
    <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity="0.6"/>
    <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="22" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="12" cy="22" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="20" cy="22" r="1.5" fill="currentColor" opacity="0.4"/>
    <line x1="14" y1="14.5" x2="11" y2="12.5" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="18" y1="14.5" x2="21" y2="12.5" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="14.5" y1="18" x2="12.5" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="17.5" y1="18" x2="19.5" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    {/* Steam wisps */}
    <path d="M13 6C13 6 14 4 13 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M16 5C16 5 17 3 16 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M19 6C19 6 20 4 19 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

/** Infrastructure — Interconnected hub architecture */
export const InfraHubIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Central hub */}
    <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"/>
    {/* Satellite nodes */}
    <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="24" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="2" y="24" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="24" y="24" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    {/* Connections */}
    <line x1="8" y1="6" x2="12" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
    <line x1="24" y1="6" x2="20" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
    <line x1="8" y1="26" x2="12" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
    <line x1="24" y1="26" x2="20" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
    {/* Center dot */}
    <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.7"/>
  </svg>
);

/** Ecosystem Core — Brain-circuit hybrid */
export const EcosystemCoreIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Brain outline */}
    <path d="M16 4C10 4 6 8 6 14C6 18 8 22 12 24V28H20V24C24 22 26 18 26 14C26 8 22 4 16 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Circuit paths inside */}
    <path d="M12 12H16V16H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    <path d="M12 18H14V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    <path d="M18 10V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    {/* Nodes */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="18" cy="10" r="1" fill="currentColor" opacity="0.4"/>
  </svg>
);

/** Shield with circuit — for compliance/security */
export const ShieldCircuitIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 3L4 8V16C4 22.6 9.2 28.6 16 30C22.8 28.6 28 22.6 28 16V8L16 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Circuit traces */}
    <path d="M10 10H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M18 10H22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <circle cx="16" cy="10" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

/** Growth chart with arrow — for investment */
export const GrowthArrowIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 26L10 20L16 22L22 14L28 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6H28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Grid lines */}
    <line x1="4" y1="8" x2="4" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <line x1="4" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 2"/>
    <line x1="4" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 2"/>
  </svg>
);

/** Handshake abstract — for partnership */
export const PartnershipIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 14L10 8H14L16 10L18 8H22L28 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14L12 22L16 18L20 22L28 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="14" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

/** Daily health monitoring pulse */
export const DailyPulseIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeDasharray="3 3"/>
    <path d="M4 16H10L12 10L14 22L16 12L18 20L20 14L22 16H28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/** Data unification — converging streams */
export const DataStreamIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 6L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M4 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M4 26L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M16 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="28" cy="16" r="2" fill="currentColor" opacity="0.7"/>
    <circle cx="4" cy="6" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="4" cy="16" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="4" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
);

/** Self-improving AI loop */
export const AILoopIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* Rotating arrows */}
    <path d="M16 6C21.5 6 26 10.5 26 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M26 14L26 18L22 16" fill="currentColor" opacity="0.6"/>
    <path d="M16 26C10.5 26 6 21.5 6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M6 18L6 14L10 16" fill="currentColor" opacity="0.6"/>
    {/* Center brain */}
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

/** Cross-project synergy — orbital connections */
export const SynergyOrbitIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <ellipse cx="16" cy="16" rx="13" ry="6" stroke="currentColor" strokeWidth="1.2" opacity="0.3" transform="rotate(-30 16 16)"/>
    <ellipse cx="16" cy="16" rx="13" ry="6" stroke="currentColor" strokeWidth="1.2" opacity="0.3" transform="rotate(30 16 16)"/>
    <ellipse cx="16" cy="16" rx="13" ry="6" stroke="currentColor" strokeWidth="1.2" opacity="0.3" transform="rotate(90 16 16)"/>
    <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.8"/>
    {/* Orbital dots */}
    <circle cx="6" cy="10" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="26" cy="22" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="22" cy="6" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="10" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
);
