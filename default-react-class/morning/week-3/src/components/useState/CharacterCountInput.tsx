import { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 100 characters
- If limit exceeded:
  - Show warning or change style
  - Disable submit button
*/

// js, condition | ternary operator

// == loose, === strict | data type comparison

export default function CharacterCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [limitExceeded, setLimitExceeded] = useState(false);

  return (
    <div>
      {/* CODE HERE */}
      <textarea
        // disabled={limitExceeded}
        onChange={(e) => {
          setText(e.target.value);
          setLimitExceeded(text.length >= 20);
        }}
      />

      <button disabled={limitExceeded}>submit</button>
      <br />
      {/* {limitExceeded ? <span>warning</span> : <span>{text.length} / 20</span>} */}
      {!limitExceeded || <span>warning</span>}
      {/* {limitExceeded + ""} */}
    </div>
  );
}
