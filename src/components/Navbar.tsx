import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDumbbell, FaUser, FaCalendarAlt, FaQuoteLeft, FaBlog, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaDumbbell size={28} /> PT Fitness
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><NavLink to="/" end><FaUser /> {t('nav.home')}</NavLink></li>
          <li><NavLink to="/services"><FaDumbbell /> {t('nav.services')}</NavLink></li>
          <li><NavLink to="/appointment"><FaCalendarAlt /> {t('nav.appointment')}</NavLink></li>
          <li><NavLink to="/testimonials"><FaQuoteLeft /> {t('nav.testimonials')}</NavLink></li>
          <li><NavLink to="/blog"><FaBlog /> {t('nav.blog')}</NavLink></li>
          <li><NavLink to="/contact"><FaEnvelope /> {t('nav.contact')}</NavLink></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar; 