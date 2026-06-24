import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        <Link to="/" aria-label="AI Amplifier Corporation home">
          <img src="/assets/logo-white.png" alt="AI Amplifier Corporation" />
        </Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" className="nav-cta" onClick={() => setIsOpen(false)}>Apply for a seat</Link>
        </div>
      </nav>
    </header>
  );
}
