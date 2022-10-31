import React from "react";
import ReactDOM from "react-dom/client";
//import { TodoApp } from "./TodoApp";
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={123} />
  </React.StrictMode>
);
