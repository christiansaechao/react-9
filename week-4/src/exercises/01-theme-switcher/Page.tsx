export default function Page() {
  const theme: "light" | "dark" = "light";

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
