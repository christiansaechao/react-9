import { useState } from "react";
import SmartCounter from "./components/useState/Counter";
import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";
function App() {
  const [name, setName] = useState("Joe");

  function updateName() {
    setName("Riley");
  }

  return (
    <>
      {/* <SmartCounter /> */}
      <CharacterCounter />
    </>
  );
}

export default App;
