import styles from "./Hero.module.css";

export default function Hero({ role, heroSubtitle, heroBio }) {
  const parts = role.split("&");
  return (
    <div className={styles.hero}>
      <h1 className={styles.h1}>
        {parts[0].trim()} <br />
        {heroSubtitle}
      </h1>
      <p className={styles.bio}>{heroBio}</p>
    </div>
  );
}
