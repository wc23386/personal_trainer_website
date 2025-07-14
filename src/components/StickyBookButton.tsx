import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './StickyBookButton.css';

const StickyBookButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Link to="/appointment" className="sticky-book-button">
      <FaCalendarAlt />
      <span>{t('common.bookNow')}</span>
    </Link>
  );
};

export default StickyBookButton; 