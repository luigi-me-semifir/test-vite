import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exemple React</h1>

      <div className={styles.grid}>
        {/* Playground */}
        <div className={styles.card}>
          <h2>🧪 Playground</h2>
          <p>Zone d'entraînement React : hooks, events, composants, logique.</p>
          <button
            className={styles.btn}
            onClick={() => navigate("/playground")}
          >
            Accéder
          </button>
        </div>

        {/* E-commerce */}
        <div className={styles.card}>
          <h2>🛒 E-commerce</h2>
          <p>Mini boutique : produits, panier, CRUD, API, JSON Server.</p>
          <button className={styles.btn} onClick={() => navigate("/shop")}>
            Voir la boutique
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
