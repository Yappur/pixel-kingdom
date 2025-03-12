import React, { useState } from "react";
import "../styles/editor.css";

const Editor = () => {
  const [PanelWidht, setPanelWidht] = useState(16);
  const [PanelHeight, setPanelHeight] = useState(16);
  const [hideOptions, sethideOptions] = useState(false);
  const [hideDrawingPanel, sethideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#000000");

  return (
    <div className="editor">
      <h1>Pixel Editor</h1>
      <h2>Igresa las dimensiones de tu lienzo</h2>
      <div className="opcionesNum">
        <div className="opcionesInput">
          <input
            type="number"
            className="numberInput"
            defaultValue={PanelWidht}
            onChange={(e) => setPanelWidht(e.target.value)}
          />
          <span>Largo </span>
          <br />
          <input
            type="number"
            className="numberInput"
            defaultValue={PanelHeight}
            onChange={(e) => setPanelHeight(e.target.value)}
          />
          <span> Ancho</span>
        </div>
      </div>

      <button className="button">{buttonText}</button>
    </div>
  );
};

export default Editor;
