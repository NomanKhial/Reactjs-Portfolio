import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null);

function AppContextProvider({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage on first render, default to 'light'
    return localStorage.getItem('theme') ?? 'light';
  });

  useEffect(() => {
    // Update localStorage whenever theme changes
    localStorage.setItem('theme', theme);
  }, [theme]);

  const store = {
    theme,
    setTheme,
    menuOpen, 
    setMenuOpen
  };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
