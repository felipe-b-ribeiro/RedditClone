import { useContext } from 'react';
import  { themeContext } from './context';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(themeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
