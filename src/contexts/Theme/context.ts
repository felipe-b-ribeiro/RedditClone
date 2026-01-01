import { createContext } from 'react'

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
export const themeContext = createContext<ThemeContextType | undefined>(undefined);

