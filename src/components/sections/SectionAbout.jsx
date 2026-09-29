import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { portfolioContent } from '../../data/portfolioContent';
import { User } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionAbout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ clientX: 0, clientY: 0 });

  // Competencies & Milestones from Resume (Filumart, Skilnk, Invento, Package)
  const competencies = [
    {
      title: 'Production Mobile Engineering',
      organization: 'Filumart B2B Platform (Android & iOS)',
      year: '2025',
      image: '/images/cover.avif',
    },
    {
      title: 'Offline-First Application Architecture',
      organization: 'Invento – Google Play Store Release',
      year: '2024',
      image: '/images/youtube.avif',
    },
    {
      title: 'Multi-Platform Learning Ecosystem',
      organization: 'Skilnk – Student & Tutor Platform',
      year: '2024',
      image: '/images/netflix.avif',
    },
    {
      title: 'Open Source Package Author',
      organization: 'Floating Custom Navbar (pub.dev)',
      year: '2024',
      image: '/images/BRTOT YPE.avif',
    },
    {
      title: 'Distinction in Computer Commerce',
      organization: 'GMHSS Perinthalmanna (+2)',
      year: '2024',
      image: '/images/BRTOT YPE.avif',
    },
  ];

  // Global window listeners when an item is hovered:
  // 1. Tracks window-level pointermove for zero-lag coordinates directly under cursor
  // 2. Dismisses on scroll so the overlay never gets orphaned
  useEffect(() => {
    if (hoveredIndex === null) return;

    const handlePointerMove = (e) => {
      setMousePos({
        clientX: e.clientX,
        clientY: e.clientY,
      });
    };

    const handleScroll = () => {
      setHoveredIndex(null);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hoveredIndex]);

  return (
    <section id="about" className="section-block section-about flat-spacing scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <User size={14} className="tag-icon" />
        <span>About</span>
      </div>

      {/* Main Narrative Heading */}
      <WordReveal as="h2" className="section-heading-large" stagger={0.04} delay={0.05}>
        Engineering scalable mobile apps<br className="d-none-mobile" /> with Flutter, clean architecture,<br className="d-none-mobile" /> and robust code
      </WordReveal>

      {/* Narrative Description without boxed division */}
      <div className="about-desc-clean">
        <WordReveal as="p" stagger={0.02} delay={0.15}>
          I am a Flutter Developer with 2+ years of application engineering experience, including 8+ months in professional industry production. Experienced in architecting, building, deploying, and maintaining Android and iOS applications using Flutter and Dart.
        </WordReveal>
        <WordReveal as="p" stagger={0.02} delay={0.25}>
          Skilled in Clean Architecture, BLoC state management, Firebase, REST APIs, WebSockets, local persistence (Hive &amp; SQLite), and store deployments across Google Play Console and Apple App Store Connect.
        </WordReveal>
      </div>

      {/* Key Milestones & Capabilities List with exact floating cursor preview */}
      <ul 
        className="award-list-clean"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {competencies.map((item, idx) => (
          <li
            key={idx}
            className="award-item-clean"
            onMouseEnter={(e) => {
              setHoveredIndex(idx);
              setMousePos({ clientX: e.clientX, clientY: e.clientY });
            }}
          >
            <div className="award-left">
              <h3 className="award-name">{item.title}</h3>
              <p className="award-desc">{item.organization}</p>
            </div>
            <span className="award-year">{item.year}</span>
          </li>
        ))}
      </ul>

      {/* Floating cursor-following thumbnail preview mounted directly to document.body via createPortal */}
      {hoveredIndex !== null && typeof document !== 'undefined' && createPortal(
        <div
          className="award-hover-floating-box"
          style={{
            left: `${mousePos.clientX}px`,
            top: `${mousePos.clientY}px`,
          }}
        >
          <img
            src={competencies[hoveredIndex].image}
            alt={competencies[hoveredIndex].title}
            className="award-hover-img"
          />
        </div>,
        document.body
      )}
    </section>
  );
}
