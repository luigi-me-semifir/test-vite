import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Exemple React – Tous droits réservés
    </footer>
  );
}

export default Footer;
