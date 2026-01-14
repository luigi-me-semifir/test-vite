import { useState } from "react";

function TestStae() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Test State</h2>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}

export default TestStae;
