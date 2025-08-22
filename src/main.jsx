import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./context";
import { ModalContextProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


