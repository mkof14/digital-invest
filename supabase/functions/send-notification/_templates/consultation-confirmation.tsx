import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface ConsultationConfirmationProps {
  name: string;
  projectTitle: string;
  date: string;
  time: string;
}

export const ConsultationConfirmation = ({ name, projectTitle, date, time }: ConsultationConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>Consultation Request Confirmed - Digital Invest</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>Digital Invest Inc.</Heading>
            <Text style={tagline}>Building multi-sector real-economy and AI platforms</Text>
          </Section>
          
          <Section style={content}>
            <Heading style={h2}>Consultation Request Confirmed</Heading>
            
            <Text style={paragraph}>
              Dear {name},
            </Text>

            <Text style={paragraph}>
              Thank you for requesting a consultation about <strong>{projectTitle}</strong>. We have received your request for:
            </Text>

            <Section style={infoBox}>
              <Text style={infoLabel}>Date:</Text>
              <Text style={infoValue}>{date}</Text>
              
              <Text style={infoLabel}>Time:</Text>
              <Text style={infoValue}>{time}</Text>
            </Section>

            <Text style={paragraph}>
              Our team will review your request and send you a confirmation with meeting details (Zoom link or phone number) within 24 hours.
            </Text>

            <Text style={paragraph}>
              If you have any questions before the meeting, please do not hesitate to reach out.
            </Text>

            <Section style={disclaimer}>
              <Text style={disclaimerText}>
                <strong>Note:</strong> This consultation is for informational purposes only and does not constitute investment advice or an offer to sell securities.
              </Text>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              <strong>Best regards,</strong><br />
              The Digital Invest Team
            </Text>
            <Text style={footerText}>
              Digital Invest Inc. | Building multi-sector real-economy and AI platforms
            </Text>
            <Text style={footerLink}>
              www.digitalinvest.com | info@digitalinvest.com
            </Text>
            <Text style={footerLegal}>
              This email and any attachments are confidential. Nothing in this email constitutes investment, legal, or tax advice.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConsultationConfirmation;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#0B1120',
  padding: '40px 30px',
  textAlign: 'center' as const,
};

const logo = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
};

const tagline = {
  color: '#38BDF8',
  fontSize: '14px',
  margin: '0',
};

const content = {
  padding: '40px 30px',
};

const h2 = {
  color: '#0B1120',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px 0',
};

const infoBox = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #e6ebf1',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
};

const infoLabel = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
};

const infoValue = {
  color: '#0B1120',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 15px 0',
};

const disclaimer = {
  backgroundColor: '#f9f9f9',
  borderLeft: '3px solid #38BDF8',
  padding: '15px 20px',
  margin: '30px 0 0 0',
};

const disclaimerText = {
  color: '#666666',
  fontSize: '13px',
  lineHeight: '20px',
  margin: '0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  padding: '0 30px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '10px 0',
};

const footerLink = {
  color: '#38BDF8',
  fontSize: '14px',
  margin: '10px 0',
};

const footerLegal = {
  color: '#8898aa',
  fontSize: '11px',
  lineHeight: '16px',
  margin: '15px 0 0 0',
};
