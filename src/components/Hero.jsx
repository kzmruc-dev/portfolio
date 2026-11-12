import styles from "./Hero.module.css";

export default function Hero({ role, heroSubtitle, heroBio, heroTags = [], nameJa, title }) {
  return (
    <div className={styles.hero}>
      {(nameJa || title) && (
        <p className={styles.eyebrow}>
          {nameJa}{nameJa && title ? " — " : ""}{title}
        </p>
      )}
      <h1 className={styles.h1}>
        {role} <br />
        {heroSubtitle}
      </h1>
      <p className={styles.bio}>{heroBio}</p>
      {heroTags.length > 0 && (
        <div className={styles.tags}>
          {heroTags.map((t) => <span key={t}>{t}</span>)}
        </div>
      )}
      <a href="#contact" className={styles.cta}>お仕事のご相談はこちら →</a>
    </div>
  );
}
