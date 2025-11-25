import { emailBrandConfig } from './emailBrandConfig';

export type EmailTemplateId =
  | "investor_intro_portfolio"
  | "investor_intro_project"
  | "investor_followup_brief"
  | "investor_meeting_schedule"
  | "investor_post_call_recap"
  | "investor_checkin"
  | "investor_not_now"
  | "media_reply"
  | "partner_collaboration"
  | "careers_acknowledgment";

export interface TemplateParams {
  recipientName?: string;
  projectName?: string;
  senderName?: string;
  meetingLink?: string;
  customNotes?: string;
}

export interface EmailTemplateDefinition {
  id: EmailTemplateId;
  label: string;
  description: string;
  subject: (params: TemplateParams) => string;
  htmlBody: (params: TemplateParams) => string;
  textBody: (params: TemplateParams) => string;
}

const createHtmlWrapper = (content: string): string => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#F9FAFB; padding:24px; margin:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; margin:0 auto; background:#FFFFFF; border-radius:12px; padding:24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <tr>
        <td style="text-align:left; padding-bottom:16px; border-bottom:1px solid #E5E7EB;">
          <img src="${emailBrandConfig.companyWebsite}${emailBrandConfig.logoUrl}" alt="${emailBrandConfig.companyName}" style="height:32px; vertical-align:middle;" />
          <div style="font-size:12px; color:#6B7280; margin-top:4px;">${emailBrandConfig.companyName}</div>
        </td>
      </tr>
      <tr>
        <td style="padding-top:24px; color:#111827; font-size:14px; line-height:1.6;">
          ${content}
        </td>
      </tr>
      <tr>
        <td style="padding-top:24px; border-top:1px solid #E5E7EB; font-size:11px; color:#6B7280; line-height:1.5;">
          ${emailBrandConfig.footerText}<br/>
          <a href="${emailBrandConfig.companyWebsite}" style="color:${emailBrandConfig.accentColor}; text-decoration:none;">${emailBrandConfig.companyWebsite}</a><br/><br/>
          <span style="font-size:10px; color:#9CA3AF;">${emailBrandConfig.legalDisclaimer}</span>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
};

