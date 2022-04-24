import React from "react";
import { GlobalStyle } from "@globalStyle/index";
import { Login, Home, YourVehicles, AllVehicles, Employees } from "./page/index";
import TesteProvider from "@store/teste/testeContext";

function App() {
  return (
    <TesteProvider>
      <GlobalStyle />
      <Employees />
    </TesteProvider>
  );
}

export default App;
