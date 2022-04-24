import React from "react";
import { GlobalStyle } from "@globalStyle/index";
import { Login, Home, AllVehicles } from "./page/index";
import TesteProvider from "@store/teste/testeContext";

function App() {
  return (
    <TesteProvider>
      <GlobalStyle />
      <AllVehicles />
    </TesteProvider>
  );
}

export default App;
