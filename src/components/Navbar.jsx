import React, { useState, useEffect } from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../data/portfolioContent';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#overview" className="navbar-brand">
          <HLogo size={28} />
          <span className="brand-text">
            <span className="brand-bold">Hijaz</span> C
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {portfolioContent.navigation.map((item, idx) => (
            <a key={idx} href={item.href} className="nav-link">
              {item.label}
              {idx === 1 && <ChevronDown size={14} className="nav-caret" />}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <a href="#contact" className="btn-rocket-tag" title="Get in touch">
            <Rocket size={18} className="rocket-icon" />
          </a>
          <a href="#contact" className="btn-dark-pill">
            <span>Connect</span>
            <span className="btn-icon">↓</span>
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            {portfolioContent.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-dark-pill mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
