import React, { useState } from 'react';
import { portfolioContent } from '../../content';
import { Sparkles } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionServices() {
  const [openIndex, setOpenIndex] = useState(0);
  const [stackedOpenMap, setStackedOpenMap] = useState({});

  const servicesData = portfolioContent.services?.items || [];
  const badge = portfolioContent.services?.badge || 'Services';

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const toggleStacked = (idx) => {
    setStackedOpenMap((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="services" className="section-block section-services">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Sparkles size={14} className="tag-icon" />
        <span>{badge}</span>
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
                <div className={`service-template-content-inner ${stackedOpenMap[idx] ? 'is-stacked-open' : ''}`}>
                  {/* Dual Image Showcase with Isak reference design */}
                  <div
                    className="service-template-images-grid"
                    onClick={() => toggleStacked(idx)}
                    title="Click or hover to reveal cards"
                  >
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

                  <p className="service-template-desc">{item.description || item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
