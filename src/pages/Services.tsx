import React from 'react';
import { FaUser, FaUsers, FaBuilding, FaHeartbeat, FaChild, FaLine } from 'react-icons/fa';

const services = [
  {
    title: '1-on-1 Personal Training',
    desc: 'Personalized fitness sessions tailored to your goals and abilities.',
    audience: 'All levels',
    price: '$50/session',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
    icon: <FaUser size={28} color="#00c896" />,
    cta: 'Book Now',
    ctaLink: '/appointment',
  },
  {
    title: 'Small Group Training (1 to many)',
    desc: 'Fun, motivating group workouts for friends or family.',
    audience: 'Friends, families, small groups',
    price: '$30/person',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    icon: <FaUsers size={28} color="#00c896" />,
    cta: 'Book Now',
    ctaLink: '/appointment',
  },
  {
    title: 'Business On-Site Group Training',
    desc: 'Bring wellness to your workplace with on-site group sessions.',
    audience: 'Companies, teams',
    price: 'Contact for quote',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    icon: <FaBuilding size={28} color="#00c896" />,
    cta: 'Contact via LINE',
    ctaLink: 'https://line.me/en/',
    line: true,
  },
  {
    title: 'Elderly Health & Movement',
    desc: 'Gentle, safe exercises to improve mobility and quality of life.',
    audience: 'Seniors',
    price: '$40/session',
    image: 'https://images.unsplash.com/photo-1526401485004-2c2e4e83b6b9?auto=format&fit=crop&w=600&q=80',
    icon: <FaHeartbeat size={28} color="#00c896" />,
    cta: 'Book Now',
    ctaLink: '/appointment',
  },
  {
    title: 'Kids Physical Wellness',
    desc: 'Fun, active sessions to build healthy habits for kids.',
    audience: 'Kids, youth',
    price: '$30/session',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    icon: <FaChild size={28} color="#00c896" />,
    cta: 'Book Now',
    ctaLink: '/appointment',
  },
];

const Services: React.FC = () => (
  <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2.5rem 1rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem' }}>Services</h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {services.map((s, i) => (
        <div key={i} style={{
          background: '#fff',
          borderRadius: 18,
          boxShadow: '0 2px 16px #0001',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 18, right: 18 }}>{s.icon}</div>
          <img src={s.image} alt={s.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 18 }} />
          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0.5rem 0' }}>{s.title}</h2>
          <p style={{ color: '#555', marginBottom: 8, textAlign: 'center' }}>{s.desc}</p>
          <div style={{ fontSize: '0.98rem', color: '#00c896', marginBottom: 8 }}><b>Audience:</b> {s.audience}</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: 18 }}><b>Price:</b> {s.price}</div>
          <a
            href={s.ctaLink}
            target={s.line ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              background: s.line ? '#00c300' : '#00c896',
              color: '#fff',
              padding: '0.7rem 1.7rem',
              borderRadius: '1.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 2px 8px #0002',
            }}
          >
            {s.line ? <FaLine /> : null} {s.cta}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Services; 