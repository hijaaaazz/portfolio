import React from 'react';
import { portfolioContent } from '../data/portfolioContent';

export default function Stats() {
  const { stats } = portfolioContent;

  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-caption">{stat.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
