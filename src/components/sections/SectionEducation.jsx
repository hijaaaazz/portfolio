import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

export default function SectionEducation() {
  const sectionRef = useRef(null);
  const spineRef = useRef(null);
  const fillRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    let rafId = null;

    const updateSpine = () => {
      if (!spineRef.current || !fillRef.current) return;
      const rect = spineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when the top of the spine enters roughly 80% of viewport
      const startY = windowHeight * 0.82;
      // Finish filling when the bottom of the spine reaches around 35% of viewport
      const endY = windowHeight * 0.35;

      const totalDist = (rect.bottom - rect.top) + (startY - endY);
      const currentPos = startY - rect.top;

      let ratio = currentPos / totalDist;
      ratio = Math.max(0, Math.min(1, ratio));

      const percentage = ratio * 100;
      fillRef.current.style.height = `${percentage}%`;

      // Update rows and dots smoothly
      rowsRef.current.forEach((row, idx) => {
        if (!row) return;
        const total = rowsRef.current.length;
        const threshold = total > 1 ? (idx / (total - 1)) * 80 : 0;
        if (percentage >= threshold) {
          row.classList.add('is-animated');
        } else {
          row.classList.remove('is-animated');
        }
      });
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateSpine);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateSpine(); // run on initial mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const timelineData = [
    {
      period: 'Dec 2025 - Present',
      role: 'Flutter Developer',
      company: 'Madariz Impex Pvt. Ltd.',
      description:
        'Collaborated on the development and maintenance of Filumart, a global B2B e-commerce platform on Android and iOS. Built product listing, order management, authentication, FCM push notifications, WebSockets, biometric auth, and managed Google Play & App Store releases.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      period: 'May 2024 - Aug 2025',
      role: 'Flutter Development Program',
      company: 'Brototype Kochi',
      description:
        'Completed intensive project-based engineering program focused on Flutter, Firebase, Clean Architecture, BLoC/Provider state management, deployment workflows, and collaborative software development.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      period: '2022 - 2024',
      role: 'Higher Secondary Education (+2)',
      company: 'GMHSS Perinthalmanna',
      description:
        'Commerce with Computer Applications. Graduated with academic distinction, building strong fundamentals in software concepts, database management, and problem solving.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="section-block section-education flat-spacing scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Briefcase size={14} className="tag-icon" />
        <span>Education & Experience</span>
      </div>

      {/* Timeline matching exact template */}
      <div className="timeline-template-wrap">
        {/* Dynamic scroll-linked filling & unfilling spine */}
        <div ref={spineRef} className="timeline-vertical-spine-base">
          <div
            ref={fillRef}
            className="timeline-vertical-spine-fill"
          />
        </div>

        <div className="timeline-items-list">
          {timelineData.map((item, idx) => {
            return (
              <div
                key={idx}
                ref={(el) => (rowsRef.current[idx] = el)}
                className="timeline-entry-row"
              >
                <span className="timeline-entry-date">{item.period}</span>
                
                <div className="timeline-entry-dot" />

                <div className="timeline-entry-body">
                  <div className="timeline-entry-icon">{item.icon}</div>
                  <h3 className="timeline-entry-role">{item.role}</h3>
                  <p className="timeline-entry-company">{item.company}</p>
                  <p className="timeline-entry-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
