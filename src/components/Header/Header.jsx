import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import logo from "../../assets/tic-tac-toe-game.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigater = useNavigate()
  return (
    <HeaderWrapper>
      <img
        src={logo}
        onClick={() => navigater("/")}
        alt="Tic Tac Toe Logo"
        width={50}
        height={50}
        className="logo"
      />
      <span onClick={toggleTheme}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
