import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

const Home: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p>Transform your life with personalized fitness training</p>
          <Link to="/appointment" className="cta-button">
            {t('home.hero.cta')}
          </Link>
        </div>
        <div className="hero-image">
          <FaDumbbell size={200} />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>{t('home.about.title')}</h2>
          <div className="about-content">
            <p>{t('home.about.intro')}</p>
            {showMore && (
              <p>{t('home.about.more')}</p>
            )}
            <button 
              className="read-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? t('home.about.showLess') : t('home.about.readMore')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 