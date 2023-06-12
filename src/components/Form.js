import React from "react";

export const Form = (props) => {
  function handleSubmit(e) {
    alert("Enviado!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Que necesitas hacer?
        </label>
      </h2>
      <input
        type="text"
        placeholder="Ingrese la tarea"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg botoncito">
        Agregar
      </button>
    </form>
  );
};
