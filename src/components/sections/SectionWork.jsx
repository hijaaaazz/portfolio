import React, { useEffect, useRef } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import HLogo from '../HLogo';

export default function SectionWork({ setActiveProject }) {
  const { projects } = portfolioContent;
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-project-index'));
          const proj = projects.items[index];
          if (proj && setActiveProject) {
            setActiveProject({
              ...proj,
              currentIndex: index + 1,
              totalCount: projects.items.length,
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.35, 0.65],
      rootMargin: '-10% 0px -25% 0px',
    });

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Also observe the entire work section to clear active project when leaving
    const workSection = document.getElementById('work');
    let sectionObserver;
    if (workSection) {
      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && setActiveProject) {
            setActiveProject(null);
          }
        },
        { threshold: 0.05 }
      );
      sectionObserver.observe(workSection);
    }

    return () => {
      observer.disconnect();
      if (sectionObserver) sectionObserver.disconnect();
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
                    <a href="#contact" className="work-mobile-talk-btn">
                      <ArrowUpRight size={16} />
                      <span>Let's talk</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-mobile-live-btn"
                        title="View Live / Source"
                        aria-label={`View ${project.title}`}
                      >
                        <ArrowUpRight size={14} />
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
