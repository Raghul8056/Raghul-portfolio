import { Sparkles, Pencil, Code2, Rocket, ArrowRight } from "lucide-react";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
  return (
    <div className={styles.resumeSection}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Experience</h3>
          <p className={styles.details}>
            <strong>Pepul</strong><br />
            Graphic Designer<br />
            Chennai, India<br />
            2026 – Present
          </p>
          <p className={styles.details} style={{ marginTop: '1.25rem' }}>
            <strong>United India Insurance</strong><br />
            Full Stack Developer Intern<br />
            Chennai, India<br />
            2025
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Softwares</h3>
          <p className={styles.details}>
            Figma<br />
            Adobe Photoshop<br />
            Adobe Illustrator<br />
            Antigravity<br />
            DaVinci Resolve<br />
            Adobe After Effects
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Education</h3>
          <p className={styles.details}>
            <strong>Saraswathy College of Engineering and Technology</strong><br />
            Bachelor of Engineering 2026
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title} style={{ whiteSpace: 'nowrap' }}>Tech Stack</h3>
          <p className={styles.details}>
            Python<br />
            Node.js<br />
            Next.js<br />
            React<br />
            PostgreSQL<br />
            Supabase<br />
            GitHub (Source Control)
          </p>
        </div>
      </div>
      <div className={styles.bottomDivider} />
      <div className={styles.selectedWorkSection}>
        <div className={styles.eyebrowTag}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          <span>01 / SELECTED WORK</span>
        </div>

        <div className={styles.mainHeaderGrid}>
          {/* Column 1 */}
          <div className={styles.giantTitleCol}>
            <h2 className={styles.giantTitle}>
              Ideas, Designed.<br />
              <span className="accent-pink">
                Products,{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  Built.
                  <svg
                    className={styles.swoosh}
                    viewBox="0 0 200 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={styles.swooshPath}
                      d="M 5 15 Q 100 0 195 10"
                      stroke="var(--accent)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      pathLength="1"
                    />
                  </svg>
                </span>
              </span>
            </h2>
          </div>

          {/* Column 2 */}
          <div className={styles.metaColumn}>
            <div className={styles.metaTags}>
              GRAPHIC DESIGN <span className={styles.metaCross}>×</span> DEVELOPMENT <span className={styles.metaCross}>×</span> AI
            </div>
            <p className={styles.metaDesc}>
              Turning ideas into real,<br />usable digital products.
            </p>
          </div>

          {/* Column 3 */}
          <div className={styles.statsColumn}>
            <div className={styles.statNumber}>07</div>
            <div className={styles.statLabel}>PROJECTS<br/>SHIPPED</div>
          </div>
        </div>

        {/* Process Pill */}
        <div className={styles.processPill}>
          <div className={styles.processStep} style={{ '--step-delay': '0s' } as React.CSSProperties}>
            <div className={styles.processIcon}><Pencil size={14} /></div>
            <span>DESIGN</span>
          </div>
          <ArrowRight size={14} className={styles.processArrow} />
          <div className={styles.processStep} style={{ '--step-delay': '2s' } as React.CSSProperties}>
            <div className={styles.processIcon}><Code2 size={14} /></div>
            <span>BUILD</span>
          </div>
          <ArrowRight size={14} className={styles.processArrow} />
          <div className={styles.processStep} style={{ '--step-delay': '4s' } as React.CSSProperties}>
            <div className={styles.processIcon}><Rocket size={14} /></div>
            <span>SHIP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
