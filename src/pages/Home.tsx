import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const heroImage = 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=1200&q=80';
const watermark = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/200px-Placeholder_view_vector.svg.png';

const Home: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: `url(${heroImage}) center/cover no-repeat`,
        color: '#fff',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0 2px 8px #0008',
        position: 'relative',
        padding: '4rem 1rem 2rem 1rem',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
          Transforming Lives Through Fitness
        </h1>
        <a href="#about" style={{
          background: '#00c896',
          color: '#fff',
          padding: '0.9rem 2.2rem',
          borderRadius: '2rem',
          fontWeight: 600,
          fontSize: '1.2rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px #0004',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.7rem',
        }}>
          Book a Session <FaArrowDown />
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" style={{
        background: '#f7f7f7',
        padding: '3rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <img src={watermark} alt="Watermark" style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 80,
          opacity: 0.08,
          pointerEvents: 'none',
        }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.2rem' }}>About Me</h2>
        <p style={{ maxWidth: 600, fontSize: '1.1rem', textAlign: 'center' }}>
          Hi! I'm <b>Your Name</b>, a certified personal trainer passionate about helping people achieve their best selves. With years of experience and a love for fitness, I've guided clients of all ages and backgrounds to healthier, happier lives.
          {showMore && (
            <span> <br /><br />I hold multiple certifications in strength, mobility, and nutrition. My approach is holistic, focusing on both body and mind. Whether you're a beginner, a senior, or looking for group training, I'm here to support your journey every step of the way!</span>
          )}
        </p>
        <button onClick={() => setShowMore(v => !v)} style={{
          marginTop: '1.2rem',
          background: '#00c896',
          color: '#fff',
          border: 'none',
          borderRadius: '1.5rem',
          padding: '0.6rem 1.5rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}>
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </section>
    </div>
  );
};

export default Home; 