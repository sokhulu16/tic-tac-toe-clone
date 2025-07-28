import React from "react";
import ThemeContextProvider from "./ThemeContext";
import { GameContextProvider } from "./GameContext"; // ✅ Fix this line

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;

