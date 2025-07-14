import React from 'react';
import { FaLine, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <FaLine size={40} />,
      title: t('contact.line.title'),
      description: t('contact.line.desc'),
      cta: t('contact.line.cta'),
      link: 'https://line.me/en/',
      color: '#00c300'
    },
    {
      icon: <FaInstagram size={40} />,
      title: t('contact.instagram.title'),
      description: t('contact.instagram.desc'),
      cta: t('contact.instagram.cta'),
      link: 'https://instagram.com',
      color: '#e4405f'
    },
    {
      icon: <FaEnvelope size={40} />,
      title: t('contact.email.title'),
      description: t('contact.email.desc'),
      cta: t('contact.email.cta'),
      link: 'mailto:your.email@example.com',
      color: '#007bff'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card" style={{ borderTopColor: method.color }}>
              <div className="contact-icon" style={{ color: method.color }}>
                {method.icon}
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <a 
                href={method.link}
                target={method.link.startsWith('mailto:') ? undefined : '_blank'}
                rel={method.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="contact-cta"
                style={{ backgroundColor: method.color }}
              >
                {method.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="contact-work">
          <h2>{t('contact.work.title')}</h2>
          <p>{t('contact.work.desc')}</p>
          <p className="contact-reach">{t('contact.reach')}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 