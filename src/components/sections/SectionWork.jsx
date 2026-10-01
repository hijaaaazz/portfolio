import React, { useEffect, useRef } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import HLogo from '../HLogo';
import { GithubIcon } from '../SocialIcons';

export default function SectionWork({ setActiveProject }) {
  const { projects } = portfolioContent;
  const cardRefs = useRef([]);
  const activeIndexRef = useRef(null);

  useEffect(() => {
    const updateActiveProject = () => {
      // Requirement: ONLY show in desktop view (> 1199px)
      if (typeof window === 'undefined' || window.innerWidth <= 1199) {
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null;
          setActiveProject(null);
        }
        return;
      }

      const workEl = document.getElementById('work');
      if (!workEl) return;

      const workRect = workEl.getBoundingClientRect();
      const vh = window.innerHeight;

      // If work section has not entered viewport or has completely scrolled past
      if (workRect.top >= vh || workRect.bottom <= 0) {
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null;
          setActiveProject(null);
        }
        return;
      }

      const cards = cardRefs.current;
      const numCards = projects.items.length;

      let winningIndex = -1;
      let maxDominanceScore = 0;

      for (let i = 0; i < numCards; i++) {
        const card = cards[i];
        if (!card) continue;

        const rect = card.getBoundingClientRect();
        const cardHeight = rect.height || 1;

        // Physical visible span in viewport
        const visibleTop = Math.max(0, rect.top);
        let visibleBottom = Math.min(vh, rect.bottom);

        // Subsequent cards (i + 1, etc.) have higher z-index and stack over card i when sticky.
        // If the next card has reached or overlaps card i, the portion below nextCard.top is obscured.
        if (i < numCards - 1 && cards[i + 1]) {
          const nextRect = cards[i + 1].getBoundingClientRect();
          if (nextRect.top < visibleBottom) {
            visibleBottom = Math.max(visibleTop, nextRect.top);
          }
        }

        const unobscuredHeight = Math.max(0, visibleBottom - visibleTop);
        const fractionOfCard = unobscuredHeight / cardHeight;

        // A card qualifies as "fully or majority in view port" if:
        // - At least 50% of the card is visible and unobscured (majority of card)
        // - OR the card is stuck at the top (rect.top <= 80px) and at least 35% is unobscured
        const isEligible = fractionOfCard >= 0.5 || (rect.top <= 80 && fractionOfCard >= 0.35);

        if (isEligible) {
          // Dominance scoring:
          // Base score is the unobscured visible height
          let score = unobscuredHeight;

          // When a card is stuck at top (the primary focus area) and predominantly visible,
          // give it priority over a new card just peeking in at the bottom
          if (rect.top <= 80 && fractionOfCard >= 0.5) {
            score += 250;
          }

          if (score > maxDominanceScore) {
            maxDominanceScore = score;
            winningIndex = i;
          }
        }
      }

      if (winningIndex === -1) {
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null;
          setActiveProject(null);
        }
      } else if (activeIndexRef.current !== winningIndex) {
        activeIndexRef.current = winningIndex;
        const proj = projects.items[winningIndex];
        setActiveProject({
          ...proj,
          currentIndex: winningIndex + 1,
          totalCount: numCards,
        });
      }
    };

    let rafId = null;
    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateActiveProject();
        rafId = null;
      });
    };

    updateActiveProject();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (activeIndexRef.current !== null) {
        setActiveProject(null);
      }
    };
  }, [projects.items, setActiveProject]);

  return (
    <section id="work" className="section-block section-work flat-spacing">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Briefcase size={14} className="tag-icon" />
        <span>Work Highlights</span>
      </div>

      {/* Sticky Project Cards matching reference template */}
      <div className="work-list element-sticky">
        {projects.items.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            data-project-index={index}
            className="sticky-item work-image-only-item"
            style={{ zIndex: index + 1 }}
          >
            <div className="work-image-frame">
              <img
                src={project.image}
                alt={project.title}
                className="work-full-cover-img"
                loading="lazy"
              />
              <div className="work-image-gradient-shade" />

              {/* Action buttons inside the image card for desktop interaction */}
              <div className="work-image-interactive-overlay">
                <span className="work-image-tag">{project.category}</span>
                <div className="work-image-actions-group">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-image-btn"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl.includes('github.com') && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-image-github-btn"
                      title="View Source on GitHub"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Extra Project Details Card for Mobile & Tablet view (matching tfisak reference) */}
            <div className="work-mobile-details-card" aria-label={`${project.title} details`}>
              {/* Blurred Project Backdrop Image */}
              <div className="work-mobile-card-bg" aria-hidden="true">
                <img
                  src={project.image}
                  alt=""
                  className="work-mobile-card-bg-img"
                  loading="lazy"
                />
                <div className="work-mobile-card-backdrop" />
              </div>

              <div className="work-mobile-card-content">
                {/* Top brand icon & Category */}
                <div className="work-mobile-card-top">
                  <div className="work-mobile-card-logo">
                    <HLogo size={32} theme="dark" />
                  </div>
                  <span className="work-mobile-category-pill">{project.category}</span>
                </div>

                {/* Title & Description */}
                <h3 className="work-mobile-card-title">{project.title}</h3>
                <p className="work-mobile-card-desc">{project.subtitle}</p>

                {/* Highlights Grid: Year & Role */}
                <div className="work-mobile-meta-grid">
                  <div className="work-mobile-meta-item">
                    <span className="work-meta-label">Year</span>
                    <span className="work-meta-val">{project.date}</span>
                  </div>
                  <div className="work-mobile-meta-item">
                    <span className="work-meta-label">Role</span>
                    <span className="work-meta-val">{project.role || 'Lead Mobile Developer'}</span>
                  </div>
                </div>

                {/* Tags List */}
                {project.tags && project.tags.length > 0 && (
                  <div className="work-mobile-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="work-mobile-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Divider & Bottom Action Row */}
                <div className="work-mobile-card-footer">
                  <div className="work-mobile-cta-group">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-mobile-talk-btn"
                        title={`View ${project.title}`}
                        aria-label={`View ${project.title}`}
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl.includes('github.com') && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-mobile-live-btn"
                        title="View Source on GitHub"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>

                  <div className="work-mobile-counter">
                    <span className="work-counter-curr">0{index + 1}</span>
                    <span className="work-counter-sep">/</span>
                    <span className="work-counter-total">0{projects.items.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
