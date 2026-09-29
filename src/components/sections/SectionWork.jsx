import React, { useEffect, useRef } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Briefcase, ArrowUpRight } from 'lucide-react';

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
    <section id="work" className="section-block section-work flat-spacing scroll-reveal">
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

              {/* Action buttons inside the image card for mobile or direct interaction */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
