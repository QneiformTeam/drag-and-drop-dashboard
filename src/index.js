import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Dashboard from "./containers/Dashboard";
import configureStore from "./configureStore";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


