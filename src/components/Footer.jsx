import React from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../data/portfolioContent';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { footer, brand } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* Dark Cosmic Banner Transition */}
      <div className="footer-top-banner">
        <div className="banner-cosmic-glow" aria-hidden="true" />
        <div className="footer-top-content">
          <div className="footer-lead-text">
            <h2>Experience liftoff</h2>
            <p>Elevating digital experiences through clean engineering and modern interfaces.</p>
          </div>

          <div className="footer-links-grid">
            {footer.columns.map((col, idx) => (
              <div key={idx} className="footer-column">
                <h4 className="footer-col-title">{col.title}</h4>
                <ul className="footer-links-list">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Iconic Handwritten Wordmark */}
        <div className="giant-wordmark-wrapper">
          <img
            src="/images/hijaz-wordmark.png"
            alt="Hijaz"
            className="giant-wordmark-image"
          />
        </div>
      </div>

      {/* Sub-footer Bar */}
      <div className="sub-footer-bar">
        <div className="sub-footer-container">
          <div className="sub-footer-brand">
            <HLogo size={20} />
            <span className="sub-footer-name">Hijaz C</span>
          </div>

          <div className="sub-footer-links">
            <a href="#overview">About</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact</a>
            <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
        <div className="sub-footer-copy">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
