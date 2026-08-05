
import { useState } from "react";
// this entire file, component, variable of whatever we're importing | template, if it's a component
import "./App.css";

type UserProp = {
  name: string; 
  age: number;
}

function App() {
  const [user, setUser] = useState<UserProp>({ name: "Joe", age: 25 });
  setUser({ ...user, age: 26 }); 
  
  return (
    <>
      
    </>
  );
}

export default App;