// emails/BadgeAward.tsx
import { Html, Head, Body, Container, Section, Img, Text, Button } from '@react-email/components';

export default function BadgeAward({ 
  userName = 'User',
  badgeName = 'Achievement Badge',
  badgeImage = 'https://example.com/badge.png',
  trainingTitle = 'Training Course'
}: {
  userName: string;
  badgeName: string;
  badgeImage: string;
  trainingTitle: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={heading}>Congratulations on Your Achievement!</Text>
          </Section>
          
          <Section style={content}>
            <Text style={paragraph}>Dear {userName},</Text>
            <Text style={paragraph}>
              You've earned the <strong>{badgeName}</strong> badge for completing {trainingTitle}!
            </Text>
            
            <Section style={badgeContainer}>
              <Img
                src={badgeImage}
                alt={badgeName}
                width="200"
                height="200"
                style={badgeImageStyle}
              />
              <Text style={badgeNameText}>{badgeName}</Text>
            </Section>
            
            <Text style={paragraph}>
              Share your achievement on social media or add it to your professional profile!
            </Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>© {new Date().getFullYear()} Your Company Name</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' };
const container = { maxWidth: '600px', margin: '0 auto', padding: '20px' };
const header = { textAlign: 'center', marginBottom: '32px' };
const heading = { fontSize: '24px', color: '#333', fontWeight: 'bold' };
const content = { backgroundColor: '#fff', padding: '24px', borderRadius: '8px' };
const paragraph = { fontSize: '16px', color: '#555', lineHeight: '1.5' };
const badgeContainer = { textAlign: 'center', margin: '24px 0' };
const badgeImageStyle = { margin: '0 auto' };
const badgeNameText = { fontSize: '20px', fontWeight: 'bold', marginTop: '16px' };
const footer = { marginTop: '32px', textAlign: 'center' };
const footerText = { fontSize: '12px', color: '#999' };