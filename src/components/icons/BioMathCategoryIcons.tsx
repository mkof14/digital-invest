// Bespoke SVG icons for the 20 BioMath Core service categories.
// All strokes use currentColor so the icon picks up the category accent.
// Style: thin-line geometric, 24x24 viewBox, strokeWidth 1.5–1.6.

import React from "react";

type IconProps = { className?: string; style?: React.CSSProperties };

const base = "fill-none stroke-current";
const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 01 — Critical Health: heart + ECG spike
export const CriticalHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 2-1 3.7-2.4 5.2" />
    <path d="M3 13h3l1.5-3 2 6 1.5-3H14" />
  </svg>
);

// 02 — Everyday Wellness: sun + leaf
export const EverydayWellnessIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
  </svg>
);

// 03 — Longevity: hourglass with seedling
export const LongevityIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M6 3h12M6 21h12" />
    <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
    <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
    <path d="M12 12v3" />
  </svg>
);

// 04 — Mental Wellness: brain with circuits
export const MentalWellnessIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M9 4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1V4H9z" />
    <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-1V4h1z" />
    <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="11" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

// 05 — Fitness: running figure / dumbbell
export const FitnessIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M4 9v6M8 7v10M16 7v10M20 9v6" />
    <path d="M8 12h8" />
  </svg>
);

// 06 — Women's Health: venus
export const WomensHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="12" cy="9" r="5" />
    <path d="M12 14v7M9 18h6" />
  </svg>
);

// 07 — Men's Health: mars
export const MensHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="10" cy="14" r="5" />
    <path d="M14 10l6-6M15 4h5v5" />
  </svg>
);

// 08 — Beauty & Skincare: face + sparkle
export const BeautyIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M5 11a7 7 0 0 1 14 0v3a7 7 0 0 1-14 0z" />
    <path d="M9 16c1 1 5 1 6 0" />
    <path d="M17 5l.7 1.3L19 7l-1.3.7L17 9l-.7-1.3L15 7l1.3-.7z" />
  </svg>
);

// 09 — Nutrition: apple
export const NutritionIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M12 7c-1-2-3-3-5-2-2 1-2 5 0 9 1 2 3 4 5 4s4-2 5-4c2-4 2-8 0-9-2-1-4 0-5 2z" />
    <path d="M12 7c0-2 1-3 2-3" />
  </svg>
);

// 10 — Sleep: moon + zzz
export const SleepIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M16 4a8 8 0 1 0 4 12 6 6 0 0 1-4-12z" />
  </svg>
);

// 11 — Environmental: leaf + droplet
export const EnvironmentalIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
    <path d="M5 19c4 0 7-3 9-7" />
  </svg>
);

// 12 — Family Health: parent + child
export const FamilyHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="8" cy="6" r="2" />
    <path d="M4 14a4 4 0 0 1 8 0v4H4z" />
    <circle cx="17" cy="9" r="1.6" />
    <path d="M14 16a3 3 0 0 1 6 0v2h-6z" />
  </svg>
);

// 13 — Preventive Medicine: stethoscope + check
export const PreventiveIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M5 3v6a4 4 0 0 0 8 0V3" />
    <path d="M9 13v3a4 4 0 0 0 8 0v-2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

// 14 — Biohacking: DNA helix
export const BiohackingIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
    <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
    <path d="M9 7h6M9 17h6" />
  </svg>
);

// 15 — Senior Care: walking cane figure
export const SeniorCareIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="11" cy="4" r="2" />
    <path d="M11 6v8l-3 7" />
    <path d="M11 10l4 3" />
    <path d="M16 8a2 2 0 1 1 0 4v9" />
  </svg>
);

// 16 — Eye Health: eye
export const EyeHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// 17 — Digital Therapeutics: phone + heart
export const DigitalTherapeuticsIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="M9 18h6" />
    <path d="M12 11s-2-1.2-2-2.6c0-.9.7-1.4 1.4-1.4.4 0 .8.2.6.8.2-.6.6-.8 1-.8.7 0 1.4.5 1.4 1.4 0 1.4-2.4 2.6-2.4 2.6z" />
  </svg>
);

// 18 — Sexual Longevity: infinity + heart
export const SexualLongevityIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <path d="M5 12c0-2.5 2-4 4-4s3 1.5 3 4-1 4-3 4-4-1.5-4-4z" />
    <path d="M19 12c0-2.5-2-4-4-4s-3 1.5-3 4 1 4 3 4 4-1.5 4-4z" />
  </svg>
);

// 19 — Men's Sexual Health: mars + pulse
export const MensSexualHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="10" cy="14" r="4.5" />
    <path d="M14.5 9.5 20 4M15 4h5v5" />
    <path d="M6 14h2l1-2 2 4 1-2h2" />
  </svg>
);

// 20 — Women's Sexual Health: venus + pulse
export const WomensSexualHealthIcon = ({ className = "", style }: IconProps) => (
  <svg {...common} className={className} style={style}>
    <circle cx="12" cy="9" r="4.5" />
    <path d="M12 13.5V21M9 18h6" />
    <path d="M5 9h2l1-2 1.5 4" opacity="0.7" />
  </svg>
);

export const bioMathCategoryIconMap = {
  criticalHealth: CriticalHealthIcon,
  everydayWellness: EverydayWellnessIcon,
  longevity: LongevityIcon,
  mentalWellness: MentalWellnessIcon,
  fitness: FitnessIcon,
  womensHealth: WomensHealthIcon,
  mensHealth: MensHealthIcon,
  beauty: BeautyIcon,
  nutrition: NutritionIcon,
  sleep: SleepIcon,
  environmentalHealth: EnvironmentalIcon,
  familyHealth: FamilyHealthIcon,
  preventive: PreventiveIcon,
  biohacking: BiohackingIcon,
  seniorCare: SeniorCareIcon,
  eyeHealth: EyeHealthIcon,
  digitalTherapeutics: DigitalTherapeuticsIcon,
  sexualLongevity: SexualLongevityIcon,
  mensSexualHealth: MensSexualHealthIcon,
  womensSexualHealth: WomensSexualHealthIcon,
} as const;

export type BioMathCategoryKey = keyof typeof bioMathCategoryIconMap;
