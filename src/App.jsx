'use client';

import React, { useState, useEffect } from 'react';
import { portfolioContent } from './content';
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
import DotField from './components/DotField';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('isak_theme');
        if (saved) {
          setTheme(saved);
        }
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('isak_theme', theme);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [theme]);

  // Set document title and meta description from content.js
  useEffect(() => {
    if (portfolioContent.brand?.metaTitle) {
      document.title = portfolioContent.brand.metaTitle;
    } else if (portfolioContent.brand?.name) {
      document.title = `${portfolioContent.brand.name} — ${portfolioContent.brand.tagline || 'Portfolio'}`;
    }
    if (portfolioContent.brand?.metaDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', portfolioContent.brand.metaDescription);
      }
    }
  }, []);

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

  const isDark = theme !== 'light';

  return (
    <div className="isak-layout-wrapper" data-theme={theme}>
      {/* Ambient background mesh & lights */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow glow-top" />
        <div className="ambient-glow glow-middle" />
        <div className="ambient-glow glow-bottom" />
        <div className="ambient-grid-overlay" />
      </div>

      {/* Full-width interactive DotField canvas spanning across entire Home section, sidebars, user & nav */}
     <div className="home-viewport-dotfield-bg" aria-hidden="true">
  <DotField
    dotRadius={isDark ? 1.75 : 1.8}
    dotSpacing={isDark ? 14 : 13}
    cursorRadius={450}
    cursorForce={0.1}
    bulgeOnly={true}
    bulgeStrength={65}
    glowRadius={isDark ? 170 : 190}
    sparkle={false}
    waveAmplitude={0}
    gradientFrom={
      isDark
        ? "rgba(0, 255, 115, 0.65)"
        : "rgba(0, 0, 0, 0.58)"
    }
    gradientTo={
      isDark
        ? "rgba(0, 222, 81, 0.42)"
        : "rgba(0, 0, 0, 0.32)"
    }
    glowColor={
      isDark
        ? "rgba(0, 255, 115, 0.45)"
        : "rgba(0, 0, 0, 0.35)"
    }
  />
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
