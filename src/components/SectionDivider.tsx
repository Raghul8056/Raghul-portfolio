import styles from "./SectionDivider.module.css";

interface SectionDividerProps {
  id?: string;
  title: string;
  description: string;
  list?: { label: string; suffix?: string }[];
}

export default function SectionDivider({
  id,
  title,
  description,
  list,
}: SectionDividerProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>

        {list && list.length > 0 && (
          <ol className={styles.list}>
            {list.map((item, i) => (
              <li key={item.label}>
                <span className={styles.listIndex}>
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className={styles.listLabel}>{item.label}</span>
                {item.suffix && (
                  <span className={styles.listSuffix}> — {item.suffix}</span>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
