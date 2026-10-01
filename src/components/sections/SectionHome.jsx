import React, { useState, useEffect, useRef } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Globe } from 'lucide-react';
import InteractiveCarromStriker from '../InteractiveCarromStriker';

function useCounter(target, isVisible, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target, duration]);

  return count;
}

export default function SectionHome({ theme }) {
  const isDark = theme !== 'light';
  const [currentDateTime, setCurrentDateTime] = useState({ date: 'Mon, Sep 28', time: '12:00' });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'Asia/Kolkata',
      });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      setCurrentDateTime({ date: dateStr, time: timeStr });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
        setStatsVisible(true);
        return;
      }
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const countProjects = useCounter(3, statsVisible, 1400);
  const countDistinction = useCounter(85, statsVisible, 1500);
  const countYears = useCounter(2, statsVisible, 1200);

  const tickerItems = [
    'Flutter Apps',
    'Clean Architecture',
    'BLoC State Management',
    'Dart',
    'Firebase & FCM',
    'REST APIs & WebSockets',
    'Hive & SQLite',
    'App Store & Play Store',
  ];

  return (
    <section id="home" className="section-home">
      {/* Top Header Row with Author Mini Badge and Live Clock */}
      <div className="home-top-meta-row">
        <div className="home-author-mini-card">
          <div className="mini-avatar-wrapper">
            <img
              src="/images/hijaz-portrait.png"
              alt="Hijaz C"
              className="mini-avatar-img"
            />
          </div>
          <div className="mini-avatar-info">
            <p className="mini-author-name">Hijaz C</p>
            <p className="mini-author-title">Flutter Developer</p>
          </div>
        </div>

        {/* Top-Right Live Date & Time matching screenshot */}
        <div className="home-live-clock">
          <span className="clock-date-text">{currentDateTime.date}</span>
          <span className="clock-time-text">{currentDateTime.time}</span>
          <span className="clock-live-accent" />
        </div>
      </div>

      {/* Giant Main Headline customized to Flutter & mobile app domain */}
      <div className="home-headline-box">
        <h1 className="home-giant-title hero-headline-fade">
          I’m building{' '}
          <span className="badge-pill-neon animated-pill">mobile apps</span>{' '}
          <span className="badge-pill-dark animated-pill">&amp; scalable systems</span> that people remember
        </h1>
      </div>

      {/* Circular Rotating Wireframe Stamp Showcase - Interactive Carrom Striker */}
      <div className="home-stamp-showcase">
        <InteractiveCarromStriker isDark={isDark} />
      </div>

      {/* Bottom Group: Metric Counters + Infinite Core Specialties Ticker */}
      <div className="home-bottom-group">
        {/* Metric Counters Grid with count-up animation */}
        <div ref={statsRef} className="home-stats-row">
          <div className="home-stat-box">
            <p className="stat-large-val">
              {countProjects}<span className="stat-symbol">+</span>
            </p>
            <p className="stat-caption-text">Completed Projects</p>
          </div>

          <div className="home-stat-box">
            <p className="stat-large-val">
              {countDistinction}<span className="stat-symbol">%</span>
            </p>
            <p className="stat-caption-text">Academic Distinction (+2)</p>
          </div>

          <div className="home-stat-box">
            <p className="stat-large-val">
              {countYears}<span className="stat-symbol">+</span>
            </p>
            <p className="stat-caption-text">Years Practical Engineering</p>
          </div>
        </div>

        {/* Infinite Core Specialties & Skills Ticker matching reference */}
        <div className="home-client-ticker-bar">
          <div className="ticker-label-lead">
            <Globe size={15} className="ticker-globe-icon" />
            <span>Core Specialties & Skills (2024–26©)</span>
          </div>

          <div className="ticker-slider-wrapper">
            <div className="ticker-animated-track">
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                <div key={idx} className="ticker-chip">
                  <span>{item}</span>
                  <span className="ticker-bullet">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
