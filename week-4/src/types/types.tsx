export type Theme = "light" | "dark"

export type ThemeStuff = {
  setTheme?: (theme: Theme) => void,
  theme: Theme
}
