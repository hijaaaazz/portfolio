import React, { useState, useEffect } from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../content';
import { ArrowUpRight, FileText } from 'lucide-react';

const ROLES = [
  'Mobile App Developer',
  'UI/UX Designer',
  'App Release Manager',
];

// LinkedIn icon
function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// GitHub icon
function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

// Medium letter M icon
function MediumIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.92 1.84c-.167.14-.247.35-.213.565v10.514c-.034.216.046.425.213.565l1.88 1.84v.403h-9.537v-.403l1.933-1.87c.19-.19.19-.247.19-.536V8.67l-5.38 13.66h-.726L3.923 8.67v8.016c-.053.385.077.77.348 1.042l2.518 3.053v.403H0v-.403l2.518-3.053c.27-.272.383-.657.328-1.042V6.887z" />
    </svg>
  );
}

export default function SidebarUser({ theme = 'dark', activeProject = null }) {
  const { brand, socialLinks } = portfolioContent;
  const rolesList = (brand?.roles && brand.roles.length > 0) ? brand.roles : ROLES;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  const isLight = theme === 'light';
  // Use avatar from content.js with fallback
  const portraitSrc = brand?.avatar || '/images/hijaz-portrait.png';

  // Cache previous activeProject so fade-out transition is smooth and doesn't flicker/disappear prematurely
  const [cachedProject, setCachedProject] = useState(activeProject);
  const [prevActive, setPrevActive] = useState(activeProject);

  if (activeProject !== prevActive) {
    setPrevActive(activeProject);
    if (activeProject) {
      setCachedProject(activeProject);
    }
  }

  const displayProject = activeProject || cachedProject;

  // Typewriter effect
  useEffect(() => {
    const currentRole = rolesList[roleIndex % rolesList.length];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rolesList.length);
        setTypingSpeed(110);
      }, 250);
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
  }, [displayText, isDeleting, roleIndex, typingSpeed, rolesList]);

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
            <span className="avail-vertical-text">{brand?.availability?.status || 'Available for Work'}</span>
            <span className="avail-pulse-dot" />
          </div>
        </div>

        {/* Top bar: H logo left | social stack right */}
        <div className="sidebar-top-bar">
          <a
            href="#home"
            className="sidebar-brand-icon"
            title={brand?.name || 'Home'}
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
            {(socialLinks || []).map((s, idx) => {
              const p = (s.platform || '').toLowerCase();
              let IconComp = LinkedInIcon;
              if (p.includes('git')) IconComp = GitHubIcon;
              else if (p.includes('med')) IconComp = MediumIcon;
              else if (p.includes('insta')) IconComp = InstagramIcon;
              else if (p.includes('what') || p.includes('phone')) IconComp = WhatsAppIcon;

              return (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-round-btn"
                  title={s.platform}
                  aria-label={s.platform}
                >
                  <IconComp size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="sidebar-bottom-content">
          {/* Inline Available for Work indicator matching reference screenshot */}
          <div className="sidebar-avail-inline-pill" aria-label={brand?.availability?.status || 'Available for Work'}>
            <span className="avail-pulse-dot" />
            <span className="avail-inline-text">{brand?.availability?.status || 'Available for Work'}</span>
          </div>

          {/* Typewriter headline */}
<div className="sidebar-intro-headline">
  <span className="intro-prefix">
    Hey,<br />
    <span className="intro-role">
      I'm&nbsp;
      <span className="typewriter-active-role">{displayText}</span>
      <span className="typewriter-bar">|</span>
    </span>
  </span>
</div>

          <p className="sidebar-sub-bio">
            {brand?.shortBio || 'I build scalable, user-friendly applications.'}
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
              href={brand?.cvUrl || '/Resume_Hijaz_C.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text-action"
              title="View Resume (PDF)"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Project Details Focused Overlay - Exactly matching reference design */}
        <div className={`sidebar-project-focus-overlay ${activeProject ? 'active' : ''}`}>
          {displayProject && (
            <div className="project-focus-inner" key={displayProject.id}>
              {/* Blurred Project Backdrop Image */}
              <div className="project-focus-bg">
                <img
                  src={displayProject.image}
                  alt={displayProject.title}
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
                <h3 className="project-focus-title">{displayProject.title}</h3>
                <p className="project-focus-desc">{displayProject.subtitle}</p>

                <div className="project-focus-meta-grid">
                  <div className="project-focus-meta-item">
                    <span className="meta-label">Year</span>
                    <span className="meta-val">{displayProject.date}</span>
                  </div>
                  <div className="project-focus-meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-val">{displayProject.role || 'Lead Mobile & Web Developer'}</span>
                  </div>
                </div>

                <div className="project-focus-tags">
                  {displayProject.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="project-focus-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer of the project card inside sidebar */}
                <div className="project-focus-footer">
                  <div className="project-focus-cta-group">
                    {displayProject.liveUrl && (
                      <a
                        href={displayProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-focus-talk-btn"
                        title={`View ${displayProject.title}`}
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                    {displayProject.githubUrl && displayProject.githubUrl.includes('github.com') && (
                      <a
                        href={displayProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-focus-sub-btn"
                        title="View Source on GitHub"
                        aria-label={`View GitHub repository for ${displayProject.title}`}
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                  </div>

                  <div className="project-focus-index-counter">
                    <span className="curr-num">0{displayProject.currentIndex}</span>
                    <span className="sep-slash">/</span>
                    <span className="total-num">0{displayProject.totalCount}</span>
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
