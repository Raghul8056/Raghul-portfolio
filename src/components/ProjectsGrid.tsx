'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ParticleCard, GlobalSpotlight, useMobileDetection } from './MagicBento';

const GLOW_COLOR = '255, 0, 85';

export default function ProjectsGrid() {
  const { projects } = PORTFOLIO_DATA;
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  return (
    <section id="projects" style={{ width: '100%', padding: '0 0 6rem' }}>
      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={isMobile}
        enabled={true}
        spotlightRadius={350}
        glowColor={GLOW_COLOR}
      />

      <div className="card-grid bento-section" ref={gridRef}>
        {projects.map((project) => {
          return (
            <ParticleCard
              key={project.id}
              className={`magic-bento-card magic-bento-card--border-glow`}
              style={{
                '--card-glow-color': GLOW_COLOR,
              }}
              disableAnimations={isMobile}
              particleCount={8}
              glowColor={GLOW_COLOR}
              enableTilt={false}
              clickEffect={true}
              enableMagnetism={false}
            >
              {/* Background image */}
              <div className="magic-bento-card__bg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  unoptimized={project.image.endsWith('.gif')}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="magic-bento-card__bg-overlay" />
              </div>

              {/* Header */}
              <div className="magic-bento-card__header">
                <span className="magic-bento-card__label">{project.category}</span>
                <span className="magic-bento-card__index">{project.index}</span>
              </div>

              {/* Content */}
              <div className="magic-bento-card__content">
                <h3 className="magic-bento-card__title">{project.title}</h3>
                <p className="magic-bento-card__description">{project.description}</p>
                <div className="magic-bento-card__chips">
                  {project.tech.map((t) => (
                    <span key={t} className="magic-bento-card__chip">{t}</span>
                  ))}
                </div>
                <a
                  href={project.link || '#'}
                  className="magic-bento-card__cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!project.link || project.link === '#') e.preventDefault();
                    e.stopPropagation();
                  }}
                  data-tooltip="The link will be direct soon"
                >
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </ParticleCard>
          );
        })}
      </div>
    </section>
  );
}
