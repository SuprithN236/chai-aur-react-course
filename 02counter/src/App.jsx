import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  function addValue() {
    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
