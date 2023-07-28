// DarkModeContext.jsx
import { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);
    mediaQuery.addListener(e => setDarkMode(e.matches));
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
