import React, { useState } from "react";
import "../styles/editor.css";

const Editor = () => {
  return (
    <div className="editor">
      <h1>Pixel Editor</h1>
      <h2>Igresa las dimensiones de tu lienzo</h2>
      <div className="opcionesNum">
        <div className="opcionesInput">
          <input type="number" className="numberInput" defaultValue={16} />
          <input type="number" className="numberInput" defaultValue={16} />
          <br />
          <span>Largo </span>
          <span> Ancho</span>
        </div>
      </div>

      <button className="button">Crear</button>
    </div>
  );
};

export default Editor;
