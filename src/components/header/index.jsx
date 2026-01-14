import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Exemple React
      </Link>

      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Accueil
        </Link>
      </nav>
    </header>
  );
}

export default Header;
