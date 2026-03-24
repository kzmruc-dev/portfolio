import styles from "./Section.module.css";
import s from "./Certifications.module.css";

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className={styles.section}>
      <p className={styles.label}>Certifications</p>
      <div className={s.grid}>
        {certifications.map((block) => (
          <div key={block.category} className={s.block}>
            <p className={s.cat}>{block.category}</p>
            <div className={s.items}>
              {block.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
