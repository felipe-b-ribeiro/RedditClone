import { useState } from "react";
import { themeContext } from "./context";

type Theme = 'light' | 'dark';

export function ThemeProvider({ children }: {children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    
    const toggleTheme = () => {
       const newTheme = theme === 'light' ? 'dark' : 'light';
       setTheme(newTheme);
       localStorage.setItem('theme', newTheme);
       document.documentElement.setAttribute('data-theme', newTheme);
    };  
    return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
