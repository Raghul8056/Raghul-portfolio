import styles from './ApproachSection.module.css';
import { 
  Lightbulb, PenTool, Code2, Monitor, Database, Palette, Cloud, Zap, Check, 
  Laptop, Users, Rocket, Heart
} from 'lucide-react';

export default function ApproachSection() {
  return (
    <section className={styles.approachSection}>
      <div className={styles.mainGrid}>
        
        {/* ======================= */}
        {/* LEFT COLUMN: Text & Process */}
        {/* ======================= */}
        <div className={styles.leftColumn}>
          
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            MY APPROACH
          </div>
          
          <h2 className={styles.giantTitle}>
            DESIGN <span className={styles.pinkCross}>×</span> CODE
            <svg className={styles.titleUnderline} viewBox="0 0 200 20" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
              <path className={styles.animatedDraw} d="M 5 15 Q 100 0 195 10" stroke="#ff0055" strokeWidth="6" strokeLinecap="round" pathLength="1" />
            </svg>
          </h2>
          
          <div className={styles.subtitleBlock}>
            <p className={styles.subText}>I don&rsquo;t just design the interface.</p>
            <p className={styles.subTextBold}>
              I <span className={styles.pinkText}>build the experience.</span>
            </p>
          </div>

          {/* Workflow Cards */}
          <div className={styles.workflowGrid}>
             {/* Step 1 */}
             <div className={styles.stepCard}>
               <div className={styles.stepIconWrap}><Lightbulb size={24} /></div>
               <div className={styles.stepHeader}>
                 <span className={styles.stepNum}>01</span>
                 <span className={styles.stepTitle}>IDEATE</span>
               </div>
               <ul className={styles.stepList}>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Understand problem</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Research users</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Share ideas</li>
               </ul>
             </div>

             <div className={styles.arrowIcon}>→</div>

             {/* Step 2 */}
             <div className={styles.stepCard}>
               <div className={styles.stepIconWrap}><PenTool size={24} /></div>
               <div className={styles.stepHeader}>
                 <span className={styles.stepNum}>02</span>
                 <span className={styles.stepTitle}>DESIGN</span>
               </div>
               <ul className={styles.stepList}>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Figma prototypes</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Design system</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> User experience</li>
               </ul>
             </div>

             <div className={styles.arrowIcon}>→</div>

             {/* Step 3 */}
             <div className={styles.stepCard}>
               <div className={styles.stepIconWrap}><Code2 size={24} /></div>
               <div className={styles.stepHeader}>
                 <span className={styles.stepNum}>03</span>
                 <span className={styles.stepTitle}>BUILD</span>
               </div>
               <ul className={styles.stepList}>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> React / Next.js</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> APIs &amp; Backend</li>
                 <li><Check size={14} color="#ff0055" strokeWidth={3}/> Deployment</li>
               </ul>
             </div>
          </div>

          {/* Tech Stack Row */}
          <div className={styles.techStackRow}>
            <div className={styles.techStackLabel}>
              <span className={styles.pinkPipe}></span> TECH STACK
            </div>
            <div className={styles.techPills}>
              <span className={styles.techPill} style={{ '--pill-delay': '0s' } as React.CSSProperties}>
                 <svg viewBox="0 0 38 57" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
                 Figma
              </span>
              <span className={styles.techPill} style={{ '--pill-delay': '0.4s' } as React.CSSProperties}>
                 <svg width="14" height="14" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"/><ellipse rx="10" ry="4.5" transform="rotate(60)"/><ellipse rx="10" ry="4.5" transform="rotate(120)"/></g></svg>
                 React
              </span>
              <span className={styles.techPill} style={{ '--pill-delay': '0.8s' } as React.CSSProperties}>
                 <strong style={{fontSize: '14px', lineHeight: 1}}>N.</strong> Next.js
              </span>
              <span className={styles.techPill} style={{ '--pill-delay': '1.2s' } as React.CSSProperties}>
                 <svg width="14" height="14" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.7 15.6c-13.8 0-21.5 8-23 20l8.1-11.2c5-5.3 11.2-6.5 18-3.4 4.5 2 7.7 6.4 11.2 11.3C60.2 40 66 48.2 78.8 48.2c13.8 0 21.5-8 23-20l-8.1 11.2c-5 5.3-11.2 6.5-18 3.4-4.5-2-7.7-6.4-11.2-11.3-4.2-7.7-10-15.9-22.8-15.9z" fill="#38bdf8"/></svg>
                 Tailwind CSS
              </span>
              <span className={styles.techPill} style={{ '--pill-delay': '1.6s' } as React.CSSProperties}>
                 <strong style={{fontSize: '14px', lineHeight: 1}}>JS</strong> Node.js
              </span>
              <span className={styles.techPill} style={{ '--pill-delay': '2.0s' } as React.CSSProperties}>
                 <Database size={14}/> Postgres
              </span>
            </div>
          </div>

        </div>

        {/* ======================= */}
        {/* RIGHT COLUMN: Devices */}
        {/* ======================= */}
        <div className={styles.rightColumn}>
          
          <div className={styles.handwritingText}>
             <span className={styles.hwText}>Design beautiful.<br/>Build powerful.</span>
             <svg className={styles.hwArrow} viewBox="0 0 60 50" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
               <path className={styles.animatedDraw} d="M 50 5 Q 10 10 5 40 L 15 35 M 5 40 L 0 30" stroke="#ff0055" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength="1"/>
             </svg>
          </div>

          <div className={styles.devicesWrapper}>
            
            {/* --- Laptop Mockup --- */}
            <div className={styles.laptopMockup}>
              <div className={styles.laptopFrame}>
                <div className={styles.laptopScreen}>
                  
                  {/* Laptop Screen Content */}
                  <div className={styles.laptopScreenInner}>
                     <div className={styles.browserHeader}>
                       <strong>RS.</strong>
                       <nav>
                         <span>Home</span>
                         <span className={styles.activeDot}>Work</span>
                         <span>About</span>
                         <span>Contact</span>
                       </nav>
                     </div>
                     <div className={styles.heroContent}>
                       <h3>Build<br/>Modern<br/>Web <span className={styles.pinkText}>Experiences.</span></h3>
                       <p>Design-led. Code-driven.</p>
                       <button>View Work →</button>
                     </div>
                     {/* 3D Abstract Shape (CSS approximation) */}
                     <div className={styles.abstractShape}></div>
                     <div className={styles.abstractShape2}></div>
                  </div>

                </div>
              </div>
              <div className={styles.laptopBase}>
                 <div className={styles.laptopNotch} />
                 <div className={styles.laptopKeyboard}>
                    {/* Simulated keyboard lines */}
                    <div className={styles.kbRow}></div>
                    <div className={styles.kbRow}></div>
                    <div className={styles.kbRow}></div>
                    <div className={styles.kbRow}></div>
                    <div className={styles.kbRow}></div>
                 </div>
                 <div className={styles.laptopTrackpad} />
              </div>
            </div>

            {/* --- Mobile Phone Mockup --- */}
            <div className={styles.phoneMockup}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneScreen}>
                   {/* Phone Content */}
                   <div className={styles.phoneHeader}>
                     <strong>RS.</strong>
                     <span className={styles.hamburger}>≡</span>
                   </div>
                   <div className={styles.phoneBody}>
                     <h3>Graphic<br/>Designer<br/>&amp;<br/>Full Stack<br/><span className={styles.pinkText}>Developer</span></h3>
                     <p>Turning ideas into<br/>real-world products.</p>
                     <button>Let&rsquo;s build →</button>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ======================= */}
      {/* BOTTOM BANNER: Stats */}
      {/* ======================= */}
      <div className={styles.statsBanner}>
        
        <div className={styles.statGroup}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}><Laptop size={26} color="#ff0055" strokeWidth={2} /></div>
            <div className={styles.statText}>
              <strong>10+</strong>
              <span>Web Projects</span>
            </div>
          </div>
          
          <div className={styles.statItem}>
            <div className={styles.statIcon}><Users size={26} color="#ff0055" strokeWidth={2} /></div>
            <div className={styles.statText}>
              <strong>100%</strong>
              <span>Client Focus</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}><Rocket size={26} color="#ff0055" strokeWidth={2} /></div>
            <div className={styles.statText}>
              <strong>Fast</strong>
              <span>Delivery</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}><Heart size={26} color="#ff0055" strokeWidth={2} /></div>
            <div className={styles.statText}>
              <strong>Clean</strong>
              <span>&amp; Modern UI</span>
            </div>
          </div>
        </div>

        <button className={styles.ctaButton}>
          <span>LET&rsquo;S CREATE<br/>SOMETHING GREAT</span>
          <span className={styles.ctaArrow}>→</span>
        </button>

      </div>
    </section>
  )
}
