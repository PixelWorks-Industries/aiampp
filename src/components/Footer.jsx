import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <Link to="/">
          <img src="/assets/logo-white.png" alt="AI Amplifier Corporation" />
        </Link>
        <div className="fmeta">
          <Link to="/services">Services</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <span>© 2026 · aiamplifier.com</span>
        </div>
      </div>
    </footer>
  );
}
