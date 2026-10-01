import React, { useState, useEffect, useRef } from 'react';
import { portfolioContent } from '../../content';
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

function StatCounterItem({ target, symbol = '+', label, isVisible }) {
  const count = useCounter(target, isVisible);
  return (
    <div className="home-stat-box">
      <p className="stat-large-val">
        {count}
        <span className="stat-symbol">{symbol}</span>
      </p>
      <p className="stat-caption-text">{label}</p>
    </div>
  );
}

export default function SectionHome({ theme }) {
  const isDark = theme !== 'light';
  const { brand, home } = portfolioContent;
  const timeZone = brand?.timezone || 'Asia/Kolkata';

  const [currentDateTime, setCurrentDateTime] = useState({ date: '', time: '' });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const dateStr = now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone,
        });
        const timeStr = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone,
        });
        setCurrentDateTime({ date: dateStr, time: timeStr });
      } catch {
        // Fallback if invalid timezone string
        setCurrentDateTime({
          date: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
        });
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

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

  const headline = home?.headline || {
    prefix: "I’m building",
    pill1: "mobile apps",
    pill2: "& scalable systems",
    suffix: "that people remember",
  };

  const stats = home?.stats || [
    { value: 3, symbol: '+', label: 'Completed Projects' },
    { value: 85, symbol: '%', label: 'Academic Distinction (+2)' },
    { value: 2, symbol: '+', label: 'Years Practical Engineering' },
  ];

  const tickerItems = home?.ticker?.items || [
    'Flutter Apps',
    'Clean Architecture',
    'BLoC State Management',
    'Dart',
    'Firebase & FCM',
    'REST APIs & WebSockets',
    'Hive & SQLite',
    'App Store & Play Store',
  ];

  const tickerTitle = home?.ticker?.title || 'Core Specialties & Skills (2024–26©)';

  return (
    <section id="home" className="section-home">
      {/* Top Header Row with Author Mini Badge and Live Clock */}
      <div className="home-top-meta-row">
        <div className="home-author-mini-card">
          <div className="mini-avatar-wrapper">
            <img
              src={brand?.avatar || '/images/hijaz-portrait.png'}
              alt={brand?.name || 'Author portrait'}
              className="mini-avatar-img"
            />
          </div>
          <div className="mini-avatar-info">
            <p className="mini-author-name">{brand?.name || 'Author Name'}</p>
            <p className="mini-author-title">{brand?.tagline || 'Developer'}</p>
          </div>
        </div>

        {/* Top-Right Live Date & Time matching screenshot */}
        <div className="home-live-clock">
          <span className="clock-date-text">{currentDateTime.date}</span>
          <span className="clock-time-text">{currentDateTime.time}</span>
          <span className="clock-live-accent" />
        </div>
      </div>

      {/* Giant Main Headline */}
      <div className="home-headline-box">
        <h1 className="home-giant-title hero-headline-fade">
          {headline.prefix}{' '}
          <span className="badge-pill-neon animated-pill">{headline.pill1}</span>{' '}
          <span className="badge-pill-dark animated-pill">{headline.pill2}</span>{' '}
          {headline.suffix}
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
          {stats.map((stat, idx) => (
            <StatCounterItem
              key={idx}
              target={stat.value}
              symbol={stat.symbol}
              label={stat.label}
              isVisible={statsVisible}
            />
          ))}
        </div>

        {/* Infinite Core Specialties & Skills Ticker */}
        <div className="home-client-ticker-bar">
          <div className="ticker-label-lead">
            <Globe size={15} className="ticker-globe-icon" />
            <span>{tickerTitle}</span>
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
