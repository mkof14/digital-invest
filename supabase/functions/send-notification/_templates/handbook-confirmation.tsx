import {
  Body,
  Button,
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

interface HandbookConfirmationProps {
  name: string;
}

export const HandbookConfirmation = ({ name }: HandbookConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Investor Handbook - Digital Invest</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>Digital Invest Inc.</Heading>
            <Text style={tagline}>Building multi-sector real-economy and AI platforms</Text>
          </Section>
          
          <Section style={content}>
            <Heading style={h2}>Your Investor Handbook</Heading>
            
            <Text style={paragraph}>
              Dear {name},
            </Text>

            <Text style={paragraph}>
              Thank you for downloading the Digital Invest Investor Handbook. This comprehensive document provides an overview of our portfolio, investment philosophy, and process.
            </Text>

            <Text style={paragraph}>
              After reviewing the handbook, if you have any questions or would like to discuss specific projects, we encourage you to:
            </Text>

            <ul style={list}>
              <li style={listItem}>Schedule a consultation with our team</li>
              <li style={listItem}>Submit an expression of interest for specific projects</li>
              <li style={listItem}>Reach out directly at info@digitalinvest.com</li>
            </ul>

            <Button style={button} href="https://www.digitalinvest.com/schedule">
              Schedule Consultation
            </Button>

            <Section style={disclaimer}>
              <Text style={disclaimerText}>
                <strong>Disclaimer:</strong> The Investor Handbook is for informational purposes only and does not constitute an offer, solicitation, or investment advice.
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

export default HandbookConfirmation;

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

const list = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px 20px',
  padding: '0',
};

const listItem = {
  margin: '0 0 10px 0',
};

const button = {
  backgroundColor: '#38BDF8',
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '14px 30px',
  margin: '20px 0',
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
