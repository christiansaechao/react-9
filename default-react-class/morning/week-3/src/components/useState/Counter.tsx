import { useState } from "react";

/*
Requirements:
- Display a count starting at 0
- Add buttons for:
  - Increment (+1)
  - Decrement (-1)
  - Reset to 0
- Prevent count from going below 0
- Show a message when count is 0 (e.g., "You reached the limit")
*/

export default function SmartCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      {/* CODE HERE */}
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
