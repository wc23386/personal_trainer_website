import React from 'react';
import { FaInstagram, FaHeart, FaDumbbell, FaAppleAlt, FaBed, FaRunning } from 'react-icons/fa';

const blogPosts = [
  {
    title: '5 Essential Morning Exercises for Energy',
    teaser: 'Start your day right with these simple exercises that will boost your energy and mood.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
    category: 'Fitness Tips',
    icon: <FaDumbbell color="#00c896" />,
    instagram: 'https://instagram.com',
  },
  {
    title: 'Nutrition Basics: What to Eat Before Workouts',
    teaser: 'Learn the best pre-workout nutrition to fuel your training sessions effectively.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80',
    category: 'Nutrition',
    icon: <FaAppleAlt color="#00c896" />,
    instagram: 'https://instagram.com',
  },
  {
    title: 'The Importance of Sleep for Muscle Recovery',
    teaser: 'Discover why quality sleep is crucial for your fitness progress and overall health.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80',
    category: 'Recovery',
    icon: <FaBed color="#00c896" />,
    instagram: 'https://instagram.com',
  },
  {
    title: 'Cardio vs Strength Training: Finding Balance',
    teaser: 'How to combine cardio and strength training for optimal fitness results.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
    category: 'Training',
    icon: <FaRunning color="#00c896" />,
    instagram: 'https://instagram.com',
  },
  {
    title: 'Mental Health Benefits of Regular Exercise',
    teaser: 'Exercise isn\'t just about physical health - it\'s a powerful tool for mental wellness.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
    category: 'Wellness',
    icon: <FaHeart color="#00c896" />,
    instagram: 'https://instagram.com',
  },
  {
    title: 'Building Healthy Habits: Start Small, Think Big',
    teaser: 'Simple strategies to build lasting healthy habits that transform your lifestyle.',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    category: 'Lifestyle',
    icon: <FaHeart color="#00c896" />,
    instagram: 'https://instagram.com',
  },
];

const Blog: React.FC = () => (
  <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2.5rem 1rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem' }}>
      Fitness Tips & Lifestyle
    </h1>
    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
      Expert advice, workout tips, and lifestyle inspiration to help you on your fitness journey
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {blogPosts.map((post, index) => (
        <div key={index} style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 20px #0001',
          overflow: 'hidden',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            style={{ 
              width: '100%', 
              height: 200, 
              objectFit: 'cover',
            }} 
          />
          
          <div style={{ padding: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.8rem',
              fontSize: '0.9rem',
              color: '#00c896',
              fontWeight: 600,
            }}>
              {post.icon} {post.category}
            </div>
            
            <h3 style={{ 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              marginBottom: '0.8rem',
              color: '#333',
            }}>
              {post.title}
            </h3>
            
            <p style={{ 
              color: '#666', 
              marginBottom: '1.2rem',
              lineHeight: 1.5,
              fontSize: '0.95rem',
            }}>
              {post.teaser}
            </p>
            
            <a
              href={post.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#e4405f',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '1.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#d63384';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#e4405f';
              }}
            >
              <FaInstagram size={14} />
              Read More
            </a>
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
        Get Daily Fitness Inspiration
      </h3>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Follow me on Instagram for daily workout tips, nutrition advice, and motivation!
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

export default Blog; 