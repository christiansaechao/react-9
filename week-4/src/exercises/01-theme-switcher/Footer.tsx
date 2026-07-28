import type { ThemeStuff } from '../../types/types';


export default function Footer({ setTheme, theme }: ThemeStuff) {

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
