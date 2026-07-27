import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <nav style={{ padding: 12, border: "1px solid #ccc" }}>
      <strong>My Site</strong>
      <button
        style={{ marginLeft: 12 }}
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle theme (currently: {theme})
      </button>
    </nav>
  );
}
