/* ============================================================================
   EXEMPLE 9 : STATE COMPLEXE - GESTION DE PLUSIEURS COMPTEURS
   ============================================================================
   Objectif : Manipuler un array d'objets dans le state
*/

// MultipleCounters.jsx
import React, { useState } from "react";

function MultipleCounters() {
  // State = array de nombres
  const [counters, setCounters] = useState([0, 0, 0]);

  // Incrémenter un compteur spécifique
  const incrementCounter = (index) => {
    const newCounters = [...counters]; // Copie du tableau
    newCounters[index]++; // Modification
    setCounters(newCounters); // Mise à jour du state
  };

  // Décrémenter un compteur spécifique
  const decrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  // Ajouter un nouveau compteur
  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  // Supprimer un compteur
  const removeCounter = (index) => {
    setCounters(counters.filter((_, i) => i !== index));
  };

  // Reset tous les compteurs
  const resetAll = () => {
    setCounters(counters.map(() => 0));
  };

  // Calculer le total
  const total = counters.reduce((sum, count) => sum + count, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Compteurs Multiples</h2>

      {counters.map((count, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            padding: "12px",
            backgroundColor: "#f3f4f6",
            borderRadius: "6px",
          }}
        >
          <span style={{ minWidth: "100px" }}>Compteur {index + 1}:</span>
          <button onClick={() => decrementCounter(index)}>-</button>
          <span
            style={{
              minWidth: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {count}
          </span>
          <button onClick={() => incrementCounter(index)}>+</button>
          <button
            onClick={() => removeCounter(index)}
            style={{
              marginLeft: "auto",
              backgroundColor: "#ef4444",
              color: "white",
            }}
          >
            Supprimer
          </button>
        </div>
      ))}

      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        <button onClick={addCounter}>➕ Ajouter un compteur</button>
        <button onClick={resetAll}>🔄 Reset tous</button>
      </div>

      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "#dbeafe",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        <strong>Total : {total}</strong>
      </div>
    </div>
  );
}

export default MultipleCounters;
