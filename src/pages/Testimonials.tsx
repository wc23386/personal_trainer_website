import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah M.',
    quote: '"Amazing trainer! Helped me lose 20kg and feel confident again."',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Mike R.',
    quote: '"Best investment in myself. Stronger, healthier, and happier!"',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Emma L.',
    quote: '"Perfect for beginners. Patient, encouraging, and knowledgeable."',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
  {
    name: 'David K.',
    quote: '"Group sessions are so much fun! Great energy and motivation."',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Lisa P.',
    quote: '"Elderly fitness program changed my life. I can move freely again!"',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Tom W.',
    quote: '"Kids love the sessions! Building healthy habits early."',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    instagram: 'https://instagram.com',
  },
];

const Testimonials: React.FC = () => (
  <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2.5rem 1rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem' }}>
      Client Testimonials
    </h1>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {testimonials.map((testimonial, index) => (
        <div key={index} style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 20px #0001',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img 
            src={testimonial.photo} 
            alt={testimonial.name}
            style={{ 
              width: '100%', 
              height: 280, 
              objectFit: 'cover',
            }} 
          />
          
          <div style={{ padding: '1.5rem' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#333', 
              marginBottom: '1rem',
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}>
              {testimonial.quote}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span style={{ 
                fontWeight: 600, 
                color: '#00c896',
                fontSize: '1rem',
              }}>
                {testimonial.name}
              </span>
              
              <a
                href={testimonial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#e4405f',
                  color: '#fff',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div style={{ 
      textAlign: 'center', 
      marginTop: '3rem',
      padding: '2rem',
      background: '#fff',
      borderRadius: 12,
      maxWidth: 600,
      margin: '3rem auto 0 auto',
      boxShadow: '0 2px 16px #0001',
    }}>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>
        See More Success Stories
      </h3>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Follow me on Instagram for daily motivation, workout tips, and more client transformations!
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
        }}
      >
        <FaInstagram size={18} />
        Follow on Instagram
      </a>
    </div>
  </div>
);

export default Testimonials; 