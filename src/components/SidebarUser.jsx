import React, { useState, useEffect } from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../data/portfolioContent';
import { ArrowUpRight, FileText } from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  WhatsAppIcon 
} from './SocialIcons';

const ROLES = [
  'Flutter Developer',
  'Mobile Engineer',
  'BLoC Specialist',
  'Cross-Platform Architect'
];

// Twitter / X icon
function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// LinkedIn icon
function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Portfolio / Grid icon  
function GridIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

export default function SidebarUser({ theme = 'dark', activeProject = null }) {
  const { brand, contact } = portfolioContent;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  const isLight = theme === 'light';
  // Use constant image, styling/mono-color is handled seamlessly via CSS filter
  const portraitSrc = '/images/hijaz-portrait.png';

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      setTypingSpeed(110);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <aside className="sidebar-user" aria-label="Profile Sidebar">
      <div className={`sidebar-user-card${isLight ? ' sidebar-user-card--light' : ''}`}>
        {/* Full-bleed portrait background */}
        <div className="sidebar-photo-bg">
          <img
            src={portraitSrc}
            alt="Hijaz C"
            className="sidebar-portrait-image"
          />
          <div className="sidebar-photo-overlay" />
        </div>

        {/* Available for Work — integrated tab on the inner left border */}
        <div className="sidebar-avail-tab-wrap" aria-label="Available for Work">
          <svg
            className="sidebar-avail-tab-bg"
            viewBox="0 0 44 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* The exact tab shape with smooth fillets matching reference */}
            <path
              d="M 0 0 C 0 28, 42 27, 42 55 L 42 185 C 42 213, 0 212, 0 240 Z"
              fill={isLight ? '#1a1d2e' : '#2b2d31'}
            />
            {/* Subtle inner stroke along the curved border */}
            <path
              d="M 0 0 C 0 28, 42 27, 42 55 L 42 185 C 42 213, 0 212, 0 240"
              stroke={isLight ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.14)'}
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <div className="sidebar-avail-tab-content">
            <span className="avail-vertical-text">Available for Work</span>
            <span className="avail-pulse-dot" />
          </div>
        </div>

        {/* Top bar: H logo left | social stack right */}
        <div className="sidebar-top-bar">
          <a
            href="#home"
            className="sidebar-brand-icon"
            title="Hijaz C"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              history.pushState(null, '', '#home');
            }}
          >
            <HLogo size={38} theme={theme} />
          </a>

          {/* Vertical Stacked Social Buttons */}
          <div className="sidebar-social-stack">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-round-btn"
              title="X / Twitter"
              aria-label="X Twitter"
            >
              <XIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/hijaaaazz/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-round-btn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              href="https://github.com/hijaaaazz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-round-btn"
              title="GitHub / Portfolio"
              aria-label="GitHub"
            >
              <GridIcon size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="sidebar-bottom-content">
          {/* Typewriter headline */}
          <div className="sidebar-intro-headline">
            <span className="intro-prefix">Hey, I'm </span>
            <span className="typewriter-active-role">{displayText}</span>
            <span className="typewriter-bar">|</span>
          </div>

          <p className="sidebar-sub-bio">
            I engineer production Android &amp; iOS applications with Flutter, Clean
            Architecture, and BLoC, based in Kerala, IN.
          </p>

          <div className="sidebar-card-divider" />

          {/* Action CTAs — exact reference layout */}
          <div className="sidebar-btn-group">
            <a href="#contact" className="btn-circle-arrow" title="Let's talk">
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn-green-pill">
              <span>Let's talk</span>
            </a>

            <a
              href={brand.cvUrl || '#contact'}
              className="btn-text-action"
              title="Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Project Details Focused Overlay - Exactly matching reference design */}
        <div className={`sidebar-project-focus-overlay ${activeProject ? 'active' : ''}`}>
          {activeProject && (
            <div className="project-focus-inner">
              {/* Blurred Project Backdrop Image */}
              <div className="project-focus-bg">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="project-focus-bg-img"
                />
                <div className="project-focus-backdrop-filter" />
              </div>

              {/* Top brand icon */}
              <div className="project-focus-top">
                <div className="project-focus-logo">
                  <HLogo size={36} theme="dark" />
                </div>
              </div>

              {/* Main Content Info */}
              <div className="project-focus-body">
                <h3 className="project-focus-title">{activeProject.title}</h3>
                <p className="project-focus-desc">{activeProject.subtitle}</p>

                <div className="project-focus-meta-grid">
                  <div className="project-focus-meta-item">
                    <span className="meta-label">Year</span>
                    <span className="meta-val">{activeProject.date}</span>
                  </div>
                  <div className="project-focus-meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-val">{activeProject.role || 'Lead Mobile & Web Developer'}</span>
                  </div>
                </div>

                <div className="project-focus-tags">
                  {activeProject.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="project-focus-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer of the project card inside sidebar */}
                <div className="project-focus-footer">
                  <div className="project-focus-cta-group">
                    <a href="#contact" className="project-focus-talk-btn">
                      <ArrowUpRight size={17} />
                      <span>Let's talk</span>
                    </a>
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-focus-sub-btn"
                        title="View Live"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>

                  <div className="project-focus-index-counter">
                    <span className="curr-num">0{activeProject.currentIndex}</span>
                    <span className="sep-slash">/</span>
                    <span className="total-num">0{activeProject.totalCount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
