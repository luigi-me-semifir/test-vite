import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../config/api";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Produit introuvable");
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      alert(err.message);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erreur lors de la suppression");
      navigate("/");
    } catch (err) {
      alert(`Erreur: ${err.message}`);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Chargement...</div>;
  }

  if (!product) {
    return <div className={styles.notFound}>Produit introuvable</div>;
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link className={styles.breadcrumbLink} to="/">
          🏠 Accueil
        </Link>{" "}
        &gt; {product.name}
      </div>

      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Image */}
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Informations */}
          <div className={styles.info}>
            <div className={styles.category}>{product.category}</div>

            <h1 className={styles.title}>{product.name}</h1>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.statsGrid}>
              <div className={`${styles.statBox} ${styles.priceBox}`}>
                <div className={styles.statLabel}>Prix</div>
                <div className={styles.priceValue}>
                  {Number(product.price).toFixed(2)}€
                </div>
              </div>

              <div className={`${styles.statBox} ${styles.stockBox}`}>
                <div className={styles.statLabelStock}>Stock</div>
                <div className={styles.stockValue}>{product.stock}</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className={styles.actions}>
              <button
                className={`${styles.btn} ${styles.btnEdit}`}
                onClick={() => navigate(`/products/${id}/edit`)}
              >
                ✏️ Modifier
              </button>

              <button
                className={`${styles.btn} ${styles.btnDelete}`}
                onClick={() => setShowDeleteConfirm(true)}
              >
                🗑️ Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmation */}
      {showDeleteConfirm && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>⚠️ Confirmer la suppression</h2>

            <p className={styles.modalText}>
              Êtes-vous sûr de vouloir supprimer <strong>{product.name}</strong>{" "}
              ?
            </p>

            <div className={styles.modalActions}>
              <button
                className={`${styles.btn} ${styles.btnCancel}`}
                onClick={() => setShowDeleteConfirm(false)}
              >
                Annuler
              </button>

              <button
                className={`${styles.btn} ${styles.btnDelete}`}
                onClick={handleDelete}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
