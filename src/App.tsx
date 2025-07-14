import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StickyBookButton from './components/StickyBookButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <StickyBookButton />
    </Router>
  );
}

export default App;
