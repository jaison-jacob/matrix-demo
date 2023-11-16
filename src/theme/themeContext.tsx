import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import React, { useState } from "react";
import { RootThemeContext } from "./RootThemeContext";

export default function ThemeContext({ children }) {
  const [activeTheme, setActiveTheme] = useState<string>("dark");

  return (
    <ThemeProvider theme={activeTheme === "light" ? theme.light : theme.dark}>
      <RootThemeContext.Provider
        value={{
          activeTheme,
          setActiveTheme,
        }}
      >
        {children}
      </RootThemeContext.Provider>
    </ThemeProvider>
  );
}
