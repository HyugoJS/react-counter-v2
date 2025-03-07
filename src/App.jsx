import "./App.css";
import { useState } from "react";

function App() {
  // console.log("test");
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]); // Chaque compteur démarre à 0
  };
  const updateCounter = (index, newValue) => {
    const newCounters = [...counters];
    newCounters[index] = newValue;
    setCounters(newCounters);
  };

  return (
    <>
      <h1>Counter</h1>
      <div>
        {counters.map((elem, index) => (
          <div key={index}>
            <p>{elem}</p>
            <button onClick={() => updateCounter(index, elem + 1)}>+</button>
            <button onClick={() => updateCounter(index, elem - 1)}>-</button>
            <button onClick={() => updateCounter(index, (elem = 0))}>
              {" "}
              Reset
            </button>
          </div>
        ))}
      </div>
      <button
        className={counters.length < 3 ? "show-button" : "hide-button"}
        onClick={addCounter}
      >
        Add counter
      </button>
    </>
  );
}

export default App;
