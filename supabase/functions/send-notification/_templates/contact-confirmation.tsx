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

interface ContactConfirmationProps {
  name: string;
}

export const ContactConfirmation = ({ name }: ContactConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>We received your message - Digital Invest</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>Digital Invest Inc.</Heading>
            <Text style={tagline}>Building multi-sector real-economy and AI platforms</Text>
          </Section>
          
          <Section style={content}>
            <Heading style={h2}>We received your message</Heading>
            
            <Text style={paragraph}>
              Dear {name},
            </Text>

            <Text style={paragraph}>
              Thank you for contacting Digital Invest Inc. We have received your message and will respond within 1-2 business days.
            </Text>

            <Text style={paragraph}>
              In the meantime, you can explore our portfolio and learn more about our projects:
            </Text>

            <Button style={button} href="https://www.digitalinvest.com/projects">
              View Our Projects
            </Button>
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

export default ContactConfirmation;

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
