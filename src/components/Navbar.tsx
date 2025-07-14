import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDumbbell, FaUser, FaCalendarAlt, FaQuoteLeft, FaBlog, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <FaDumbbell size={28} /> PT Fitness
    </div>
    <ul className="navbar-links">
      <li><NavLink to="/" end><FaUser /> Home</NavLink></li>
      <li><NavLink to="/services"><FaDumbbell /> Services</NavLink></li>
      <li><NavLink to="/appointment"><FaCalendarAlt /> Appointment</NavLink></li>
      <li><NavLink to="/testimonials"><FaQuoteLeft /> Testimonials</NavLink></li>
      <li><NavLink to="/blog"><FaBlog /> Blog</NavLink></li>
      <li><NavLink to="/contact"><FaEnvelope /> Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navbar; 