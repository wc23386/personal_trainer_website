import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaUsers, FaBuilding, FaHeart, FaChild } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaDumbbell size={40} />,
      title: t('services.1on1.title'),
      description: t('services.1on1.desc'),
      audience: t('services.1on1.audience'),
      price: t('services.1on1.price'),
      cta: t('services.1on1.cta'),
      color: '#667eea'
    },
    {
      icon: <FaUsers size={40} />,
      title: t('services.group.title'),
      description: t('services.group.desc'),
      audience: t('services.group.audience'),
      price: t('services.group.price'),
      cta: t('services.group.cta'),
      color: '#764ba2'
    },
    {
      icon: <FaBuilding size={40} />,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      audience: t('services.business.audience'),
      price: t('services.business.price'),
      cta: t('services.business.cta'),
      color: '#f093fb'
    },
    {
      icon: <FaHeart size={40} />,
      title: t('services.elderly.title'),
      description: t('services.elderly.desc'),
      audience: t('services.elderly.audience'),
      price: t('services.elderly.price'),
      cta: t('services.elderly.cta'),
      color: '#4facfe'
    },
    {
      icon: <FaChild size={40} />,
      title: t('services.kids.title'),
      description: t('services.kids.desc'),
      audience: t('services.kids.audience'),
      price: t('services.kids.price'),
      cta: t('services.kids.cta'),
      color: '#43e97b'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <h1>{t('services.title')}</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ borderTopColor: service.color }}>
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <span><strong>{t('common.audience')}</strong> {service.audience}</span>
                <span><strong>{t('common.price')}</strong> {service.price}</span>
              </div>
              <Link to="/appointment" className="service-cta" style={{ backgroundColor: service.color }}>
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 