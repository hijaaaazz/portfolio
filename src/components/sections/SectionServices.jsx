import React, { useState } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Sparkles, Plus, Minus } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const servicesData = [
    {
      id: 'mobile-app',
      title: 'Mobile App Engineering',
      tags: ['Flutter Architecture', 'Cross-Platform iOS & Android', 'State Management', 'REST APIs'],
      desc: 'I build fluid, high-performance mobile applications that balance visual appeal with responsive state architecture, offline persistence, and seamless native integration.',
      images: ['/images/cover.avif', '/images/BRTOT YPE.avif'],
    },
    {
      id: 'web-dev',
      title: 'Modern Web Engineering',
      tags: ['React.js Systems', 'JavaScript (ES6+)', 'SPA Architecture', 'Fast Responsive Layouts'],
      desc: 'Crafting responsive, performant web applications with clean component trees, fluid interactions, accessible semantics, and modern bundle optimizations.',
      images: ['/images/netflix.avif', '/images/youtube.avif'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX & Interface Design',
      tags: ['Figma Prototyping', 'Design Systems', 'Dark & Light Modes', 'Micro-interactions'],
      desc: 'Designing intuitive user interfaces, polished design systems, and thoughtful interaction flows that make digital products memorable and effortless to use.',
      images: ['/images/cover.avif', '/images/netflix.avif'],
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="services" className="section-block section-services scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Sparkles size={14} className="tag-icon" />
        <span>Services</span>
      </div>

      {/* Accordion List matching exact template */}
      <div className="services-template-accordion">
        {servicesData.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.id}
              className={`service-template-item ${isOpen ? 'is-open' : ''}`}
            >
              {/* Accordion Trigger */}
              <button
                className="service-template-trigger"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
              >
                <WordReveal as="h3" className="service-template-title" stagger={0.05} delay={0.02}>
                  {item.title}
                </WordReveal>
                <div className="service-template-toggle-icon">
                  <span className="service-template-plusminus"></span>
                </div>
              </button>

              {/* Accordion Collapsible Content with smooth expand & shrink animation */}
              <div className="service-template-collapsible">
                <div className="service-template-content-inner">
                  {/* Dual Image Showcase with Isak reference design */}
                  <div className="service-template-images-grid">
                    {item.images.map((img, iIdx) => (
                      <div key={iIdx} className="service-template-image-card">
                        <div className="service-template-wrap-image">
                          <img
                            src={img}
                            alt={item.title}
                            className="service-template-img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tag Pills */}
                  <div className="service-template-tags-row">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="service-template-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="service-template-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
