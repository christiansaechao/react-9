import { useState } from "react";

export default function ThemeCorner() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div style={{ padding: 8 }}>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Theme: {theme}
      </button>
    </div>
  );
}
