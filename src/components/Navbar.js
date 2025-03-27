import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">A&P</div>
      <button 
        className="navbar-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/engagement" onClick={() => setIsOpen(false)}>Engagement</Link></li>
        <li><Link to="/bangle-ceremony" onClick={() => setIsOpen(false)}>Bangle Ceremony</Link></li>
        <li><Link to="/kirtan" onClick={() => setIsOpen(false)}>Kirtan</Link></li>
        <li><Link to="/mehndi" onClick={() => setIsOpen(false)}>Mehndi</Link></li>
        <li><Link to="/saint" onClick={() => setIsOpen(false)}>Saint</Link></li>
        <li><Link to="/shagun" onClick={() => setIsOpen(false)}>Shagun</Link></li>
        <li><Link to="/haldi" onClick={() => setIsOpen(false)}>Haldi</Link></li>
        <li><Link to="/wedding" onClick={() => setIsOpen(false)}>Wedding</Link></li>
        {/* <li><Link to="/welcome" onClick={() => setIsOpen(false)}>Welcome</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;