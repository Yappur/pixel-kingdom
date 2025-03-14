import React, { useState } from "react";
import "../styles/editor.css";
import { CirclePicker } from "react-color";
import PanelDeDibujo from "./PanelDeDibujo";

const Editor = () => {
  const [PanelWidht, setPanelWidht] = useState(16);
  const [PanelHeight, setPanelHeight] = useState(16);
  const [hideOptions, sethideOptions] = useState(false);
  const [hideDrawingPanel, sethideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#0F2219");

  function iniciarPanelDeDibujo() {
    sethideOptions(!hideOptions);
    sethideDrawingPanel(!hideDrawingPanel);

    buttonText === "Empezar dibujo"
      ? setButtonText("Empezar de Nuevo")
      : setButtonText("Empezar dibujo");
  }

  function cambiarColor(color) {
    setColor(color.hex);
  }

  return (
    <div className="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Igresa las dimensiones de tu lienzo</h2>}
      {hideDrawingPanel && (
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
      )}

      <button onClick={iniciarPanelDeDibujo} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={cambiarColor} />
      )}

      {hideOptions && (
        <PanelDeDibujo
          widht={PanelWidht}
          height={PanelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
};

export default Editor;
