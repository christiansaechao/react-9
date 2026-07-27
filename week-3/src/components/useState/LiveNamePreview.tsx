import { useState } from "react";

/*
Requirements:
- Create an input field for a name
- Display: "Hello, [name]!"
- If input is empty, show: "Please enter your name"
- Limit input to 20 characters
*/

export default function NamePreview() {
  // input field, keep track of the text value inside of it
  const [name, setName] = useState("");
  // for the error message
  const [errorMessage, setError] = useState("");

  // a
  function checkNameLength(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 20) {
      setError("Limited to 20! Set valid Name input!");
      return;
    }

    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="Name"></label>
        <input type="text" value={name} onChange={(e) => checkNameLength(e)} />
        <button type="submit">submit</button>
        {name.length > 20 && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}
