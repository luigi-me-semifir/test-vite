/* ============================================================================
   EXEMPLE 5 : STATE AVEC OBJET (FORMULAIRE)
   ============================================================================
   Objectif : Gérer un objet dans le state avec plusieurs propriétés
*/

// UserForm.jsx
import React, { useState } from "react";

function UserForm() {
  // State objet avec plusieurs propriétés
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    country: "France",
  });

  // Fonction générique pour gérer tous les inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Récupère name et value de l'input
    setUser({
      ...user, // Spread pour copier les propriétés existantes
      [name]: value, // Mise à jour de la propriété spécifique
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    alert(`Utilisateur créé :\n${JSON.stringify(user, null, 2)}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Formulaire Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Nom :</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Email :
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Âge :</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Pays :
          </label>
          <select
            name="country"
            value={user.country}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="France">France</option>
            <option value="Belgique">Belgique</option>
            <option value="Suisse">Suisse</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Soumettre
        </button>
      </form>

      {/* Aperçu en temps réel */}
      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "#dbeafe",
        }}
      >
        <h3>Aperçu :</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}

export default UserForm;
