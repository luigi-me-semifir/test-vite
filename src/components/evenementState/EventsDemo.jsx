/* ============================================================================
   EXEMPLE 6 : ÉVÉNEMENTS REACT
   ============================================================================
   Objectif : Comprendre les différents événements disponibles en React
*/

// EventsDemo.jsx
import React, { useState } from "react";

function EventsDemo() {
  const [log, setLog] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Ajouter un événement au journal
  const addLog = (event) => {
    const newLog = `${new Date().toLocaleTimeString()} - ${event}`;
    setLog([newLog, ...log.slice(0, 9)]); // Garde les 10 derniers
  };

  // === ÉVÉNEMENTS SOURIS ===

  // onClick - Clic simple
  const handleClick = () => {
    addLog("onClick - Clic simple");
  };

  // onDoubleClick - Double-clic
  const handleDoubleClick = () => {
    addLog("onDoubleClick - Double-clic");
  };

  // onContextMenu - Clic droit
  const handleContextMenu = (e) => {
    e.preventDefault(); // Empêche le menu contextuel par défaut
    addLog("onContextMenu - Clic droit");
  };

  // onMouseEnter - Entrée de la souris
  const handleMouseEnter = () => {
    setIsHovered(true);
    addLog("onMouseEnter - Souris entrée");
  };

  // onMouseLeave - Sortie de la souris
  const handleMouseLeave = () => {
    setIsHovered(false);
    addLog("onMouseLeave - Souris sortie");
  };

  // onMouseMove - Mouvement de la souris
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // === ÉVÉNEMENTS CLAVIER ===

  // onKeyPress - Touche pressée
  const handleKeyPress = (e) => {
    addLog(`onKeyPress - Touche: ${e.key}`);
  };

  // onKeyDown - Touche enfoncée
  const handleKeyDown = (e) => {
    addLog(`onKeyDown - Touche: ${e.key}`);
  };

  // onKeyUp - Touche relâchée
  const handleKeyUp = (e) => {
    addLog(`onKeyUp - Touche: ${e.key}`);
  };

  // === ÉVÉNEMENTS FOCUS ===

  // onFocus - Focus obtenu
  const handleFocus = () => {
    addLog("onFocus - Input a reçu le focus");
  };

  // onBlur - Focus perdu
  const handleBlur = () => {
    addLog("onBlur - Input a perdu le focus");
  };

  // === ÉVÉNEMENTS FORMULAIRE ===

  const [inputValue, setInputValue] = useState("");

  // onChange - Changement de valeur
  const handleChange = (e) => {
    setInputValue(e.target.value);
    addLog(`onChange - Nouvelle valeur: ${e.target.value}`);
  };

  // onSubmit - Soumission formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    addLog("onSubmit - Formulaire soumis");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Démonstration des Événements React</h2>

      {/* Événements de clic */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événements de Clic</h3>
        <button onClick={handleClick} style={{ marginRight: "8px" }}>
          Clic Simple
        </button>
        <button
          onDoubleClick={handleDoubleClick}
          style={{ marginRight: "8px" }}
        >
          Double-Clic
        </button>
        <button onContextMenu={handleContextMenu}>Clic Droit</button>
      </div>

      {/* Événements de survol */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événements de Survol</h3>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: "20px",
            backgroundColor: isHovered ? "#fbbf24" : "#fde68a",
            textAlign: "center",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {isHovered ? "🎯 Survolé !" : "👆 Survolez-moi"}
        </div>
      </div>

      {/* Événements de mouvement */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événement de Mouvement</h3>
        <div
          onMouseMove={handleMouseMove}
          style={{
            padding: "20px",
            backgroundColor: "#fed7aa",
            textAlign: "center",
          }}
        >
          Position souris : X={mousePosition.x}, Y={mousePosition.y}
        </div>
      </div>

      {/* Événements de focus */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événements de Focus</h3>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Cliquez ici..."
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      {/* Événements clavier */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événements Clavier</h3>
        <input
          type="text"
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Tapez quelque chose..."
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      {/* Événement formulaire */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Événements Formulaire</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Tapez et soumettez..."
            style={{ padding: "8px", width: "calc(100% - 100px)" }}
          />
          <button
            type="submit"
            style={{ padding: "8px 16px", marginLeft: "8px" }}
          >
            Soumettre
          </button>
        </form>
      </div>

      {/* Journal des événements */}
      <div style={{ marginTop: "20px" }}>
        <h3>Journal des Événements</h3>
        <div
          style={{
            padding: "12px",
            backgroundColor: "#f3f4f6",
            borderRadius: "6px",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {log.length === 0 ? (
            <p style={{ color: "#6b7280", fontStyle: "italic" }}>
              Aucun événement. Interagissez avec les éléments ci-dessus !
            </p>
          ) : (
            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: "none",
                fontSize: "12px",
              }}
            >
              {log.map((entry, index) => (
                <li
                  key={index}
                  style={{
                    padding: "4px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {entry}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsDemo;
