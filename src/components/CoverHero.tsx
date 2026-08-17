import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";
import styles from "./CoverHero.module.css";
import ApproachSection from "./ApproachSection";
import ResumeSection from "./ResumeSection";
import ProjectsGrid from "./ProjectsGrid";
import TrueFocus from "./TrueFocus";
import EchoText from "./EchoText";
import ScrollReveal from "./ScrollReveal";


const EMAIL = "raghulfp24@gmail.com";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/raghul-s", icon: <LinkedInIcon /> },
  { label: "GitHub", href: "https://github.com/raghuls", icon: <GitHubIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Email", href: `mailto:${EMAIL}`, icon: <MailIcon size={18} /> },
];


export default function CoverHero() {
  return (
    <section id="hero" className={styles.heroContainer}>


      {/* Background ambient radial glows */}
      <div className={`${styles.ambientGlow} ${styles.glowTopRight}`} aria-hidden="true" />
      <div className={`${styles.ambientGlow} ${styles.glowBottomLeft}`} aria-hidden="true" />

      {/* Header bar */}
      <header className={styles.heroHeader}>
        <p className={styles.availBadge}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>
            Available for <strong className="accent-pink">Work</strong>
          </span>
        </p>

        <nav className={styles.heroSocials} aria-label="Social links">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </header>

      {/* Vertical left rail */}
      <div className={styles.heroLeftRail} aria-hidden="true">
        <div className={styles.railLine} />
        <div className={styles.railItem}>
          <span className={styles.railDot} />
          <span className={styles.railText}>DESIGN</span>
        </div>
        <div className={styles.railItem}>
          <span className={styles.railDot} />
          <span className={styles.railText}>DEVELOP</span>
        </div>
        <div className={styles.railItem}>
          <span className={styles.railDot} />
          <span className={styles.railText}>DELIVER</span>
        </div>
        <div className={styles.railLine} />
      </div>

      <div className={styles.coverBand}>
        {/* Giant title with handwritten overlay */}
        <div className={styles.heroTitleArea}>
          <h1 className={styles.coverGiant}>
            <span className={styles.pLetterBox}>
              P
              <span className={styles.scriptOverlay} aria-hidden="true">
                <span>Let&apos;s Create</span>
                <br />
                <span>Something Great</span>
                <svg
                  className={styles.scriptUnderline}
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C35 4 105 3 158 11"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    pathLength="1"
                  />
                </svg>
              </span>
            </span>
            <span className={styles.shiningO}>O</span>RTF<span className={styles.shiningO}>O</span>LI<span className={styles.shiningO}>O</span>
          </h1>
        </div>

        {/* Hero cutout image */}
        <div className={styles.heroImgWrapper}>
          <div className={styles.heroImgContainer}>
            <Image
              src="/hero-image-2.png"
              alt="Raghul — Full Stack Developer & Graphic Designer"
              width={1036}
              height={1176}
              sizes="(max-width: 768px) 85vw, 46vw"
              priority
              draggable={false}
              className={styles.heroImg}
            />
          </div>
        </div>

        {/* Poster intro block */}
        <div className={styles.posterIntro}>

          {/* Eyebrow tag */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>HELLO, I&rsquo;M</span>
            <span className={styles.eyebrowLine} />
          </div>

          {/* Name with WarpText effect and Inline Profile Photo */}
          <div className={styles.nameContainer}>
            <div className={styles.posterHeadlineWarp}>
              <EchoText
                text="Raghul S"
                echoes={12}
                lag={0.24}
                offset={36}
                direction="right"
                fade={0.72}
                blur={3}
                tint="#ff0055"
                mode="both"
                cursorRadius={320}
                duration={900}
                ease="ease-out"
                fontSize="clamp(3.2rem, 8.5vw, 6.8rem)"
                fontWeight={900}
                color="#000000"
                style={{ height: '130px', width: '100%', fontFamily: 'inherit' }}
              />
            </div>
          </div>
          {/* Role Capsule */}
          <div className={styles.roleRow}>
            <div className={styles.roleCapsule}>
              <span className={styles.roleText}>GRAPHIC DESIGNER</span>
              <span className={styles.roleDivider} aria-hidden="true" />
              <span className={styles.roleText}>AI FULL STACK DEVELOPER</span>
            </div>
          </div>

          {/* Body copy */}
          <p className={styles.posterBody}>
            With over{" "}
            <span className="accent-pink">1&thinsp;year of experience</span> in design and development,
            <br className={styles.desktopBr} />
            I turn ideas into engaging digital experiences
            <br className={styles.desktopBr} />
            that <strong>connect</strong>, <strong>inspire</strong>, and <strong>solve real problems</strong>.
          </p>


          {/* Dark TrueFocus banner */}
          <div className={styles.trueFocusBanner}>
            <p className={styles.bannerEyebrow}>I bring ideas to life with</p>
            <TrueFocus
              sentence="creativity precision passion"
              separator=" "
              borderColor="#000000"
              glowColor="rgba(0, 0, 0, 0.08)"
              animationDuration={0.7}
              pauseBetweenAnimations={1.4}
              blurAmount={5}
            />
            <p className={styles.bannerFootnote}>for design &amp; technology.</p>
          </div>

        </div>
        <ScrollReveal>
          <ResumeSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProjectsGrid />
        </ScrollReveal>

        <ScrollReveal>
          <ApproachSection />
        </ScrollReveal>

      </div>
    </section>
  );
}
