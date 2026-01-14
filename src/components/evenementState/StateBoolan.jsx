/* ============================================================================
   EXEMPLE 3 : STATE AVEC BOOLEAN
   ============================================================================
   Objectif : Utiliser boolean pour toggler des états et affichage conditionnel
*/

// ToggleSwitch.jsx
import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Toggle Switch</h2>

      {/* Toggle simple */}
      <button
        onClick={() => setIsOn(!isOn)} // Inverse la valeur
        style={{
          padding: "12px 24px",
          backgroundColor: isOn ? "#10b981" : "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isOn ? "🔆 Allumé" : "🌙 Éteint"}
      </button>
      <p>
        État actuel : <strong>{isOn ? "ON" : "OFF"}</strong>
      </p>

      {/* Affichage conditionnel */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Masquer" : "Afficher"} le message
      </button>

      {isVisible && (
        <p
          style={{
            padding: "12px",
            backgroundColor: "#ddd6fe",
            borderRadius: "6px",
          }}
        >
          Ce message est conditionnel !
        </p>
      )}
    </div>
  );
}

export default ToggleSwitch;
