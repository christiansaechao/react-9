import { useState } from "react";
import SmartCounter from "./components/useState/Counter";
import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";
import TodoList from "./components/useState/TodoList";

function App() {
  const [name, setName] = useState("Joe");

  function updateName() {
    setName("Riley");
  }

  return (
    <>
      {/* <SmartCounter /> */}
      {/* <CharacterCounter /> */}

      <TodoList />
    </>
  );
}

export default App;
