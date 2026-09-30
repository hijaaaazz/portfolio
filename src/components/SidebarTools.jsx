import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Sun, 
  Moon, 
  Home, 
  User, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Send, 
  ArrowUp 
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'services', label: 'Services', icon: Sparkles },
  { id: 'tech', label: 'Tech Stack', icon: Layers },
  { id: 'blog', label: 'Milestones', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function SidebarTools({ theme = 'light', toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);

      const scrollPosition = window.scrollY + 280;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="sidebar-tools-rail" aria-label="Floating Tools">
      {/* Desktop Top Action: Theme Toggle (atmost top in desktop view only) */}
      <div className="tools-top-action-group">
        <button
          className="tool-icon-btn gear-btn theme-btn"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      {/* Main Floating Pill Dock (centered) */}
      <div className="tools-floating-dock">
        {/* Navigation List */}
        <nav className="dock-nav-items">
          {NAV_ITEMS.map((item) => {
            const IconComp = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.id === 'home') {
                    if (window.scrollY === 0) return;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    history.pushState(null, '', '#home');
                    return;
                  }

                  const target = document.getElementById(item.id);
                  if (target) {
                    const rect = target.getBoundingClientRect();
                    // 1.5rem is 24px from viewport top. If already close (+/- 5px), don't jitter
                    if (Math.abs(rect.top - 24) < 6) {
                      return;
                    }
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    history.pushState(null, '', `#${item.id}`);
                  }
                }}
                className={`dock-item-btn ${isActive ? 'active' : ''}`}
                aria-label={item.label}
              >
                <IconComp size={18} />
                <span className="dock-tooltip">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action Group: Back To Top arrow (atmost last in desktop view) */}
      <div className="tools-bottom-action-group">
        {/* Mobile/Tablet only theme toggle fallback (hidden on desktop) */}
        <div className="tools-mobile-theme-wrap">
          <button
            className="tool-icon-btn gear-btn theme-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Back to Top Arrow button */}
        <div className={`tools-top-btn-wrap ${showTopBtn ? 'is-visible' : 'is-hidden'}`}>
          <button
            onClick={scrollToTop}
            className="tool-icon-btn gear-btn top-btn"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
