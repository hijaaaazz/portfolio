import React, { useState, useEffect } from 'react';
import HLogo from './HLogo';
import { Menu, X, Clock, MapPin, ArrowUpRight, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function HeaderMobile({ theme = 'light', toggleTheme }) {
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mobile-header-bar">
      {/* Brand logo (visible on mobile/tablet) */}
      <a
        href="#home"
        className="mobile-brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, '', '#home');
        }}
      >
        <HLogo size={24} theme={theme} />
        <span className="mobile-brand-title">Hijaz C</span>
      </a>

      {/* Live Time Indicator */}
      <div className="mobile-clock-pill">
        <MapPin size={12} className="clock-icon-pin" />
        <span className="clock-location">Kerala, IN</span>
        <span className="clock-sep">•</span>
        <Clock size={12} className="clock-icon" />
        <span className="clock-time">{currentTime || '12:00 PM'}</span>
      </div>

      <div className="mobile-header-actions">
        {/* Theme switch button */}
        <button
          className="mobile-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* Mobile Menu Hamburger */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-modal" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="drawer-brand">
                <HLogo size={24} theme={theme} />
                <span>Hijaz C</span>
              </div>
              <button
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-drawer-links">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.id}`}
                  className="mobile-drawer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (item.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      history.pushState(null, '', '#home');
                    } else {
                      const target = document.getElementById(item.id);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        history.pushState(null, '', `#${item.id}`);
                      }
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="drawer-arrow" />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="drawer-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let’s Talk Together
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
