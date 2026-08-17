import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { LinkIcon, MailIcon, PhoneIcon } from "./Icons";
import styles from "./ContactFooter.module.css";

export default function ContactFooter() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.top}`}>
        <div>
          <p className={styles.name}>{personal.name}</p>
          <p className={styles.line}>{personal.role}</p>
          <p className={styles.line}>{personal.company}</p>
          <p className={styles.line}>{personal.email}</p>
        </div>

        <div className={styles.colCenter}>
          <p className={`${styles.line} ${styles.handle}`}>{personal.linkedinHandle}</p>
          <div className={styles.social}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkIcon size={16} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <MailIcon size={16} />
            </a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`} aria-label="Phone">
              <PhoneIcon size={16} />
            </a>
          </div>
        </div>

        <div className={styles.colRight}>
          <p className={styles.line}>{personal.title}</p>
          <p className={styles.line}>{personal.tagline}</p>
        </div>
      </div>

      <a href={`mailto:${personal.email}`} className={styles.giantLink}>
        <h2 className={styles.giant}>THANK&nbsp;YOU</h2>
      </a>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {personal.name}. {personal.location}.
        </p>
        <a href={`mailto:${personal.email}`} className={styles.cta}>
          Let&apos;s work together →
        </a>
      </div>
    </section>
  );
}
