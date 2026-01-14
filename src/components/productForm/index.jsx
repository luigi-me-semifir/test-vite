import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../config/api";
import styles from "./ProductForm.module.css";

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Produit introuvable");
      const data = await response.json();
      setFormData({
        name: data.name,
        price: data.price.toString(),
        category: data.category,
        description: data.description,
        stock: data.stock.toString(),
        image: data.image,
      });
    } catch (err) {
      alert(`Erreur: ${err.message}`);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.price || parseFloat(formData.price) <= 0)
      newErrors.price = "Le prix doit être supérieur à 0";
    if (!formData.category.trim())
      newErrors.category = "La catégorie est requise";
    if (!formData.description.trim())
      newErrors.description = "La description est requise";
    if (!formData.stock || parseInt(formData.stock) < 0)
      newErrors.stock = "Le stock doit être supérieur ou égal à 0";
    if (!formData.image.trim())
      newErrors.image = "L'URL de l'image est requise";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setSaving(true);

      const productData = {
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        category: formData.category.trim(),
        description: formData.description.trim(),
        stock: parseInt(formData.stock),
        image: formData.image.trim(),
      };

      const url = isEditMode ? `${API_URL}/${id}` : API_URL;
      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error("Erreur lors de la sauvegarde");

      const savedProduct = await response.json();
      navigate(`/products/${savedProduct.id}`);
    } catch (err) {
      alert(`Erreur: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Chargement...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link className={styles.breadcrumbLink} to="/">
          🏠 Accueil
        </Link>{" "}
        &gt; {isEditMode ? "Modifier" : "Nouveau produit"}
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>
          {isEditMode ? "✏️ Modifier le Produit" : "➕ Nouveau Produit"}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Nom */}
          <div className={styles.field}>
            <label className={styles.label}>Nom du produit *</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.name ? styles.inputError : ""
              }`}
              placeholder="Ex: iPhone 15 Pro"
            />

            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>

          {/* Prix et Stock */}
          <div className={styles.twoCols}>
            <div className={styles.col}>
              <label className={styles.label}>Prix (€) *</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                className={`${styles.input} ${
                  errors.price ? styles.inputError : ""
                }`}
                placeholder="1299.99"
              />

              {errors.price && (
                <p className={styles.errorText}>{errors.price}</p>
              )}
            </div>

            <div className={styles.col}>
              <label className={styles.label}>Stock *</label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.stock ? styles.inputError : ""
                }`}
                placeholder="50"
              />

              {errors.stock && (
                <p className={styles.errorText}>{errors.stock}</p>
              )}
            </div>
          </div>

          {/* Catégorie */}
          <div className={styles.field}>
            <label className={styles.label}>Catégorie *</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.category ? styles.inputError : ""
              }`}
              placeholder="Ex: Téléphones, Informatique..."
            />

            {errors.category && (
              <p className={styles.errorText}>{errors.category}</p>
            )}
          </div>

          {/* Description */}
          <div className={styles.field}>
            <label className={styles.label}>Description *</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`${styles.textarea} ${
                errors.description ? styles.inputError : ""
              }`}
              placeholder="Description détaillée du produit..."
            />

            {errors.description && (
              <p className={styles.errorText}>{errors.description}</p>
            )}
          </div>

          {/* Image URL */}
          <div className={styles.field}>
            <label className={styles.label}>URL de l'image *</label>

            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.image ? styles.inputError : ""
              }`}
              placeholder="https://example.com/image.jpg"
            />

            {errors.image && <p className={styles.errorText}>{errors.image}</p>}
          </div>

          {/* Boutons */}
          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => navigate(isEditMode ? `/products/${id}` : "/")}
              disabled={saving}
              className={`${styles.btn} ${styles.btnCancel}`}
            >
              Annuler
            </button>

            <button
              type="submit"
              disabled={saving}
              className={`${styles.btn} ${styles.btnSubmit}`}
            >
              {saving ? "Sauvegarde..." : isEditMode ? "Enregistrer" : "Créer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
