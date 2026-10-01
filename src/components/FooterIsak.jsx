import React from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../content';
import { ArrowUp } from 'lucide-react';
import HijazWordmark from './HijazWordmark';

export default function FooterIsak({ theme = 'dark' }) {
  const { footer, brand, navigation } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = navigation || [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const isHijaz = (brand?.displayWordmark || brand?.name || '').toLowerCase().includes('hijaz');

  return (
    <footer className="footer-isak">
      {/* Massive Signature Wordmark */}
      <div className="footer-signature-area">
        <div className="signature-inner-wrapper">
          {isHijaz ? (
            <HijazWordmark className="footer-vector-wordmark" />
          ) : (
            <span
              className="hijaz-vector-wordmark is-wordmark-visible"
              style={{
                fontFamily: "'Handscript', cursive",
                fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.1,
                display: 'block',
                textAlign: 'center',
                opacity: 1,
                filter: 'none',
                transform: 'none',
              }}
            >
              {brand?.displayWordmark || brand?.name}
            </span>
          )}
        </div>
      </div>

      {/* Sub-footer metadata bar */}
      <div className="footer-bottom-bar">
        <div className="footer-brand-info">
          <HLogo size={26} theme={theme} />
          <span className="footer-brand-title">{brand?.name || footer?.brandTitle || 'Developer'}</span>
          <span className="footer-tagline">{brand?.tagline || footer?.tagline || 'Portfolio'}</span>
        </div>

        <div className="footer-quick-links">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                if (item.id === 'home') {
                  e.preventDefault();
                  scrollToTop();
                  history.pushState(null, '', '#home');
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <button onClick={scrollToTop} className="footer-top-trigger" title="Back to top">
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>

      <div className="footer-copyright-row">
        <p className="copyright-text">
          {footer?.copyright || `© ${new Date().getFullYear()} ${brand?.name || 'Portfolio'}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
