import React, { useState } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { BookOpen, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionBlog() {
  const { blog } = portfolioContent;
  const posts = blog.posts || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPost = posts[currentIndex] || posts[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="blog" className="section-block section-blog scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <BookOpen size={14} className="tag-icon" />
        <span>Insights & Articles</span>
      </div>

      {/* Top Split Layout: Heading + Bullets on left, Featured Card on right */}
      <div className="blog-showcase-top-row">
        <div className="blog-showcase-heading-wrap">
          <WordReveal as="h2" className="section-heading-large" stagger={0.04} delay={0.05}>
            Here's what<br />I am saying
          </WordReveal>

          {/* Key Engineering & Architectural Bullet Highlights */}
          <ul className="blog-highlights-bullets">
            <li className="blog-bullet-item">
              <span className="blog-bullet-dot" />
              <span>Architectural purity with BLoC &amp; Clean Architecture</span>
            </li>
            <li className="blog-bullet-item">
              <span className="blog-bullet-dot" />
              <span>Offline-first resilience with Hive &amp; SQLite local caching</span>
            </li>
            <li className="blog-bullet-item">
              <span className="blog-bullet-dot" />
              <span>Reactive event-driven mobile apps with WebSockets &amp; FCM</span>
            </li>
          </ul>
        </div>

        {/* Right Featured Visual Card (Smooth rounded portrait aesthetic) */}
        <div className="blog-showcase-featured-visual">
          <div className="blog-showcase-image-wrapper">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="blog-showcase-cover-img"
              key={currentPost.id}
            />
            <div className="blog-showcase-image-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Bottom Content Area: Green Quote Icon, Main Quote Text, Meta & Navigation */}
      <div className="blog-showcase-bottom-area">
        {/* Neon Green Double Quote Glyph */}
        <div className="blog-showcase-quote-mark" aria-hidden="true">
          <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5 0C8.5 0 2 6.5 0 16.5C0 17.5 0.5 18.5 1.5 19C2 19 3 19 3.5 18.5C6 16.5 9 15 12 15C15 15 17.5 17.5 17.5 20.5C17.5 24.5 14 28 10 28C4.5 28 0 23.5 0 17.5C0 7.5 7.5 0 17.5 0ZM41.5 0C32.5 0 26 6.5 24 16.5C24 17.5 24.5 18.5 25.5 19C26 19 27 19 27.5 18.5C30 16.5 33 15 36 15C39 15 41.5 17.5 41.5 20.5C41.5 24.5 38 28 34 28C28.5 28 24 23.5 24 17.5C24 7.5 31.5 0 41.5 0Z"
              fill="var(--neon-green)"
            />
          </svg>
        </div>

        {/* Main Prominent Quote / Summary Text */}
        <blockquote className="blog-showcase-quote-text" key={`quote-${currentIndex}`}>
          “{currentPost.summary}”
        </blockquote>

        {/* Footer Meta Row: Author/Topic info left, Index indicator and Slider Controls right */}
        <div className="blog-showcase-footer-nav">
          <div className="blog-showcase-author-info">
            <h4 className="blog-showcase-title">{currentPost.title}</h4>
            <p className="blog-showcase-subtitle">
              <span>{currentPost.category}</span> • <span>{currentPost.readTime}</span>
            </p>
          </div>

          {posts.length > 1 && (
            <div className="blog-showcase-controls">
              <span className="blog-showcase-index">
                {currentIndex + 1}/{posts.length}
              </span>

              <div className="blog-nav-buttons-group">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="blog-slider-arrow-btn"
                  aria-label="Previous article"
                  title="Previous article"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="blog-slider-arrow-btn"
                  aria-label="Next article"
                  title="Next article"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
