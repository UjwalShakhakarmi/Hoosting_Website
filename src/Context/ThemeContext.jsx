import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "mytheme"
  );
  function handleToggle(e) {
    if (e.target.checked) {
      setTheme("mytheme");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const getBackgroundImage = () => {
    return theme === "light"
      ? "red"
      : "bg-gradient-to-r from-blue-900 to-indigo-1200 ";
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggle, getBackgroundImage }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
