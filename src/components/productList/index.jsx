import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/api";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erreur lors du chargement");
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingIcon}>⏳</div>
        <p>Chargement des produits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorBox}>
        <h2>❌ Erreur</h2>
        <p>{error}</p>
        <button className={styles.retryBtn} onClick={fetchProducts}>
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🛍️ Catalogue Produits</h1>
        <button
          className={styles.addBtn}
          onClick={() => navigate("/products/new")}
        >
          ➕ Ajouter un Produit
        </button>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => navigate(`/products/${product.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(`/products/${product.id}`);
            }}
          >
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />

            <div className={styles.cardBody}>
              <div className={styles.category}>{product.category}</div>

              <h3 className={styles.title}>{product.name}</h3>

              <p className={styles.description}>
                {product.description?.substring(0, 100)}...
              </p>

              <div className={styles.bottomRow}>
                <div className={styles.price}>
                  {Number(product.price).toFixed(2)}€
                </div>
                <div className={styles.stock}>Stock: {product.stock}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
