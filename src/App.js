import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./routes";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <GlobalStyle />
      <Header />
      <Router />
    </React.Fragment>
  );
}

export default App;
