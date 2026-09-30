import React, { useState, useEffect } from 'react';
import SidebarUser from './components/SidebarUser';
import SidebarTools from './components/SidebarTools';
import HeaderMobile from './components/HeaderMobile';
import SectionHome from './components/sections/SectionHome';
import SectionAbout from './components/sections/SectionAbout';
import SectionEducation from './components/sections/SectionEducation';
import SectionWork from './components/sections/SectionWork';
import SectionServices from './components/sections/SectionServices';
import SectionTech from './components/sections/SectionTech';
import SectionBlog from './components/sections/SectionBlog';
import SectionContact from './components/sections/SectionContact';
import FooterIsak from './components/FooterIsak';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('isak_theme');
    // Default to dark mode (matches reference design)
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('isak_theme', theme);
  }, [theme]);

  // Handle scrollRestoration cleanly
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      // Natural browser restoration: do not force jumps or movement on refresh
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  // Reveal elements on scroll without shifting layout
  useEffect(() => {
    const reveals = document.querySelectorAll('.scroll-reveal');

    // Reveal elements immediately that are already in/above the current scroll view on reload
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('is-revealed');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    reveals.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (e) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const x = e?.clientX ?? (window.innerWidth - 45);
      const y = e?.clientY ?? 90;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: clipPath
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
    } else {
      setTheme(nextTheme);
    }
  };

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="isak-layout-wrapper" data-theme={theme}>
      {/* Ambient background mesh & lights */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow glow-top" />
        <div className="ambient-glow glow-middle" />
        <div className="ambient-glow glow-bottom" />
        <div className="ambient-grid-overlay" />
      </div>

      {/* Mobile / Tablet Header Bar */}
      <HeaderMobile theme={theme} toggleTheme={toggleTheme} />

      <div className="isak-layout-container">
        {/* Left Sticky User Profile Sidebar (always high-contrast dark card) */}
        <SidebarUser theme={theme} activeProject={activeProject} />

        {/* Center / Right Scrollable Main Content Stream */}
        <main className="isak-main-content">
          <div className="content-scroll-container">
            <SectionHome theme={theme} />
            <SectionAbout theme={theme} />
            <SectionEducation theme={theme} />
            <SectionWork theme={theme} setActiveProject={setActiveProject} />
            <SectionServices theme={theme} />
            <SectionTech theme={theme} />
            <SectionBlog theme={theme} />
            <SectionContact theme={theme} />
            <FooterIsak theme={theme} />
          </div>
        </main>

        {/* Right Floating Vertical Quick Nav */}
        <SidebarTools theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
