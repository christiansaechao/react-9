import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoggedIn(true);
  }

  if (loggedIn) {
    return <p>Logged in locally as {name} (Navbar doesn't know yet).</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 16 }}>
      <h2>Log in</h2>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        Log in
      </button>
    </form>
  );
}
