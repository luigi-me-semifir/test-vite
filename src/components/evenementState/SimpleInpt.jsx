/*
=========================================================================
   EXEMPLE 1 : STATE SIMPLE AVEC STRING
   ============================================================================
   Objectif : Comprendre useState avec un type string et l'événement onChange
*/

// SimpleInput.jsx
import { useState } from "react";

function SimpleInput() {
  // Déclaration du state avec useState
  const [text, setText] = useState(""); // État initial = chaîne vide

  return (
    <div style={{ padding: "20px" }}>
      <h2>Input Simple</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Mise à jour du state
        placeholder="Tapez quelque chose..."
        style={{
          padding: "8px",
          border: "2px solid #3b82f6",
          borderRadius: "4px",
          width: "100%",
          fontSize: "16px",
        }}
      />
      <p>
        Vous avez tapé : <strong>{text}</strong>
      </p>
      <p>Nombre de caractères : {text.length}</p>
    </div>
  );
}

export default SimpleInput;
