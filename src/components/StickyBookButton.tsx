import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './StickyBookButton.css';

const StickyBookButton: React.FC = () => (
  <div className="sticky-book-button">
    <Link to="/appointment" className="book-now-link">
      <FaCalendarAlt size={18} />
      Book Now
    </Link>
  </div>
);

export default StickyBookButton; 