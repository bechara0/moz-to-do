import React from "react";

export const FilterButton = (props) => {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Muestra </span>
      <span>Todos</span>
      <span className="visually-hidden"> las tareas</span>
    </button>
  );
};
