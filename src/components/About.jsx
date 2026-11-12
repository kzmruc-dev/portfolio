import styles from "./Section.module.css";
import about from "./About.module.css";

export default function About({ about: paragraphs, location, role, title, interests }) {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>About</p>
      <div className={about.grid}>
        <div className={about.text}>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className={about.meta}>
          <div className={about.metaRow}>
            <span className={about.metaKey}>Location</span>
            <span className={about.metaVal}>{location}</span>
          </div>
          <div className={about.metaRow}>
            <span className={about.metaKey}>Current</span>
            <span className={about.metaVal}>{title || role}</span>
          </div>
          <div className={about.metaRow}>
            <span className={about.metaKey}>Interests</span>
            <span className={about.metaVal}>{interests}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
