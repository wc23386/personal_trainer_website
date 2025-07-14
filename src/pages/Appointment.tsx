import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Appointment.css';

const Appointment: React.FC = () => {
  const { t } = useLanguage();

  // Load Calendly script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="appointment">
      <div className="container">
        <div className="appointment-header">
          <h1>{t('appointment.title')}</h1>
          <h2>{t('appointment.subtitle')}</h2>
          <p>{t('appointment.description')}</p>
        </div>

        <div className="appointment-content">
          <div className="calendly-section">
            <h3>{t('appointment.calendly.title')}</h3>
                                     <div className="calendly-embed">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/maggie81232/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>

          <div className="business-section">
            <h3>{t('appointment.business.title')}</h3>
            
            <div className="business-content">
              <div className="business-image">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Corporate group training session"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="placeholder-image hidden">
                  <FaBuilding size={80} />
                </div>
              </div>
              
              <div className="business-text">
                <p>{t('appointment.business.desc')}</p>
                
                <div className="business-included">
                  <h4>{t('appointment.business.included')}</h4>
                  <div className="included-items">
                    <div className="included-item">{t('appointment.business.item1')}</div>
                    <div className="included-item">{t('appointment.business.item2')}</div>
                    <div className="included-item">{t('appointment.business.item3')}</div>
                    <div className="included-item">{t('appointment.business.item4')}</div>
                  </div>
                </div>
                
                <a 
                  href="https://line.me/en/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="business-cta"
                >
                  <FaBuilding /> {t('appointment.business.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment; 