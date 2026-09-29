import React, { useEffect, useRef, useState } from 'react';
import { Layers } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionTech() {
  const [techVisible, setTechVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTechVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techItems = [
    {
      name: 'Flutter & Dart',
      duty: 'Cross-platform mobile apps',
      percent: 92,
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      name: 'React.js & JavaScript',
      duty: 'Interactive web applications',
      percent: 90,
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Figma',
      duty: 'Mobile & web UI/UX design',
      percent: 85,
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      name: 'Git & GitHub',
      duty: 'Version control & collaboration',
      percent: 88,
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
  ];

  return (
    <section ref={sectionRef} id="tech" className="section-block section-tech scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Layers size={14} className="tag-icon" />
        <span>Tech Stack</span>
      </div>

      <WordReveal as="h2" className="section-heading-large" stagger={0.04} delay={0.05}>
        See how my expertise with these<br className="d-none-mobile" /> tools drives better results
      </WordReveal>

      {/* Tech Stack List matching exact template */}
      <ul className="tech-template-list">
        {techItems.map((item, idx) => (
          <li key={idx} className="tech-template-item">
            <div className="tech-template-info">
              <div className="tech-template-icon-wrap">
                <img
                  src={item.iconSrc}
                  alt={item.name}
                  className="tech-template-icon"
                />
              </div>
              <div className="tech-template-meta">
                <h3 className="tech-template-name">{item.name}</h3>
                <p className="tech-template-duty">{item.duty}</p>
              </div>
            </div>

            {/* Pill Progress Bar with Percentage Inside matching screenshot */}
            <div className="tech-template-progress-wrap">
              <div
                className="tech-template-progress-bar"
                style={{
                  width: techVisible ? `${item.percent}%` : '0%',
                  transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + idx * 0.15}s`,
                }}
              >
                <span className="tech-template-percent-text">{item.percent}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
