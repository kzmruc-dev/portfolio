import s from "./Footer.module.css";

export default function Footer({ name }) {
  return (
    <footer className={s.footer}>
      <span>{name}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
