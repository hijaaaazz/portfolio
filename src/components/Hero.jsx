import React from 'react';
import HLogo from './HLogo';
import { portfolioContent } from '../data/portfolioContent';
import { Monitor, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { brand } = portfolioContent;

  return (
    <section id="overview" className="hero-section">
      {/* Particle stardust canvas background */}
      <div className="hero-particles" aria-hidden="true">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
        <span className="particle p6" />
        <span className="particle p7" />
        <span className="particle p8" />
      </div>

      <div className="hero-container">
        {/* Central Logo & Identifier */}
        <div className="hero-badge">
          <HLogo size={24} />
          <span className="hero-badge-title">Hijaz C</span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-headline">
          Experience liftoff with next-gen web & mobile applications
        </h1>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#work" className="btn-hero-primary">
            <Monitor size={18} />
            <span>Explore Projects</span>
          </a>
          <a href="#services" className="btn-hero-secondary">
            <span>Explore Services</span>
          </a>
        </div>

        {/* Micro availability status */}
        <div className="hero-status">
          <span className="status-ping" />
          <span>{brand.badge}</span>
        </div>
      </div>
    </section>
  );
}
