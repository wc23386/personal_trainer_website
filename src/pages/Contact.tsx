import React from 'react';
import { FaLine, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => (
  <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2.5rem 1rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem' }}>
      Get In Touch
    </h1>
    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
      Ready to start your fitness journey? Reach me on any platform - I'm here to help!
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: 1000,
      margin: '0 auto',
    }}>
      {/* LINE Contact */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 4px 20px #0001',
        textAlign: 'center',
        border: '2px solid #00c300',
      }}>
        <FaLine size={48} color="#00c300" style={{ marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem' }}>
          LINE Official Account
        </h3>
        <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Quick questions, booking inquiries, or just want to chat? LINE is the fastest way to reach me!
        </p>
        <a
          href="https://line.me/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#00c300',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '1.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
          }}
        >
          <FaLine size={18} />
          Message on LINE
        </a>
      </div>

      {/* Instagram Contact */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 4px 20px #0001',
        textAlign: 'center',
        border: '2px solid #e4405f',
      }}>
        <FaInstagram size={48} color="#e4405f" style={{ marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem' }}>
          Instagram
        </h3>
        <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Follow for daily motivation, workout tips, and behind-the-scenes content. DM me anytime!
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#e4405f',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '1.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
          }}
        >
          <FaInstagram size={18} />
          Follow & DM
        </a>
      </div>

      {/* Email Contact */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 4px 20px #0001',
        textAlign: 'center',
        border: '2px solid #00c896',
      }}>
        <FaEnvelope size={48} color="#00c896" style={{ marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem' }}>
          Email
        </h3>
        <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Prefer email? Send me a detailed message about your fitness goals and questions.
        </p>
        <a
          href="mailto:your.email@example.com"
          style={{
            background: '#00c896',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '1.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
          }}
        >
          <FaEnvelope size={18} />
          Send Email
        </a>
      </div>
    </div>

    {/* Additional Info */}
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: '2rem',
      boxShadow: '0 4px 20px #0001',
      maxWidth: 800,
      margin: '2rem auto 0 auto',
      textAlign: 'center',
    }}>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>
        Let's Work Together
      </h3>
      <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        Whether you're a beginner looking to start your fitness journey, a senior wanting to stay active, 
        or a business interested in workplace wellness programs - I'm here to help you achieve your goals!
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginTop: '1.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
          <FaPhone size={16} color="#00c896" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
          <FaMapMarkerAlt size={16} color="#00c896" />
          <span>Your City, Country</span>
        </div>
      </div>
    </div>

    {/* Social Media Footer */}
    <div style={{
      textAlign: 'center',
      marginTop: '2rem',
      padding: '1.5rem',
      background: '#fff',
      borderRadius: 12,
      maxWidth: 600,
      margin: '2rem auto 0 auto',
      boxShadow: '0 2px 16px #0001',
    }}>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        <strong>Reach me on any platform</strong> - I respond quickly and love connecting with clients!
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <a href="https://line.me/en/" target="_blank" rel="noopener noreferrer" style={{ color: '#00c300' }}>
          <FaLine size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e4405f' }}>
          <FaInstagram size={24} />
        </a>
        <a href="mailto:your.email@example.com" style={{ color: '#00c896' }}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  </div>
);

export default Contact; 