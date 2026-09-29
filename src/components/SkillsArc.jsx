import React from 'react';
import { portfolioContent } from '../data/portfolioContent';
import {
  Code2,
  Smartphone,
  FileCode2,
  Layers,
  Sparkles,
  GitBranch,
  Layout,
  Terminal,
  Cpu,
  Server,
  CornerDownLeft,
  CheckCircle2,
  Folder,
  Boxes,
  Code
} from 'lucide-react';

export default function SkillsArc() {
  const { brand } = portfolioContent;

  // Arc icons matching the visual curved ribbon in the screenshot
  const arcIcons = [
    { icon: Sparkles, label: "Design", angle: -65 },
    { icon: CheckCircle2, label: "Quality", angle: -52 },
    { icon: Code2, label: "React", angle: -39 },
    { icon: Layout, label: "UI Systems", angle: -26 },
    { icon: Folder, label: "Architecture", angle: -13 },
    { icon: Sparkles, label: "Innovation", angle: 0, active: true },
    { icon: Code, label: "Frontend", angle: 13 },
    { icon: Smartphone, label: "Flutter", angle: 26 },
    { icon: Terminal, label: "Terminal", angle: 39 },
    { icon: CornerDownLeft, label: "Logic", angle: 52 },
    { icon: GitBranch, label: "Git", angle: 65 },
    { icon: Boxes, label: "State", angle: 78 },
  ];

  return (
    <section className="statement-section">
      <div className="statement-container">
        {/* Curved Floating Arc Ribbon */}
        <div className="arc-wrapper">
          <div className="arc-curve">
            {arcIcons.map((item, index) => {
              const IconComp = item.icon;
              // Calculate subtle arch offsets for quadratic curve visualization
              const count = arcIcons.length;
              const normalized = (index - (count - 1) / 2) / ((count - 1) / 2); // -1 to +1
              const yOffset = -Math.pow(normalized, 2) * 45; // parabolic curve

              return (
                <div
                  key={index}
                  className={`arc-icon-circle ${item.active ? 'arc-active' : ''}`}
                  style={{
                    transform: `translateY(${yOffset}px)`,
                  }}
                  title={item.label}
                >
                  <IconComp size={18} className="arc-icon-glyph" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Big Bold Statement */}
        <div className="statement-typography">
          <p className="statement-text">
            <strong className="statement-brand">{brand.name}</strong> is a dedicated developer crafting high-performance mobile apps and responsive digital experiences with modern web technologies.
            <span className="typing-cursor">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
