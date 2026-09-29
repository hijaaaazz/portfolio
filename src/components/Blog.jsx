import React from 'react';
import { portfolioContent } from '../data/portfolioContent';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const { blog } = portfolioContent;

  return (
    <section id="blog" className="section-block">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-title">{blog.heading}</h2>
            <p className="section-subtitle">{blog.subtitle}</p>
          </div>
          <a href="#blog" className="btn-secondary-pill">
            View blog
          </a>
        </div>

        {/* Blogs Carousel / Grid */}
        <div className="blogs-grid">
          {blog.posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-cover-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-cover-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="blog-badge-overlay">{post.category}</div>
              </div>

              <div className="blog-card-body">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-meta-row">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category-label">{post.category}</span>
                </div>
                <a href={post.url} className="blog-read-link">
                  <span>Read blog</span>
                  <ChevronRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
