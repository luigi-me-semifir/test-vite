import { useState } from "react";
import styles from "./Playground.module.css";

import SimpleInput from "../../components/evenementState/SimpleInpt";
import Counter from "../../components/evenementState/Counter";
import ToggleSwitch from "../../components/evenementState/StateBoolan";
import TodoList from "../../components/evenementState/TodoList";
import UserForm from "../../components/evenementState/Formulaire";
import EventsDemo from "../../components/evenementState/EventsDemo";
import EventObject from "../../components/evenementState/EventObject";
import PreventDefault from "../../components/evenementState/PreventDefault";
import MultipleCounters from "../../components/evenementState/MultipleCounter";

const COMPONENTS = {
  SimpleInput,
  Counter,
  ToggleSwitch,
  TodoList,
  UserForm,
  EventsDemo,
  EventObject,
  PreventDefault,
  MultipleCounters,
};

function Playground() {
  const [active, setActive] = useState(null);

  const ActiveComponent = active ? COMPONENTS[active] : null;

  return (
    <div className={styles.container}>
      <h1>🧪 Playground</h1>

      <div className={styles.buttons}>
        {Object.keys(COMPONENTS).map((name) => (
          <button
            key={name}
            className={styles.btn}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className={styles.viewer}>
        {ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <p>Sélectionne un composant</p>
        )}
      </div>
    </div>
  );
}

export default Playground;
