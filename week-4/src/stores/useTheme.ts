import { create } from "zustand";
import type { ThemeStuff, Theme } from "../types/types";


// useTheme returns an object
// destructuring

const theme = localStorage.get("theme");

export const useTheme = create<ThemeStuff>((set) => (
    {
        theme: theme,
        setTheme: (newTheme: Theme) => set({ theme: newTheme }),
    }
));