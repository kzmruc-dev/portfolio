import styles from "./Section.module.css";
import s from "./History.module.css";

export default function History({ history }) {
  return (
    <section id="history" className={styles.section}>
      <p className={styles.label}>History</p>
      <div className={s.timeline}>
        {history.map((item, i) => (
          <div key={i} className={s.row}>
            <span className={s.year}>{item.year}</span>
            <div className={s.content}>
              <p className={s.type}>{item.type}</p>
              <p className={s.title}>{item.title}</p>
              <p className={s.org}>{item.org}</p>
              <p className={s.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
