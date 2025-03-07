import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // console.log("test");
  const [counters, setCounters] = useState([0, 5, 8]);
  const addCounter = () => {
    setCounters([...counters, 0]); // Chaque compteur démarre à 0
  };
  return (
    <>
      <h1>Counter</h1>
      <div>
        {counters.map((elem, index) => {
          const newCounter = [...counters];
          console.log(elem);
          // newCounter.push(1);
          return newCounter;
          // setCounters(newCounter);
        })}
      </div>
      <button
        onClick={() => {
          {
            addCounter;
          }
        }}
      >
        Add counter
      </button>
      <br />

      {/* <Counter state={counter} setState={setCounter} /> */}
    </>
  );
}

export default App;
