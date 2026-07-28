import { useTheme } from "../../stores/useTheme";

export default function Navbar() {
  
 const { theme, setTheme } = useTheme((state) => state);

  return (
    <nav style={{ padding: 12, border: "1px solid #ccc" }}>
      <strong>My Site</strong>
      <button
        style={{ marginLeft: 12 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle theme (currently: {theme})
      </button>
    </nav>
  );
}
