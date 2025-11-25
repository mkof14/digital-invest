/**
 * Compliance Language Rules for Digital Invest Inc.
 * 
 * This file defines forbidden and cautionary phrases to maintain legally safe,
 * conservative wording across all public-facing content.
 */

export const forbiddenPhrases: string[] = [
  "crowdfunding",
  "Crowdfunding",
  "public offering",
  "Public offering",
  "IPO-style crowdfunding",
  "ICO",
  "token sale",
  "Token sale",
  "guaranteed returns",
  "guaranteed return",
  "high guaranteed yield",
  "risk-free",
  "no risk",
  "secure ROI",
  "fixed income product",
  "invest now",
  "act now to invest",
  "limited-time investment offer",
  "exclusive investment product",
  "get rich",
  "make you rich",
  "earn returns",
  "secure high-yield returns"
];

export const cautionaryPhrases: Array<{ phrase: string; recommendedReplacement: string }> = [
  {
    phrase: "invest with us",
    recommendedReplacement: "explore opportunities with us"
  },
  {
    phrase: "investment offer",
    recommendedReplacement: "private opportunity"
  },
  {
    phrase: "investment product",
    recommendedReplacement: "private project opportunity"
  },
  {
    phrase: "invest now",
    recommendedReplacement: "request more information"
  },
  {
    phrase: "earn returns",
    recommendedReplacement: "participate in long-term projects"
  },
  {
    phrase: "start investing",
    recommendedReplacement: "explore opportunities"
  },
  {
    phrase: "invest online",
    recommendedReplacement: "submit interest online"
  },
  {
    phrase: "investment commitment",
    recommendedReplacement: "expression of interest"
  },
  {
    phrase: "secure your investment",
    recommendedReplacement: "submit your interest"
  },
  {
    phrase: "buy shares",
    recommendedReplacement: "explore participation"
  }
];

/**
 * Check if text contains forbidden phrases
 * This can be used for dev-time warnings
 */
export const checkForForbiddenPhrases = (text: string): string[] => {
  const found: string[] = [];
  forbiddenPhrases.forEach(phrase => {
    if (text.toLowerCase().includes(phrase.toLowerCase())) {
      found.push(phrase);
    }
  });
  return found;
};

/**
 * Compliance principles for reference
 */
export const compliancePrinciples = {
  positioning: [
    "Private, by invitation only",
    "Informational purposes only",
    "Subject to due diligence and eligibility",
    "Offline process through proper legal channels",
    "Not a public offering or solicitation"
  ],
  prohibitions: [
    "No crowdfunding language",
    "No public offering claims",
    "No guaranteed returns or ROI promises",
    "No direct online investment processing",
    "No financial, legal, or tax advice"
  ],
  requirements: [
    "Clear non-binding disclaimers on forms",
    "Conservative, descriptive language only",
    "Emphasis on private, individual discussions",
    "Legal status determined by formal agreements, not website",
    "Neutral terminology for all financial references"
  ]
};
