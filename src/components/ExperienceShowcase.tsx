import { PORTFOLIO_DATA } from "@/data/portfolioData";
import styles from "./ExperienceShowcase.module.css";

const ROW_COLORS = ["#ff0055", "#1f5fd6", "#e8631a", "#0d7a5f"];

export default function ExperienceShowcase() {
  const { experience, certifications } = PORTFOLIO_DATA;

  return (
    <section id="experience-list" className={styles.section}>
      <div className="container">
        <p className={styles.kicker}>Experience &amp; Learning</p>

        {experience.map((item, i) => {
          const color = ROW_COLORS[i % ROW_COLORS.length];
          return (
            <div className={styles.row} key={item.id}>
              <div className={styles.rowText}>
                {item.current && <span className={styles.currentBadge}>Current</span>}
                <h3>
                  {item.company}{" "}
                  <span style={{ color, fontWeight: 400 }}>— {item.role}</span>
                </h3>
                <p className={styles.desc}>{item.description}</p>
                <p className={styles.meta}>
                  {item.location} · {item.period}
                </p>
              </div>

              <div className={styles.rowCards}>
                {item.points.map((point, idx) => (
                  <div
                    className={styles.card}
                    key={point}
                    style={{ borderTop: `3px solid ${color}` }}
                  >
                    <span className={styles.cardIndex} style={{ color }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className={styles.certs}>
          <h4>Certifications</h4>
          <div className={styles.certsList}>
            {certifications.map((c) => (
              <span key={c} className={styles.certChip}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
