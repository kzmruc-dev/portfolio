import styles from "./Hero.module.css";

export default function Hero({ role, heroSubtitle, heroBio, heroTags = [], nameJa, title }) {
  return (
    <div className={styles.hero}>
      {(nameJa || title) && (
        <div className={styles.identity}>
          {title && <p className={styles.position}>{title}</p>}
          {nameJa && <p className={styles.name}>{nameJa}</p>}
        </div>
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
