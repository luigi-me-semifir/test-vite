/* ============================================================================
   EXEMPLE 2 : STATE AVEC NOMBRE (COUNTER)
   ============================================================================
   Objectif : Gérer un state de type number et utiliser onClick
*/

// Counter.jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // État initial = 0

  // Fonctions pour modifier le state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementBy10 = () => setCount(count + 10);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Compteur : {count}</h2>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
        <button onClick={incrementBy10}>+10</button>
      </div>
    </div>
  );
}

export default Counter;
