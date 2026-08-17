import { InstagramIcon, MailIcon, PhoneIcon } from "./Icons";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contactCol}>
          <div className={styles.contactItem}>
            <div className={styles.iconCircle}>
              <InstagramIcon size={14} />
            </div>
            <span>@conor_hike_elite</span>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.iconCircle}>
              <MailIcon size={14} />
            </div>
            <span>raghulfp@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.iconCircle}>
              <PhoneIcon size={14} />
            </div>
            <span>+91 80569 41990</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <p>
            Design is more than just a profession for me—it&rsquo;s a passion. I find joy in every detail, from bold branding to subtle visual storytelling. Beyond the screen, I&rsquo;m an artist at soul—always sketching, painting, and exploring new ways to express beauty. Art has always been my happy place, and I love sharing that joy through everything I create. Whether it&rsquo;s a logo, a poster, or a full design system, I aim to make every piece meaningful and memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
