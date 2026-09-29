import React, { useRef, useState } from 'react';
import { portfolioContent } from '../data/portfolioContent';
import { ChevronLeft, ChevronRight, ArrowUpRight, ExternalLink } from 'lucide-react';

// Crisp inline GitHub SVG
function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const { projects } = portfolioContent;
  const scrollContainerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects.items
    : projects.items.filter((p) => p.category === activeCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="section-block dark-contrast-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-title">{projects.heading}</h2>
            <p className="section-subtitle">{projects.subtitle}</p>
          </div>
          <div className="header-actions">
            <a
              href="https://github.com/hijaaaazz"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-pill"
            >
              <span>View GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="project-categories">
          {projects.categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel / Grid of Project Cards */}
        <div className="projects-carousel-wrapper" ref={scrollContainerRef}>
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Media Container */}
              <div className="project-media-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="project-media-overlay">
                  <div className="media-badge">{project.category}</div>
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.subtitle}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span className="project-date">{project.date}</span>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        title="Source Code"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link"
                      >
                        <span>View live</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-nav-controls">
          <button
            className="carousel-arrow-btn"
            onClick={() => scroll('left')}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="carousel-arrow-btn"
            onClick={() => scroll('right')}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
