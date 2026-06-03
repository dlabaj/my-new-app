import * as React from 'react';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    const stored = localStorage.getItem('pf-theme');
    return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  React.useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkTheme) {
      htmlElement.classList.add('pf-v6-theme-dark');
      localStorage.setItem('pf-theme', 'dark');
    } else {
      htmlElement.classList.remove('pf-v6-theme-dark');
      localStorage.setItem('pf-theme', 'light');
    }
  }, [isDarkTheme]);

  const toggleTheme = React.useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const value = React.useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

