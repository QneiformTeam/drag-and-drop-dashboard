import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./containers/Dashboard";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

function App() {
  return (
    <Dashboard />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


