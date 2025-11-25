-- Create content_blocks table
CREATE TABLE public.content_blocks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  section TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL DEFAULT '',
  min_role_to_edit TEXT NOT NULL DEFAULT 'EDITOR',
  is_locked BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by_user_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;

-- Anyone can view content blocks
CREATE POLICY "Anyone can view content blocks"
ON public.content_blocks
FOR SELECT
USING (true);

-- Editors can update non-locked blocks where minRoleToEdit is EDITOR
CREATE POLICY "Editors can update EDITOR-level blocks"
ON public.content_blocks
FOR UPDATE
USING (
  has_role_level(auth.uid(), 'EDITOR'::app_role) 
  AND min_role_to_edit = 'EDITOR' 
  AND is_locked = false
)
WITH CHECK (
  has_role_level(auth.uid(), 'EDITOR'::app_role) 
  AND min_role_to_edit = 'EDITOR' 
  AND is_locked = false
);

-- Admins can update EDITOR or ADMIN-level non-locked blocks
CREATE POLICY "Admins can update ADMIN-level blocks"
ON public.content_blocks
FOR UPDATE
USING (
  has_role_level(auth.uid(), 'ADMIN'::app_role) 
  AND min_role_to_edit IN ('EDITOR', 'ADMIN')
  AND is_locked = false
)
WITH CHECK (
  has_role_level(auth.uid(), 'ADMIN'::app_role) 
  AND min_role_to_edit IN ('EDITOR', 'ADMIN')
  AND is_locked = false
);

