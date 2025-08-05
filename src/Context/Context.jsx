import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null);

function AppContextProvider({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light';
  });

  useEffect(() => {
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
