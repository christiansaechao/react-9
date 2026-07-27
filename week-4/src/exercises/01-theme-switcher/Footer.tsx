export default function Footer() {
  const theme: "light" | "dark" = "light";

  return (
    <footer
      style={{
        padding: 12,
        background: theme === "light" ? "#f0f0f0" : "#111",
        color: theme === "light" ? "#111" : "#eee",
      }}
    >
      © 2026 My Site — theme: {theme}
    </footer>
  );
}
