import React from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../data/portfolioContent';
import { ArrowUp, Heart } from 'lucide-react';
import HijazWordmark from './HijazWordmark';

export default function FooterIsak({ theme = 'dark' }) {
  const { footer, brand } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-isak">
      {/* Massive Handwritten Signature Wordmark - Vector Traced with Scroll Reveal Animation */}
      <div className="footer-signature-area">
        <div className="signature-inner-wrapper">
          <HijazWordmark className="footer-vector-wordmark" />
        </div>
      </div>

      {/* Sub-footer metadata bar */}
      <div className="footer-bottom-bar">
        <div className="footer-brand-info">
          <HLogo size={26} theme={theme} />
          <span className="footer-brand-title">Hijaz C</span>
          <span className="footer-tagline">Flutter Developer</span>
        </div>

        <div className="footer-quick-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button onClick={scrollToTop} className="footer-top-trigger" title="Back to top">
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>

      <div className="footer-copyright-row">
        <p className="copyright-text">
          © {new Date().getFullYear()} Muhammed Hijaz C. Flutter Developer • Scalable Mobile &amp; Clean Architecture.
        </p>
      </div>
    </footer>
  );
}
