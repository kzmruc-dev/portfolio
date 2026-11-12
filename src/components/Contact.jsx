import styles from "./Section.module.css";
import s from "./Contact.module.css";

export default function Contact({ contact, note }) {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.label}>Contact</p>
      {note && <p className={s.note}>{note}</p>}
      <div>
        {contact.filter((c) => c.url).map((c) => (
          <a key={c.platform} href={c.url} className={s.row} {...(c.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}>
            <span className={s.platform}>{c.platform}</span>
            <span className={s.value}>{c.value}</span>
            <span className={s.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
