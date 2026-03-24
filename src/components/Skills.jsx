import styles from "./Section.module.css";
import s from "./Skills.module.css";

export default function Skills({ skills }) {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>Skills</p>
      <div className={s.grid}>
        {skills.map((block) => (
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
