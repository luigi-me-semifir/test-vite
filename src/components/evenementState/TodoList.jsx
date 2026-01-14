/* ============================================================================
   EXEMPLE 4 : STATE AVEC TABLEAU (TODO LIST)
   ============================================================================
   Objectif : Manipuler un array dans le state (ajouter, supprimer)
*/

// TodoList.jsx
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Apprendre React", "Maîtriser le State"]);
  const [newTodo, setNewTodo] = useState("");

  // Ajouter une tâche
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Spread operator pour créer un nouveau tableau
      setNewTodo(""); // Réinitialiser l'input
    }
  };

  // Supprimer une tâche
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Filter pour créer un nouveau tableau
  };

  // Gérer la touche Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ma Liste de Tâches</h2>

      {/* Input pour nouvelle tâche */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nouvelle tâche..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>

      {/* Liste des tâches */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              marginBottom: "8px",
              backgroundColor: "#dbeafe",
              borderRadius: "4px",
            }}
          >
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)}>✕</button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p
          style={{ textAlign: "center", color: "#6b7280", fontStyle: "italic" }}
        >
          Aucune tâche. Ajoutez-en une !
        </p>
      )}
    </div>
  );
}

export default TodoList;
