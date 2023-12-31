import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const DATA = [
  { id: "todo-0", name: "Comer", completed: true },
  { id: "todo-1", name: "Dormir", completed: false },
  { id: "todo-2", name: "Repetir", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App tasks={DATA} />);
