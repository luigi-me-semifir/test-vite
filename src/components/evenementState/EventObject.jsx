/* ============================================================================
   EXEMPLE 7 : OBJET EVENT (e) EN DÉTAIL
   ============================================================================
   Objectif : Comprendre l'objet event et ses propriétés
*/

// EventObject.jsx
import React, { useState } from "react";

function EventObject() {
  const [eventDetails, setEventDetails] = useState(null);

  const handleClick = (e) => {
    // e est l'objet SyntheticEvent de React
    setEventDetails({
      type: e.type, // Type d'événement
      target: e.target.tagName, // Élément cible
      currentTarget: e.currentTarget.tagName,
      clientX: e.clientX, // Position X de la souris
      clientY: e.clientY, // Position Y de la souris
      button: e.button, // Bouton de souris utilisé
      altKey: e.altKey, // Touche Alt pressée ?
      ctrlKey: e.ctrlKey, // Touche Ctrl pressée ?
      shiftKey: e.shiftKey, // Touche Shift pressée ?
      timestamp: e.timeStamp, // Timestamp de l'événement
    });
  };

  const handleInput = (e) => {
    setEventDetails({
      type: e.type,
      value: e.target.value, // Valeur de l'input
      name: e.target.name, // Attribut name
      id: e.target.id, // Attribut id
    });
  };

  const handleKeyEvent = (e) => {
    setEventDetails({
      type: e.type,
      key: e.key, // Touche pressée
      code: e.code, // Code de la touche
      keyCode: e.keyCode, // Code numérique (déprécié)
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Objet Event en Détail</h2>

      <button
        onClick={handleClick}
        style={{
          padding: "12px 24px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "8px",
        }}
      >
        Cliquez-moi
      </button>

      <input
        type="text"
        name="testInput"
        id="myInput"
        onChange={handleInput}
        placeholder="Tapez quelque chose..."
        style={{ padding: "8px", marginRight: "8px" }}
      />

      <input
        type="text"
        onKeyDown={handleKeyEvent}
        placeholder="Pressez une touche..."
        style={{ padding: "8px" }}
      />

      {eventDetails && (
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#dbeafe",
            borderRadius: "8px",
          }}
        >
          <h3>Détails de l'Événement :</h3>
          <pre style={{ fontSize: "12px" }}>
            {JSON.stringify(eventDetails, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default EventObject;
