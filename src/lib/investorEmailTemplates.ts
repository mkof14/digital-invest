interface Lead {
  name: string;
  email: string;
  amount_range?: string;
  country?: string;
}

interface Project {
  title: string;
  slug: string;
  category?: string;
}

export interface EmailTemplate {
  subject: string;
  body: string;
}

export const getIntroEmailTemplate = (lead: Lead, project: Project | null): EmailTemplate => {
  const projectName = project ? project.title : 'Digital Invest portfolio';
  const interestText = project 
    ? `your interest in ${project.title} and the Digital Invest portfolio`
    : 'your interest in Digital Invest and our portfolio of projects';

  const subject = `Thank you for your interest in ${projectName}`;

  const body = `Hi ${lead.name},

Thank you for ${interestText}.

This is a private, offline process. The website does not accept investments directly, so the next step is simply to review a bit more information together and see if there is a mutual fit.

We can share an investor brief, walk through the roadmap, and answer your questions.

Please let me know:
- Where you are based
- Whether you have experience with HealthTech, AgroTech, FoodTech, or similar sectors
- Your usual time window for a short call (timezone and preferred hours)

Best regards,
Digital Invest`;

  return { subject, body };
};

export const getFollowUpWithBriefTemplate = (lead: Lead, project: Project | null): EmailTemplate => {
  const projectName = project ? project.title : 'our portfolio';
  const projectText = project 
    ? `the investor brief for ${project.title}`
    : 'the portfolio overview and investor briefs for our projects';
  
  const subject = `Investor brief for ${projectName}`;

  const body = `Hi ${lead.name},

As discussed, please find ${projectText} attached or available for download. It provides a clear overview of the project, the roadmap, and the main risk factors.

This document is for informational purposes only and is not a public offering or investment advice. Any potential participation would be discussed privately and handled offline.

After you've had a chance to review it, I suggest we schedule a short call to:
- Clarify any questions
- Walk through the milestones
- Discuss whether this project fits your interests and risk profile

Let me know which days and times work best for you.

Best regards,
Digital Invest`;

  return { subject, body };
};

export const getCheckInTemplate = (lead: Lead, project: Project | null): EmailTemplate => {
  const projectName = project ? project.title : 'Digital Invest portfolio';
  const projectText = project ? project.title : 'our portfolio';
  
  const subject = `Checking in on ${projectName}`;

  const body = `Hi ${lead.name},

I wanted to briefly check in regarding ${projectText}. You had expressed interest earlier, and I shared more information.

If you are still considering this opportunity, I am happy to:
- Answer any additional questions
- Walk through the updated status
- Explain how participation works in practice

If your priorities have changed, that is absolutely fine — just let me know, and we will update our notes.

Best regards,
Digital Invest`;

  return { subject, body };
};

export const emailTemplateTypes = {
  INTRO: 'intro',
  FOLLOWUP: 'followup',
  CHECKIN: 'checkin',
} as const;

export type EmailTemplateType = typeof emailTemplateTypes[keyof typeof emailTemplateTypes];
