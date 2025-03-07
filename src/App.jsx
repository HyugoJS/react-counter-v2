import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // console.log("test");
  const [counterTab, setCounterTab] = useState([]);

  return (
    <>
      <h1>Counter</h1>
      <div>
        {counterTab.map((elem, index) => {
          return <div key={index}>{elem}</div>;
        })}
      </div>
      <button
        onClick={() => {
          const newTab = [...counterTab];
          newTab.push(<Counter state={counterTab[0]} />);
          setCounterTab(newTab);
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