-- Super admins can update all blocks including locked ones
CREATE POLICY "Super admins can update all blocks"
ON public.content_blocks
FOR UPDATE
USING (has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_content_blocks_updated_at
BEFORE UPDATE ON public.content_blocks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed initial content blocks

-- About section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('about.story', 'about', 'About Us — Our Story', 'Main narrative text for the About Us page.', 
'Digital Invest Inc. is a private investment and development company focused on building real-world platforms across healthcare, agriculture, and technology sectors. Founded by Michael Kofman, a serial entrepreneur with over 20 years of experience in software development, computational biology, and business operations, Digital Invest Inc. develops and operates a portfolio of five proprietary projects: BioMath Life Platform (precision medicine), TerraAero (drone solutions), BioMath Core (mathematical and computational biology), DishCore (personal nutrition), and Digital Invest Inc. investment services.

We are not a public crowdfunding platform. We work individually with qualified investors who understand early-stage risk and are aligned with our long-term, infrastructure-focused vision.', 'EDITOR', false),

('about.recognition', 'about', 'About Us — Recognition', 'Awards and media recognitions.', 
'Digital Invest Inc. and its portfolio projects have been recognized by leading industry publications including Healthcare Tech Outlook and AgTech Innovation Journal for pioneering work in precision medicine, agricultural technology, and AI-driven platforms.', 'EDITOR', false),

('about.mission', 'about', 'About Us — Mission', 'Company mission statement.', 
'Our mission is to build enduring platforms that solve real problems in health, food, and infrastructure using advanced mathematics, AI, and disciplined engineering.', 'EDITOR', false),

('about.vision', 'about', 'About Us — Vision', 'Company vision statement.', 
'We envision a future where intelligent systems enable personalized healthcare, efficient agriculture, and resilient infrastructure—benefiting individuals, communities, and the environment.', 'EDITOR', false),

('about.commitment', 'about', 'About Us — Commitment', 'Company commitment to stakeholders.', 
'We are committed to transparency, ethical operation, and long-term value creation for investors, partners, and society.', 'EDITOR', false);

-- Compliance section (ADMIN only, locked)
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('compliance.philosophy', 'compliance', 'Compliance Philosophy', 'Our approach to regulatory compliance.', 
'Digital Invest Inc. operates with a commitment to transparency, integrity, and adherence to applicable laws and regulations. We recognize that our projects span multiple industries—healthcare, agriculture, food technology, and digital platforms—each with unique compliance requirements.

Our compliance philosophy is built on proactive engagement with regulatory frameworks, ethical operation, and ongoing risk assessment. We work closely with legal and regulatory advisors to ensure our operations meet or exceed industry standards.', 'ADMIN', true),

('compliance.notPublicOffering', 'compliance', 'Not a Public Offering', 'Clarification that this is not a public crowdfunding site.', 
'This website is informational only. It is **not** a public crowdfunding platform, a public offer to sell securities, or an invitation to invest without proper due diligence and legal documentation.

Any participation in Digital Invest Inc. projects is discussed individually with qualified investors and requires separate legal agreements, disclosures, and compliance with applicable securities laws. No investment commitments are made or accepted through this website.', 'ADMIN', true),

('compliance.kycAml', 'compliance', 'KYC, AML & Eligibility', 'Know Your Customer and Anti-Money Laundering policies.', 
'Digital Invest Inc. follows Know Your Customer (KYC) and Anti-Money Laundering (AML) best practices for all investor relationships. Prospective participants may be required to provide:

- Government-issued identification
- Proof of address
- Source of funds documentation
- Accredited investor verification (where applicable)

We reserve the right to decline participation from individuals or entities that do not meet our eligibility criteria or fail to complete required verification processes.', 'ADMIN', true),

('compliance.dataProtection', 'compliance', 'Data Protection & Privacy', 'Data protection and privacy policies.', 
'We take data protection seriously and comply with applicable privacy regulations including GDPR, CCPA, and HIPAA (for healthcare-related projects). All personal information submitted through this website or collected during investor onboarding is:

- Stored securely using industry-standard encryption
- Processed only for legitimate business purposes
- Never sold or shared with unauthorized third parties
- Subject to our Privacy Policy (available in the footer)

For questions about data protection, contact: privacy@digitalinvest.com', 'ADMIN', true);

-- Risk section (ADMIN only, locked)
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('risk.generalStatement', 'risk', 'General Risk Statement', 'Overall investment risk disclosure.', 
'Participation in any Digital Invest Inc. project involves significant risk, including the potential loss of your entire investment. These are early-stage ventures in complex, evolving industries. There are no guarantees of success, profitability, or return on investment.

Before expressing interest or committing capital, consult with independent legal, financial, and tax advisors. Only invest capital that you can afford to lose entirely.', 'ADMIN', true),

('risk.marketAndSector', 'risk', 'Market and Sector Risks', 'Risks related to markets and industries.', 
'Our projects operate in healthcare, agriculture, food technology, and digital infrastructure—sectors that are subject to:

- Rapidly changing market conditions
- Evolving consumer preferences
- Competitive pressures from established and emerging players
- Economic downturns and macroeconomic volatility

Market acceptance of our platforms is not guaranteed.', 'ADMIN', true),

('risk.regulatory', 'risk', 'Regulatory Risks', 'Risks related to regulation and compliance.', 
'Healthcare and food technology projects are subject to extensive regulation by agencies such as the FDA, USDA, and international equivalents. Changes in regulatory requirements, delays in approvals, or failure to achieve compliance could materially harm project viability.

Agricultural drone operations are subject to FAA regulations and local airspace restrictions. Regulatory changes could limit operational scope or increase costs.', 'ADMIN', true),

('risk.operational', 'risk', 'Operational Risks', 'Risks related to operations and execution.', 
'Successful execution depends on our ability to:

- Attract and retain skilled personnel
- Manage complex technology development
- Scale operations efficiently
- Maintain operational infrastructure
- Respond to unforeseen technical or business challenges

Failure in any of these areas could delay milestones or result in project failure.', 'ADMIN', true),

('risk.technology', 'risk', 'Technology Risks', 'Risks related to technology and development.', 
'Our platforms rely on advanced AI, mathematical modeling, and software systems. Technology risks include:

- Software bugs or security vulnerabilities
- Data integrity issues
- Dependence on third-party APIs and cloud services
- Rapid technological obsolescence
- Cybersecurity threats

A major technical failure could disrupt operations and damage reputation.', 'ADMIN', true),

('risk.noGuarantees', 'risk', 'No Guarantees', 'Disclaimer about lack of guarantees.', 
'There are **no guarantees** of:

- Return on investment
- Project profitability
- Liquidity or exit opportunities
- Dividends or distributions
- Recovery of principal

This is a high-risk, long-term endeavor suitable only for individuals who understand and accept these risks.', 'ADMIN', true);

-- Security section (ADMIN only, locked)
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('security.overview', 'security', 'Security Overview', 'Overview of security approach.', 
'Security and data protection are foundational to Digital Invest Inc. operations. We implement industry-standard practices across all platforms to protect sensitive data, maintain system integrity, and prevent unauthorized access.', 'ADMIN', true),

('security.principles', 'security', 'Security Principles', 'Core security principles.', 
'Our security framework is built on:

- **Defense in depth**: Multiple layers of security controls
- **Least privilege**: Access restricted to minimum necessary levels
- **Encryption**: Data encrypted at rest and in transit
- **Regular audits**: Continuous monitoring and vulnerability assessments
- **Incident response**: Defined protocols for security events', 'ADMIN', true),

('security.dataProtection', 'security', 'Data Protection', 'Data protection measures.', 
'All user data, medical records, and investor information is:

- Encrypted using AES-256 or equivalent
- Stored in secure, access-controlled databases
- Backed up regularly with disaster recovery protocols
- Subject to strict access controls and audit logging
- Compliant with HIPAA, GDPR, and other applicable regulations', 'ADMIN', true),

('security.aiUse', 'security', 'AI and Algorithmic Security', 'Security considerations for AI systems.', 
'Our AI and machine learning systems are designed with security in mind:

- Model training on anonymized datasets
- Regular validation against bias and data leakage
- Secure API access with rate limiting and authentication
- Monitoring for adversarial attacks and misuse
- Transparency in algorithmic decision-making where appropriate', 'ADMIN', true);

-- Continue with other sections...
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('esg.overview', 'esg', 'ESG Overview', 'Environmental, Social, and Governance overview.', 
'Digital Invest Inc. is committed to responsible business practices across environmental, social, and governance dimensions. While we are not yet subject to formal ESG reporting requirements, we proactively integrate ESG considerations into our operations and project development.', 'EDITOR', false),

('esg.environment', 'esg', 'Environmental Commitment', 'Environmental sustainability efforts.', 
'We prioritize environmental sustainability through:

- Efficient cloud infrastructure with carbon-neutral hosting partners
- Drone technology that reduces agricultural chemical use
- Digital platforms that minimize physical waste
- Support for precision medicine that optimizes resource use', 'EDITOR', false),

('esg.social', 'esg', 'Social Responsibility', 'Social impact and responsibility.', 
'Our social commitments include:

- Developing platforms that improve health outcomes and food security
- Creating employment opportunities in technology and operations
- Promoting diversity and inclusion in our team and partnerships
- Engaging ethically with customers, investors, and communities', 'EDITOR', false),

('esg.governance', 'esg', 'Governance Standards', 'Governance structure and standards.', 
'We maintain strong governance through:

- Clear decision-making structures with founder-led accountability
- Transparent communication with stakeholders
- Adherence to legal and regulatory requirements
- Ethical business conduct and conflict-of-interest policies
- Regular review of risk management practices', 'EDITOR', false);

-- Values section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('values.overview', 'values', 'Corporate Values Overview', 'Introduction to company values.', 
'Our values guide every decision we make and every platform we build.', 'EDITOR', false),

('values.list', 'values', 'Corporate Values List', 'List of all corporate values with descriptions.', 
'## Excellence in Execution
We build systems that work. Quality, reliability, and attention to detail are non-negotiable.

## Long-Term Thinking
We prioritize sustainable growth over short-term gains. Our projects are designed to endure and evolve over decades.

## Transparency and Integrity
We operate openly with investors, partners, and regulators. We say what we do and do what we say.

## Innovation with Purpose
We innovate to solve real problems—not for novelty''s sake. Every platform addresses genuine needs.

## Respect for Data and Privacy
We treat personal and medical data with the highest level of security and ethical care.

## Collaborative Growth
We succeed through partnerships, shared knowledge, and mutual respect across teams and stakeholders.', 'EDITOR', false);

-- Governance section (ADMIN only, locked)
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('governance.overview', 'governance', 'Governance Overview', 'Overview of governance structure.', 
'Digital Invest Inc. operates with a clear governance structure designed to ensure accountability, transparency, and effective decision-making across all portfolio projects.', 'ADMIN', true),

('governance.structure', 'governance', 'Governance Structure', 'Core governance elements.', 
'Our governance framework includes:

- **Founder-led oversight**: Michael Kofman provides strategic direction and operational oversight
- **Project autonomy**: Each portfolio project operates with defined goals and accountability
- **Financial controls**: Rigorous budgeting, expense tracking, and regular financial reviews
- **Compliance monitoring**: Ongoing assessment of regulatory and legal requirements', 'ADMIN', true),

('governance.advisory', 'governance', 'Advisory Input', 'Advisory boards and external input.', 
'We consult with external advisors in legal, regulatory, medical, and technical domains to inform strategic decisions and ensure best practices. While we do not currently have a formal board of directors, we plan to establish advisory structures as projects mature.', 'ADMIN', true),

('governance.transparency', 'governance', 'Stakeholder Transparency', 'Transparency with stakeholders.', 
'We provide regular updates to investors and partners on project progress, challenges, and strategic changes. Transparency is a core principle in maintaining trust and long-term relationships.', 'ADMIN', true);

-- Careers section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('careers.hero', 'careers', 'Careers Hero', 'Hero section text for Careers page.', 
'Join us in building platforms that matter. At Digital Invest Inc., we are creating real-world infrastructure across health, agriculture, and technology. If you thrive in a small, mission-driven team where your work has tangible impact, we want to hear from you.', 'EDITOR', false),

('careers.whyJoin', 'careers', 'Why Join Us', 'Reasons to join the company.', 
'## Why Join Digital Invest Inc.?

- **Real impact**: Build platforms used by healthcare providers, farmers, and consumers
- **Autonomy**: Work with minimal bureaucracy in a founder-led environment
- **Learning**: Exposure to multiple industries and cutting-edge technologies
- **Ownership**: Meaningful equity opportunities for early team members
- **Mission**: Contribute to projects that improve health, food security, and sustainability', 'EDITOR', false),

('careers.howWeWork', 'careers', 'How We Work', 'Work culture and environment.', 
'We are a small, remote-friendly team with high standards for quality and execution. We value clear communication, proactive problem-solving, and the ability to work independently. Most team members work across multiple projects, gaining broad experience.', 'EDITOR', false),

('careers.whoWeLookFor', 'careers', 'Who We Look For', 'Ideal candidate profile.', 
'We seek individuals who are:

- **Self-starters**: You take initiative and drive projects to completion
- **Multi-disciplinary**: You''re curious and capable across domains
- **Detail-oriented**: You care about correctness and quality
- **Mission-aligned**: You believe in building infrastructure that lasts
- **Adaptable**: You thrive in dynamic, early-stage environments', 'EDITOR', false),

('careers.howToApply', 'careers', 'How to Apply', 'Application process and contact.', 
'We hire on a rolling basis as projects scale. Current and future openings may include:

- Full-stack engineers (React, TypeScript, Python)
- AI/ML engineers
- Computational biologists
- Drone operations specialists
- Business operations and finance

To apply, send your resume and a brief introduction to: careers@digitalinvest.com', 'EDITOR', false);

-- Press section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('press.hero', 'press', 'Press Center Hero', 'Hero text for Press Center.', 
'Stay informed about Digital Invest Inc. developments, project milestones, and industry insights.', 'EDITOR', false),

('press.releasesIntro', 'press', 'Press Releases Introduction', 'Intro text for press releases section.', 
'The latest news and announcements from Digital Invest Inc. and our portfolio projects.', 'EDITOR', false),

('press.mediaCoverageIntro', 'press', 'Media Coverage Introduction', 'Intro text for media coverage section.', 
'Digital Invest Inc. and its projects have been featured in leading industry publications for innovation in precision medicine, agricultural technology, and AI-driven platforms.', 'EDITOR', false),

('press.contact', 'press', 'Press Contact', 'Press and media contact information.', 
'For press inquiries, interviews, or media kits, please contact:

**Email**: press@digitalinvest.com

We typically respond to media requests within 24-48 hours.', 'EDITOR', false);

-- Media Kit section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('mediaKit.hero', 'mediaKit', 'Media Kit Hero', 'Hero text for Media Kit page.', 
'Brand assets, founder information, and project overviews for media and partners.', 'EDITOR', false),

('mediaKit.brandAssets', 'mediaKit', 'Brand Assets', 'Introduction to brand assets.', 
'Download Digital Invest Inc. logos, brand colors, and visual guidelines for use in media coverage and partnerships.', 'EDITOR', false),

('mediaKit.founderProfile', 'mediaKit', 'Founder Profile', 'About the founder.', 
'**Michael Kofman, Founder & CEO**

Michael Kofman is a serial entrepreneur with over 20 years of experience in software development, computational biology, and business operations. He founded Digital Invest Inc. to build enduring platforms across health, agriculture, and technology.

Prior experience includes founding multiple technology companies and leading complex AI and data infrastructure projects.', 'EDITOR', false),

('mediaKit.projectsOverview', 'mediaKit', 'Projects Overview', 'Overview of portfolio projects.', 
'Digital Invest Inc. operates five proprietary projects:

1. **BioMath Life Platform**: Precision medicine and personalized genomics
2. **TerraAero**: Agricultural drone solutions
3. **BioMath Core**: Mathematical and computational biology services
4. **DishCore**: Personal nutrition and body-tracking platform
5. **Digital Invest Inc.**: Investment services and portfolio management', 'EDITOR', false),

('mediaKit.downloadsIntro', 'mediaKit', 'Downloads Introduction', 'Intro to downloadable materials.', 'Explore our investor briefs, project overviews, and other downloadable materials.', 'EDITOR', false);

-- Investor Documents section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('investorDocs.hero', 'investorDocuments', 'Investor Documents Hero', 'Hero text for Investor Documents page.', 
'Download comprehensive investor briefs for each Digital Invest Inc. portfolio project.', 'EDITOR', false),

('investorDocs.description', 'investorDocuments', 'Investor Documents Description', 'Description of available documents.', 
'Each brief includes project overview, investment highlights, revenue model, roadmap, and risk summary. These documents are informational only and do not constitute investment advice or an offer to sell securities.', 'EDITOR', false),

('investorDocs.disclaimer', 'investorDocuments', 'Investor Documents Disclaimer', 'Legal disclaimer for documents.', 
'**Important**: These documents are for informational purposes only. They do not constitute a public offering, prospectus, or investment recommendation. Any participation in Digital Invest Inc. projects requires separate legal agreements and compliance with applicable securities laws.', 'ADMIN', true);

-- Investor Handbook section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('investorHandbook.hero', 'investorHandbook', 'Investor Handbook Hero', 'Hero text for Investor Handbook page.', 
'A comprehensive guide to Digital Invest Inc., our portfolio projects, strategic philosophy, and investor process.', 'EDITOR', false),

('investorHandbook.description', 'investorHandbook', 'Investor Handbook Description', 'Description of the handbook.', 
'The Digital Invest Inc. Investor Handbook is an institutional-grade document covering our entire portfolio, technology infrastructure, governance, ESG commitments, and risk factors. It serves as the primary resource for prospective investors to understand our approach and evaluate opportunities.

Submit your email below to download the complete handbook as a PDF.', 'EDITOR', false);

-- Developer API section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('developerApi.hero', 'developerApi', 'Developer & API Hero', 'Hero text for Developer & API page.', 
'Explore Digital Invest Inc.''s API strategy and future developer platform capabilities.', 'EDITOR', false),

('developerApi.vision', 'developerApi', 'API Vision', 'Vision for API and developer platform.', 
'As our portfolio projects mature, we plan to offer API access to select platform capabilities, enabling partners and developers to integrate our health, agriculture, and food technology infrastructure into their own applications.', 'EDITOR', false),

('developerApi.domains', 'developerApi', 'API Domains', 'Potential API domains and capabilities.', 
'Potential API domains include:

- **BioMath Core**: Genomic analysis, computational biology models
- **TerraAero**: Drone mission planning, field analytics
- **DishCore**: Nutrition data, recipe algorithms
- **BioMath Life**: (Healthcare data is strictly regulated; API access will be limited and compliance-focused)', 'EDITOR', false),

('developerApi.security', 'developerApi', 'API Security & Access', 'Security and access policies.', 
'All APIs will require authentication, rate limiting, and compliance with data protection regulations. Access will be granted on a case-by-case basis with legal agreements governing use.', 'EDITOR', false),

('developerApi.status', 'developerApi', 'Current Status', 'Current status of API program.', 
'Developer APIs are not yet publicly available. If you are interested in partnering or integrating with Digital Invest Inc. platforms, contact: api@digitalinvest.com', 'EDITOR', false);

-- Infrastructure section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('infrastructure.hero', 'infrastructure', 'Infrastructure Hero', 'Hero text for Technology & Infrastructure page.', 
'Built on secure, scalable, and auditable technology designed for real-world operation.', 'EDITOR', false),

('infrastructure.systems', 'infrastructure', 'Systems Approach', 'Description of systems and technology stack.', 
'Digital Invest Inc. platforms are built on modern cloud infrastructure with:

- Microservices architecture for scalability
- Database systems optimized for performance and security
- AI/ML pipelines for data analysis and decision support
- Continuous integration and deployment practices', 'EDITOR', false),

('infrastructure.integrity', 'infrastructure', 'Data & Integrity Layer', 'Data integrity and security mechanisms.', 
'All critical data is:

- Version-controlled and auditable
- Backed by cryptographic checksums
- Subject to regular integrity audits
- Stored with redundancy and disaster recovery protocols', 'EDITOR', false),

('infrastructure.future', 'infrastructure', 'Future Architecture', 'Future infrastructure plans.', 
'We are exploring advanced integrity mechanisms including:

- Immutable audit logs
- Distributed ledger technology for supply chain tracking (TerraAero, DishCore)
- Zero-knowledge proofs for privacy-preserving medical data (BioMath Life)

**Note**: We are NOT tokenizing any assets, offering cryptocurrency, or launching an ICO. Any cryptographic technology is used purely for data integrity and security purposes.', 'EDITOR', false);

-- Internal Documents section
INSERT INTO public.content_blocks (key, section, title, description, content, min_role_to_edit, is_locked) VALUES
('internalDocs.hero', 'internalDocs', 'Internal Documents Hero', 'Hero text for Internal Documents page.', 
'Secure portal for restricted company documents. Access is limited to authorized personnel and qualified investors.', 'ADMIN', true),

('internalDocs.description', 'internalDocs', 'Internal Documents Description', 'Description of internal documents.', 
'This section contains sensitive operational, financial, and strategic documents including:

- Detailed financial models and forecasts
- Legal agreements and contracts
- Internal memos and strategic plans
- Regulatory filings and compliance documentation

Access requires explicit authorization. To request access, contact: access@digitalinvest.com', 'ADMIN', true);