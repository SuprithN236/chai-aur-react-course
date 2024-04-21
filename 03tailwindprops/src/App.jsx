// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    name: "Suprith",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card myChannel="Chai" someObj={myObj}></Card>
    </>
  );
}

export default App;