export const allTemplates: EmailTemplateDefinition[] = [
  {
    id: "investor_intro_portfolio",
    label: "Investor — Intro (Portfolio)",
    description: "First reply to a new investor interested in Digital Invest overall",
    subject: () => "Thank you for your interest in Digital Invest",
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your interest in Digital Invest and our portfolio of projects across HealthTech, AgroTech, FoodTech, and AI-driven infrastructure.</p>
      
      <p>This is a private, offline process. The website does not accept investments directly. The next step is simply to share more information together and see if there is a mutual fit.</p>
      
      <p>We can provide an overview of the portfolio, investor briefs for specific projects, and walk through the roadmap and risk profile.</p>
      
      <p><strong>To better understand how to proceed, it would be helpful to know:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Where you are based</li>
        <li>Whether you have experience with HealthTech, AgroTech, FoodTech, or related sectors</li>
        <li>Your usual time window for a short call (including timezone)</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your interest in Digital Invest and our portfolio of projects across HealthTech, AgroTech, FoodTech, and AI-driven infrastructure.

This is a private, offline process. The website does not accept investments directly. The next step is simply to share more information together and see if there is a mutual fit.

We can provide an overview of the portfolio, investor briefs for specific projects, and walk through the roadmap and risk profile.

To better understand how to proceed, it would be helpful to know:
- Where you are based
- Whether you have experience with HealthTech, AgroTech, FoodTech, or related sectors
- Your usual time window for a short call (including timezone)

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_intro_project",
    label: "Investor — Intro (Specific Project)",
    description: "First reply to an investor interested in a specific project",
    subject: (params) => `Thank you for your interest in ${params.projectName || '[Project]'}`,
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your interest in <strong>${params.projectName || '[Project Name]'}</strong>, one of our portfolio projects at Digital Invest Inc.</p>
      
      <p>This is a private, offline process. The website does not accept investments directly. The next step is simply to share more information together and see if there is a mutual fit.</p>
      
      <p>We can provide the investor brief for ${params.projectName || 'this project'}, walk through the business model, roadmap, and risk profile, and answer any questions you may have.</p>
      
      <p><strong>To better understand how to proceed, it would be helpful to know:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Where you are based</li>
        <li>Your experience with this sector</li>
        <li>Your usual time window for a short call (including timezone)</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your interest in ${params.projectName || '[Project Name]'}, one of our portfolio projects at Digital Invest Inc.

This is a private, offline process. The website does not accept investments directly. The next step is simply to share more information together and see if there is a mutual fit.

We can provide the investor brief for ${params.projectName || 'this project'}, walk through the business model, roadmap, and risk profile, and answer any questions you may have.

To better understand how to proceed, it would be helpful to know:
- Where you are based
- Your experience with this sector
- Your usual time window for a short call (including timezone)

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_followup_brief",
    label: "Investor — Follow-up with Brief",
    description: "Send after sharing a PDF brief or link",
    subject: (params) => `Investor brief for ${params.projectName || '[Project]'}`,
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>As discussed, I'm sharing the investor brief for <strong>${params.projectName || '[Project Name]'}</strong>.</p>
      
      <p>The brief is available for download via our website or can be sent directly. Please note that this document is <strong>informational only and does not constitute a public offering or investment advice</strong>.</p>
      
      <p>The brief covers:</p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Project overview and market timing</li>
        <li>Investment highlights</li>
        <li>Revenue generation model</li>
        <li>Roadmap and timeline</li>
        <li>Risk factors</li>
      </ul>
      
      <p>Once you've had a chance to review, I'd be happy to schedule a call to discuss any questions or clarifications. ${params.meetingLink ? `You can schedule directly here: <a href="${params.meetingLink}" style="color:${emailBrandConfig.accentColor}; text-decoration:none;">${params.meetingLink}</a>` : 'Please let me know what times work for you.'}</p>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

As discussed, I'm sharing the investor brief for ${params.projectName || '[Project Name]'}.

The brief is available for download via our website or can be sent directly. Please note that this document is informational only and does not constitute a public offering or investment advice.

The brief covers:
- Project overview and market timing
- Investment highlights
- Revenue generation model
- Roadmap and timeline
- Risk factors

Once you've had a chance to review, I'd be happy to schedule a call to discuss any questions or clarifications. ${params.meetingLink ? `You can schedule directly here: ${params.meetingLink}` : 'Please let me know what times work for you.'}

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_meeting_schedule",
    label: "Investor — Meeting Scheduling",
    description: "Propose a call or meeting",
    subject: (params) => `Scheduling a call to discuss ${params.projectName || 'Digital Invest'}`,
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your continued interest in ${params.projectName ? `<strong>${params.projectName}</strong>` : 'Digital Invest'}. I'd like to schedule a call to walk through the details and answer any questions you may have.</p>
      
      ${params.meetingLink ? `
        <p><strong>Schedule your preferred time:</strong><br/>
        <a href="${params.meetingLink}" style="display:inline-block; margin-top:8px; padding:10px 20px; background:${emailBrandConfig.accentColor}; color:#FFFFFF; text-decoration:none; border-radius:6px; font-weight:500;">Schedule Call</a></p>
      ` : `
        <p><strong>Proposed time windows (please include your timezone):</strong></p>
        <ul style="margin:12px 0; padding-left:20px;">
          <li>Option 1: [Insert time]</li>
          <li>Option 2: [Insert time]</li>
          <li>Option 3: [Insert time]</li>
        </ul>
        <p>Please let me know which works best for you, or suggest an alternative.</p>
      `}
      
      <p>The call typically takes 30-45 minutes and covers:</p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Detailed project overview</li>
        <li>Business model and revenue streams</li>
        <li>Timeline and milestones</li>
        <li>Risk factors and due diligence</li>
        <li>Next steps (if mutually interested)</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p style="margin-top:24px;">Looking forward to speaking with you.</p>
      
      <p>Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your continued interest in ${params.projectName || 'Digital Invest'}. I'd like to schedule a call to walk through the details and answer any questions you may have.

${params.meetingLink ? `
Schedule your preferred time: ${params.meetingLink}
` : `
Proposed time windows (please include your timezone):
- Option 1: [Insert time]
- Option 2: [Insert time]
- Option 3: [Insert time]

Please let me know which works best for you, or suggest an alternative.
`}

The call typically takes 30-45 minutes and covers:
- Detailed project overview
- Business model and revenue streams
- Timeline and milestones
- Risk factors and due diligence
- Next steps (if mutually interested)

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Looking forward to speaking with you.

Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_post_call_recap",
    label: "Investor — Post-call Recap",
    description: "Follow-up after a discussion call",
    subject: (params) => `Thank you for the conversation about ${params.projectName || 'Digital Invest'}`,
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for taking the time to speak today about ${params.projectName ? `<strong>${params.projectName}</strong>` : 'our portfolio'}.</p>
      
      <p><strong>Summary of key points discussed:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>${params.customNotes || '[Point 1]'}</li>
        <li>[Point 2]</li>
        <li>[Point 3]</li>
      </ul>
      
      <p><strong>Next steps:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>On our side: [Action item]</li>
        <li>On your side: [Action item if applicable]</li>
      </ul>
      
      <p>As discussed, any potential participation will be handled privately and offline through appropriate legal documentation. There is no obligation or commitment at this stage—this is simply an informational exchange.</p>
      
      <p>Please feel free to reach out with any additional questions or if you'd like to schedule a follow-up call.</p>
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for taking the time to speak today about ${params.projectName || 'our portfolio'}.

Summary of key points discussed:
- ${params.customNotes || '[Point 1]'}
- [Point 2]
- [Point 3]

Next steps:
- On our side: [Action item]
- On your side: [Action item if applicable]

As discussed, any potential participation will be handled privately and offline through appropriate legal documentation. There is no obligation or commitment at this stage—this is simply an informational exchange.

Please feel free to reach out with any additional questions or if you'd like to schedule a follow-up call.

Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_checkin",
    label: "Investor — Check-in",
    description: "Gentle follow-up to see if still interested",
    subject: (params) => `Checking in on ${params.projectName || 'Digital Invest'}`,
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>I wanted to check in regarding your interest in ${params.projectName ? `<strong>${params.projectName}</strong>` : 'Digital Invest'}.</p>
      
      <p>We understand that priorities and timelines can shift, and there's no pressure whatsoever. If you're still considering this opportunity, I'm happy to answer any questions or provide additional information.</p>
      
      <p>If now is not the right time, that's completely fine—we appreciate the time you've already invested in learning about ${params.projectName || 'our portfolio'}, and we'll keep your information on file in case interests align in the future.</p>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p>Please feel free to let me know either way.</p>
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

I wanted to check in regarding your interest in ${params.projectName || 'Digital Invest'}.

We understand that priorities and timelines can shift, and there's no pressure whatsoever. If you're still considering this opportunity, I'm happy to answer any questions or provide additional information.

If now is not the right time, that's completely fine—we appreciate the time you've already invested in learning about ${params.projectName || 'our portfolio'}, and we'll keep your information on file in case interests align in the future.

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Please feel free to let me know either way.

Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "investor_not_now",
    label: "Investor — Not the Right Time",
    description: "Polite decline or 'not now' message",
    subject: () => "Thank you from Digital Invest",
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your interest in ${params.projectName ? `<strong>${params.projectName}</strong> and` : ''} Digital Invest Inc.</p>
      
      <p>Based on the current focus and constraints, we will not proceed further at this stage. We genuinely appreciate the time you took to learn about our work and engage in this conversation.</p>
      
      <p>We will keep your information on record in case priorities align in the future, and we'd be happy to reconnect if circumstances change on either side.</p>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Digital Invest Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your interest in ${params.projectName ? `${params.projectName} and ` : ''}Digital Invest Inc.

Based on the current focus and constraints, we will not proceed further at this stage. We genuinely appreciate the time you took to learn about our work and engage in this conversation.

We will keep your information on record in case priorities align in the future, and we'd be happy to reconnect if circumstances change on either side.

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Best regards,
${params.senderName || 'Digital Invest Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "media_reply",
    label: "Media — Reply",
    description: "Response to media inquiries",
    subject: () => "Re: Media inquiry — Digital Invest",
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for reaching out to Digital Invest Inc.</p>
      
      <p>We are available to provide information, quotes, or an interview regarding Digital Invest and our portfolio platforms:</p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li><strong>BioMath Core:</strong> Mathematical modeling and computational biology</li>
        <li><strong>BioMath Life Platform:</strong> Precision medicine and genomic analytics</li>
        <li><strong>TerraAero:</strong> Agricultural automation and drone systems</li>
        <li><strong>DishCore:</strong> Intelligent food production and nutrition tracking</li>
        <li><strong>Digital Invest Platform:</strong> Portfolio management and shared AI infrastructure</li>
      </ul>
      
      <p>Please share:</p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Your publication or media outlet</li>
        <li>Preferred format (written Q&A, phone interview, video, etc.)</li>
        <li>Desired deadline or publication timeline</li>
        <li>Specific topics or angles of interest</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p>We look forward to collaborating with you.</p>
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Media Relations Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for reaching out to Digital Invest Inc.

We are available to provide information, quotes, or an interview regarding Digital Invest and our portfolio platforms:
- BioMath Core: Mathematical modeling and computational biology
- BioMath Life Platform: Precision medicine and genomic analytics
- TerraAero: Agricultural automation and drone systems
- DishCore: Intelligent food production and nutrition tracking
- Digital Invest Platform: Portfolio management and shared AI infrastructure

Please share:
- Your publication or media outlet
- Preferred format (written Q&A, phone interview, video, etc.)
- Desired deadline or publication timeline
- Specific topics or angles of interest

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
We look forward to collaborating with you.

Best regards,
${params.senderName || 'Media Relations Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "partner_collaboration",
    label: "Partner — Collaboration",
    description: "Response to partnership inquiries",
    subject: () => "Exploring collaboration with Digital Invest",
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your interest in exploring collaboration opportunities with Digital Invest Inc.</p>
      
      <p>Our portfolio spans multiple sectors—HealthTech, AgroTech, FoodTech, and AI infrastructure—and we're always interested in strategic partnerships that can accelerate deployment, validation, or scaling of our platforms.</p>
      
      <p><strong>Potential collaboration areas include:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Clinical partnerships for health analytics validation</li>
        <li>Agricultural cooperatives for drone system deployments</li>
        <li>Food distributors and manufacturing partners</li>
        <li>Technology integrations and data exchange</li>
        <li>Research collaborations and co-development</li>
      </ul>
      
      <p>To better understand how we might work together, it would be helpful to know:</p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Your organization's focus and operational areas</li>
        <li>Which of our platforms align with your interests</li>
        <li>The type of collaboration you envision</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p>Please feel free to schedule a call to discuss further, or reply with more details about your organization and proposed collaboration.</p>
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Partnerships Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your interest in exploring collaboration opportunities with Digital Invest Inc.

Our portfolio spans multiple sectors—HealthTech, AgroTech, FoodTech, and AI infrastructure—and we're always interested in strategic partnerships that can accelerate deployment, validation, or scaling of our platforms.

Potential collaboration areas include:
- Clinical partnerships for health analytics validation
- Agricultural cooperatives for drone system deployments
- Food distributors and manufacturing partners
- Technology integrations and data exchange
- Research collaborations and co-development

To better understand how we might work together, it would be helpful to know:
- Your organization's focus and operational areas
- Which of our platforms align with your interests
- The type of collaboration you envision

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Please feel free to schedule a call to discuss further, or reply with more details about your organization and proposed collaboration.

Best regards,
${params.senderName || 'Partnerships Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  },
  
  {
    id: "careers_acknowledgment",
    label: "Careers — Application Received",
    description: "Acknowledge receipt of job application",
    subject: () => "Thank you for your interest in joining Digital Invest",
    htmlBody: (params) => createHtmlWrapper(`
      <p>Hi ${params.recipientName || '[Name]'},</p>
      
      <p>Thank you for your interest in joining Digital Invest Inc. We have received your application and resume.</p>
      
      <p>Digital Invest is building transformative technology across HealthTech, AgroTech, FoodTech, and AI-driven infrastructure. We're looking for exceptional engineers, researchers, and operators who want to work on long-term systems that matter.</p>
      
      <p>Our team will review your application carefully. If there is a potential match with our current needs and your background, we will reach out to schedule an initial conversation.</p>
      
      <p><strong>What to expect:</strong></p>
      <ul style="margin:12px 0; padding-left:20px;">
        <li>Review typically takes 1-2 weeks</li>
        <li>If there's a fit, we'll schedule a technical or exploratory call</li>
        <li>Our process is thorough but respectful of your time</li>
      </ul>
      
      ${params.customNotes ? `<p style="margin-top:16px; padding:12px; background:#F3F4F6; border-left:3px solid ${emailBrandConfig.accentColor}; border-radius:4px;">${params.customNotes}</p>` : ''}
      
      <p>Thank you again for considering Digital Invest. We appreciate your interest in contributing to our mission.</p>
      
      <p style="margin-top:24px;">Best regards,<br/><strong>${params.senderName || 'Talent Team'}</strong><br/>${emailBrandConfig.companyName}</p>
    `),
    textBody: (params) => `
Hi ${params.recipientName || '[Name]'},

Thank you for your interest in joining Digital Invest Inc. We have received your application and resume.

Digital Invest is building transformative technology across HealthTech, AgroTech, FoodTech, and AI-driven infrastructure. We're looking for exceptional engineers, researchers, and operators who want to work on long-term systems that matter.

Our team will review your application carefully. If there is a potential match with our current needs and your background, we will reach out to schedule an initial conversation.

What to expect:
- Review typically takes 1-2 weeks
- If there's a fit, we'll schedule a technical or exploratory call
- Our process is thorough but respectful of your time

${params.customNotes ? `Note: ${params.customNotes}\n\n` : ''}
Thank you again for considering Digital Invest. We appreciate your interest in contributing to our mission.

Best regards,
${params.senderName || 'Talent Team'}
${emailBrandConfig.companyName}

---
${emailBrandConfig.footerText}
${emailBrandConfig.companyWebsite}
    `.trim()
  }
];

export const getTemplateById = (id: EmailTemplateId): EmailTemplateDefinition | undefined => {
  return allTemplates.find(t => t.id === id);
};

export const placeholderGuide = {
  recipientName: "The recipient's first name or full name",
  projectName: "The name of the specific project (e.g., 'BioMath Core', 'TerraAero')",
  senderName: "Your name or 'Digital Invest Team'",
  meetingLink: "Optional calendar/video meeting link (e.g., Calendly, Zoom)",
  customNotes: "Any custom message or additional context"
};
