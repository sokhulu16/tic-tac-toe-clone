import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Games from "./Pages/Game/Games";
import Details from "./Pages/Details/Details";
import GlobalStyle from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darktheme } from "./styles/theme";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header/Header";
// import { ModalContext } from "./context/ModalContext";

// export const Test = ({ handleModal }) => {
//   return (
//     <div>
//       <button
//         onClick={() => handleModal(<Modal handleModal={handleModal} />)}
//       >Show Modal</button>
//     </div>
//   );
// };

// export const Modal = ({ handleModal }) => {
//   return <div>ygsdzzyub\vgfzgzsdgbdkzybgz</div>;
// };

const App = () => {
  const { theme } = useContext(ThemeContext);
  // const {handleModal} = useContext(ModalContext)

  const mode = theme === "light" ? lightTheme : darktheme;
  return (
    <ThemeProvider theme={mode}>
      {/* <Test handleModal={handleModal}/> */}
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Games />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
