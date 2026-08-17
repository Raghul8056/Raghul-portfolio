import type { ProjectCase as ProjectCaseType } from "@/data/portfolioData";
import styles from "./ProjectCase.module.css";

export default function ProjectCase({ project }: { project: ProjectCaseType }) {
  return (
    <section id={project.id} className={styles.section}>
      {/* Split intro */}
      <div className={styles.split}>
        <div className={styles.splitLeft} style={{ background: project.bg }}>
          <p className={styles.eyebrow} style={{ color: project.accent }}>
            {project.category}
          </p>
          <h3 className={styles.title} style={{ color: project.fg }}>
            {project.title}
          </h3>
          {project.client && (
            <p className={styles.client} style={{ color: project.fg, opacity: 0.7 }}>
              {project.client}
            </p>
          )}
          <p className={styles.desc} style={{ color: project.fg, opacity: 0.85 }}>
            {project.description}
          </p>
          <p className={styles.period} style={{ color: project.accent }}>
            {project.period}
          </p>
        </div>

        <div className={styles.splitRight} style={{ background: project.accent }}>
          <span className={styles.index}>{project.index}</span>
        </div>
      </div>

      {/* Points banner */}
      <div className={styles.pointsBanner}>
        <div className="container">
          <div className={styles.pointsGrid}>
            {project.points.map((point) => (
              <div key={point} className={styles.point}>
                <span
                  className={styles.pointDot}
                  style={{ background: project.accent }}
                  aria-hidden="true"
                />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className={styles.techRow}>
            {project.tech.map((t) => (
              <span
                key={t}
                className={styles.techChip}
                style={{ borderColor: project.accent, color: project.accent }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
