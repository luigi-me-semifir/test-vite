/* ============================================================================
   EXEMPLE 8 : PRÉVENIR LE COMPORTEMENT PAR DÉFAUT
   ============================================================================
   Objectif : Utiliser e.preventDefault() et e.stopPropagation()
*/

// PreventDefault.jsx
import React, { useState } from "react";

function PreventDefault() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages([...messages, `${new Date().toLocaleTimeString()} - ${msg}`]);
  };

  // Empêcher la soumission par défaut du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT !
    addMessage("Formulaire soumis (sans rechargement)");
  };

  // Empêcher l'ouverture du lien
  const handleLinkClick = (e) => {
    e.preventDefault();
    addMessage("Lien cliqué (navigation empêchée)");
  };

  // Empêcher le menu contextuel
  const handleContextMenu = (e) => {
    e.preventDefault();
    addMessage("Menu contextuel empêché");
  };

  // Propagation d'événements
  const handleParentClick = () => {
    addMessage("Parent cliqué");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Empêche la propagation au parent
    addMessage("Enfant cliqué (propagation arrêtée)");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Prévenir le Comportement par Défaut</h2>

      {/* preventDefault avec formulaire */}
      <div style={{ marginBottom: "20px" }}>
        <h3>1. preventDefault() - Formulaire</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez du texte..."
            style={{ padding: "8px", marginRight: "8px" }}
          />
          <button type="submit">Soumettre</button>
        </form>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          Sans e.preventDefault(), la page se rechargerait !
        </p>
      </div>

      {/* preventDefault avec lien */}
      <div style={{ marginBottom: "20px" }}>
        <h3>2. preventDefault() - Lien</h3>
        <a href="https://example.com" onClick={handleLinkClick}>
          Cliquez ce lien
        </a>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          La navigation est empêchée !
        </p>
      </div>

      {/* preventDefault avec menu contextuel */}
      <div style={{ marginBottom: "20px" }}>
        <h3>3. preventDefault() - Menu Contextuel</h3>
        <div
          onContextMenu={handleContextMenu}
          style={{
            padding: "20px",
            backgroundColor: "#fde68a",
            textAlign: "center",
          }}
        >
          Faites un clic droit ici
        </div>
      </div>

      {/* stopPropagation */}
      <div style={{ marginBottom: "20px" }}>
        <h3>4. stopPropagation() - Propagation d'événements</h3>
        <div
          onClick={handleParentClick}
          style={{
            padding: "20px",
            backgroundColor: "#dbeafe",
            cursor: "pointer",
          }}
        >
          Parent (cliquable)
          <div
            onClick={handleChildClick}
            style={{
              padding: "20px",
              backgroundColor: "#fbbf24",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Enfant (cliquez ici - propagation arrêtée)
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          padding: "12px",
          backgroundColor: "#dbeafe",
          borderRadius: "6px",
        }}
      >
        <h3>Messages :</h3>
        {messages.length === 0 ? (
          <p style={{ color: "#6b7280", fontStyle: "italic" }}>Aucun message</p>
        ) : (
          <ul style={{ fontSize: "12px" }}>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PreventDefault;
