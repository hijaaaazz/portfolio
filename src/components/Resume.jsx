import React from 'react';
import { portfolioContent } from '../data/portfolioContent';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

export default function Resume() {
  const { resume } = portfolioContent;

  return (
    <section id="experience" className="section-block">
      <div className="section-container">
        <div className="section-header-row">
          <div>
            <span className="section-badge">{resume.badge}</span>
            <h2 className="section-title">{resume.heading}</h2>
          </div>
        </div>

        <div className="resume-grid">
          {/* Education Column */}
          <div className="resume-column">
            <div className="resume-col-header">
              <div className="resume-icon-badge">
                <GraduationCap size={20} />
              </div>
              <h3 className="resume-col-title">Education</h3>
            </div>
            <div className="resume-cards-list">
              {resume.education.map((item, idx) => (
                <div key={idx} className="resume-card">
                  <div className="resume-card-time">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="resume-item-title">{item.degree}</h4>
                  <div className="resume-item-sub">
                    <span>{item.institution}</span>
                    {item.grade && <span className="grade-badge">{item.grade}</span>}
                  </div>
                  <p className="resume-item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="resume-column">
            <div className="resume-col-header">
              <div className="resume-icon-badge">
                <Briefcase size={20} />
              </div>
              <h3 className="resume-col-title">Experience & Training</h3>
            </div>
            <div className="resume-cards-list">
              {resume.experience.map((item, idx) => (
                <div key={idx} className="resume-card">
                  <div className="resume-card-time">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="resume-item-title">{item.role}</h4>
                  <div className="resume-item-sub">
                    <span className="company-name">{item.company}</span>
                  </div>
                  <p className="resume-item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
