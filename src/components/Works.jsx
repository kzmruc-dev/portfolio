import styles from "./Section.module.css";
import s from "./Works.module.css";

export default function Works({ works }) {
  return (
    <section id="works" className={styles.section}>
      <p className={styles.label}>Works</p>
      <div className={s.list}>
        {works.map((w) => (
          <article key={w.name} className={s.card}>
            <div className={s.head}>
              <div>
                <p className={s.kind}>{w.kind}</p>
                <h3 className={s.name}>{w.name}</h3>
              </div>
              <span className={s.period}>{w.period}</span>
            </div>
            <p className={s.desc}>{w.desc}</p>
            <div className={s.stack}>
              {w.stack.map((t) => (
                <span key={t} className={s.tag}>{t}</span>
              ))}
            </div>
            {w.url && (
              <a href={w.url} target="_blank" rel="noreferrer" className={s.link}>
                {w.urlLabel || w.url.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
