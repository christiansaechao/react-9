import { useState, useEffect } from "react";

/*
Requirements: When the button is clicked, counter increments +1, 
  - update the document.title to whatever number counter is at  
- Create a counter
- Update the document title to: document.title
  "Count: X"
- Update title whenever count changes
*/

export default function TitleUpdater() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect goes here

  return (
    <div>
      {count} <br />
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Counter 2!</button>
    </div>
  );
}
