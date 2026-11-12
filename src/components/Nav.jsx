import styles from "./Nav.module.css";

export default function Nav({ name }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.navName}>{name}</span>
      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#works">Works</a>
        <a href="#skills">Skills</a>
        <a href="#history">History</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
