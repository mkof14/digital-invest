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

interface AdminNotificationProps {
  type: string;
  data: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
    projectTitle?: string;
    amountRange?: string;
    comments?: string;
    date?: string;
    time?: string;
  };
}

export const AdminNotification = ({ type, data }: AdminNotificationProps) => {
  const getTitle = () => {
    switch (type) {
      case 'investor_lead':
        return `🔔 New Investment Interest: ${data.projectTitle || 'General Portfolio'}`;
      case 'consultation_booking':
        return `📅 New Consultation Booking: ${data.projectTitle}`;
      case 'handbook_download':
        return '📥 Investor Handbook Downloaded';
      case 'contact':
        return '✉️ New Contact Form Submission';
      default:
        return '🔔 New Notification';
    }
  };

  return (
    <Html>
      <Head />
      <Preview>{getTitle()}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>{getTitle()}</Heading>
          </Section>
          
          <Section style={content}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{data.name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>

            {data.phone && (
              <>
                <Text style={label}>Phone:</Text>
                <Text style={value}>{data.phone}</Text>
              </>
            )}

            {data.country && (
              <>
                <Text style={label}>Country:</Text>
                <Text style={value}>{data.country}</Text>
              </>
            )}

            {data.projectTitle && (
              <>
                <Text style={label}>Project:</Text>
                <Text style={value}>{data.projectTitle}</Text>
              </>
            )}

            {data.amountRange && (
              <>
                <Text style={label}>Interest Level:</Text>
                <Text style={value}>{data.amountRange}</Text>
              </>
            )}

            {data.date && data.time && (
              <>
                <Text style={label}>Date & Time:</Text>
                <Text style={value}>{data.date} at {data.time}</Text>
              </>
            )}

            {data.comments && (
              <>
                <Text style={label}>Comments:</Text>
                <Text style={value}>{data.comments}</Text>
              </>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Digital Invest Inc. Admin Notification
            </Text>
            <Text style={footerText}>
              Log in to your admin panel to view and manage this request
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNotification;

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
};

const header = {
  backgroundColor: '#0B1120',
  padding: '30px 20px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
};

const content = {
  padding: '30px 40px',
};

const label = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '20px 0 5px 0',
};

const value = {
  color: '#333333',
  fontSize: '16px',
  margin: '0 0 0 0',
  lineHeight: '24px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '5px 0',
};
