import { PORTFOLIO_DATA } from "@/data/portfolioData";
import styles from "./TechGrid.module.css";

export default function TechGrid() {
  const { tech } = PORTFOLIO_DATA;

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.grid}>
        {tech.map((item) => (
          <div
            key={item.name}
            className={styles.cell}
            style={{ background: item.bg, color: item.fg }}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
