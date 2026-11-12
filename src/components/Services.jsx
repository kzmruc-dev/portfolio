import styles from "./Section.module.css";
import s from "./Services.module.css";

export default function Services({ services }) {
  return (
    <section id="services" className={styles.section}>
      <p className={styles.label}>Services — 副業でお手伝いできること</p>
      <div className={s.grid}>
        {services.map((item, i) => (
          <div key={item.title} className={s.block}>
            <span className={s.num}>{String(i + 1).padStart(2, "0")}</span>
            <p className={s.title}>{item.title}</p>
            <p className={s.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
