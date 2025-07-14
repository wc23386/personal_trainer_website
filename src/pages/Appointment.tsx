import React from 'react';
import { FaLine, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const Appointment: React.FC = () => {
  // Add this useEffect to load Calendly script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2rem 1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem' }}>
        Book Your Session
      </h1>
      
      {/* Regular Appointments Section */}
      <div style={{ maxWidth: 800, margin: '0 auto 3rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>
          <FaCalendarAlt style={{ marginRight: '0.5rem', color: '#00c896' }} />
          Schedule Your Training Session
        </h2>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
          Choose from 1-on-1, Group, Elderly, or Kids sessions. Select your preferred date and time below.
        </p>
        
        {/* Calendly Embed */}
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: '2rem',
          boxShadow: '0 2px 16px #0001',
          textAlign: 'center',
        }}>
          {/* 
            REPLACE THIS DIV WITH YOUR CALENDLY EMBED CODE:
            
            <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR-USERNAME/YOUR-EVENT-TYPE" style="min-width:320px;height:700px;"></div>
            
            Replace YOUR-USERNAME and YOUR-EVENT-TYPE with your actual Calendly details
          */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/maggie81232/30min" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          
          {/* Instructions for user */}
          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            background: '#f8f9fa', 
            borderRadius: 8,
            fontSize: '0.9rem',
            color: '#666'
          }}>
            <strong>To customize:</strong> Replace the data-url above with your actual Calendly event URL
          </div>
        </div>
      </div>

      {/* Business On-Site Section */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: '2rem',
          boxShadow: '0 2px 16px #0001',
          border: '2px solid #00c896',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <FaBuilding size={32} color="#00c896" style={{ marginRight: '1rem' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
              Business On-Site Group Training
            </h2>
          </div>
          
          <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Bring wellness to your workplace! I offer on-site group training sessions for companies and teams. 
            Perfect for team building, wellness programs, and promoting a healthy work environment.
          </p>
          
          <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: 8, marginBottom: '1.5rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>What's Included:</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
              <li>Customized workout programs for your team</li>
              <li>Flexible scheduling (lunch breaks, after work)</li>
              <li>Equipment provided if needed</li>
              <li>Progress tracking and wellness tips</li>
            </ul>
          </div>
          
          <a
            href="https://line.me/en/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#00c300',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '1.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              boxShadow: '0 2px 8px #0002',
            }}
          >
            <FaLine size={20} />
            Contact via LINE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appointment; 