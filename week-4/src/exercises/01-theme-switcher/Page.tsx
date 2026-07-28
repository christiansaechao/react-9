import type { ThemeStuff } from "../../types/types";

export default function Page({ theme }: ThemeStuff) {
  return (
    <main
      style={{
        padding: 24,
        background: theme === "light" ? "#fff" : "#1a1a1a",
        color: theme === "light" ? "#111" : "#eee",
      }}
    >
      <h1>Welcome</h1>
      <p>This page should switch to dark mode when the navbar theme changes.</p>
    </main>
  );
}
