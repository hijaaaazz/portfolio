import React from 'react';
import { portfolioContent } from '../data/portfolioContent';
import { Smartphone, Code, Palette, ArrowRight } from 'lucide-react';

export default function Services() {
  const { services } = portfolioContent;

  const getServiceIcon = (id) => {
    switch (id) {
      case 'app-dev':
        return <Smartphone className="service-icon" size={28} />;
      case 'web-dev':
        return <Code className="service-icon" size={28} />;
      case 'web-design':
        return <Palette className="service-icon" size={28} />;
      default:
        return <Code className="service-icon" size={28} />;
    }
  };

  return (
    <section id="services" className="section-block">
      <div className="section-container">
        <div className="section-header-row">
          <div>
            <span className="section-badge">{services.badge}</span>
            <h2 className="section-title">{services.heading}</h2>
            <p className="section-subtitle">{services.subtitle}</p>
          </div>
          <a href="#contact" className="btn-secondary-pill">
            Request Service
          </a>
        </div>

        <div className="services-grid">
          {services.items.map((item) => (
            <div key={item.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">{getServiceIcon(item.id)}</div>
                <span className="service-tag">{item.category}</span>
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.description}</p>
              <div className="service-card-footer">
                <span className="service-highlight">{item.highlight}</span>
                <a href="#contact" className="service-link">
                  <span>Inquire</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
