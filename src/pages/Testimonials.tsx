import React from 'react';
import { FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.sarah.name'),
      text: t('testimonials.sarah.text'),
      rating: 5
    },
    {
      name: t('testimonials.mike.name'),
      text: t('testimonials.mike.text'),
      rating: 5
    },
    {
      name: t('testimonials.lisa.name'),
      text: t('testimonials.lisa.text'),
      rating: 5
    },
    {
      name: t('testimonials.david.name'),
      text: t('testimonials.david.text'),
      rating: 5
    },
    {
      name: t('testimonials.emma.name'),
      text: t('testimonials.emma.text'),
      rating: 5
    },
    {
      name: t('testimonials.john.name'),
      text: t('testimonials.john.text'),
      rating: 5
    }
  ];

  return (
    <div className="testimonials">
      <div className="container">
        <h1>{t('testimonials.title')}</h1>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>★</span>
                ))}
              </div>
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>

        <div className="more-testimonials">
          <h2>{t('testimonials.more.title')}</h2>
          <p>{t('testimonials.more.desc')}</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-cta"
          >
            <FaInstagram /> {t('testimonials.more.cta')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 