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
  const [currentDateTime, setCurrentDateTime] = useState({ date: 'Tue, Sep 29', time: '20:32' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'Asia/Kolkata',
      });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      setCurrentDateTime({ date: dateStr, time: timeStr });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mobile-floating-header">
      {/* Top Left Floating Brand Mark */}
      <a
        href="#home"
        className="mobile-floating-brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, '', '#home');
        }}
        aria-label="Hijaz C Home"
      >
        <HLogo size={36} theme={theme} />
      </a>

      {/* Top Right Floating Controls: Date/Time + Menu */}
      <div className="mobile-floating-right">
        <div className="mobile-floating-datetime">
          <span className="floating-date-txt">{currentDateTime.date}</span>
          <span className="floating-time-txt">{currentDateTime.time}</span>
        </div>

        <button
          className={`mobile-floating-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Floating Glass Dropdown Menu Matching Reference */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-floating-dropdown-card"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mobile-dropdown-nav">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-dropdown-link"
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
                  <span className="dropdown-link-label">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
