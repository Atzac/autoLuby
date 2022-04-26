import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "@globalStyle/index";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
