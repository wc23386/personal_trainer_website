import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'zh-TW' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={handleLanguageChange}
        className="language-button"
        title={t('common.language')}
      >
        <span className="language-icon">🌐</span>
        <span className="language-text">
          {language === 'en' ? '繁體中文' : 'English'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher; 