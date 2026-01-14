import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.code}>404</div>
        <h1>Page introuvable</h1>
        <p>La page que tu cherches n’existe pas.</p>

        <button className={styles.btn} onClick={() => navigate("/")}>
          Retour à l’accueil
        </button>
      </div>
    </div>
  );
}

export default NotFound;
