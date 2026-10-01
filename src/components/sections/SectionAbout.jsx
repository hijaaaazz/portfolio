import React from 'react';
import { portfolioContent } from '../../content';
import { User } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionAbout() {
  const aboutData = portfolioContent.about || {};
  const badge = aboutData.badge || 'About';
  const heading = aboutData.heading || 'Engineering scalable mobile apps with Flutter, clean architecture, and robust code';
  const paragraphs = aboutData.paragraphs || [
    'I am a Flutter Developer with 2+ years of application engineering experience, including 8+ months in professional industry production.',
  ];
  const competencies = aboutData.competencies || [];

  return (
    <section id="about" className="section-block section-about flat-spacing">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <User size={14} className="tag-icon" />
        <span>{badge}</span>
      </div>

      {/* Main Narrative Heading */}
      <WordReveal as="h2" className="section-heading-large" stagger={0.04} delay={0.05}>
        {heading}
      </WordReveal>

      {/* Narrative Description */}
      <div className="about-desc-clean">
        {paragraphs.map((para, idx) => (
          <WordReveal key={idx} as="p" stagger={0.02} delay={0.15 + idx * 0.1}>
            {para}
          </WordReveal>
        ))}
      </div>

      {/* Key Milestones & Capabilities List */}
      {competencies.length > 0 && (
        <ul className="award-list-clean">
          {competencies.map((item, idx) => (
            <li key={idx} className="award-item-clean">
              <div className="award-left">
                <h3 className="award-name">{item.title}</h3>
                <p className="award-desc">{item.organization}</p>
              </div>
              <span className="award-year">{item.year}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
