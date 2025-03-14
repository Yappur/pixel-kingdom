import React, { useState } from "react";
import "../styles/editor.css";
import { CompactPicker } from "react-color";
import PanelDeDibujo from "./PanelDeDibujo";

const Editor = () => {
  const [PanelWidht, setPanelWidht] = useState(16);
  const [PanelHeight, setPanelHeight] = useState(16);
  const [hideOptions, sethideOptions] = useState(false);
  const [hideDrawingPanel, sethideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#0F2219", "#0F2219", "#0F2219");

  function iniciarPanelDeDibujo() {
    sethideOptions(!hideOptions);
    sethideDrawingPanel(!hideDrawingPanel);

    buttonText === "Empezar dibujo"
      ? setButtonText("Empezar dibujo")
      : setButtonText("Reset");
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
            <span>Largo</span>
            <input
              type="number"
              className="numberInput"
              defaultValue={PanelHeight}
              onChange={(e) => setPanelHeight(e.target.value)}
            />
            <span>Ancho</span>
          </div>
        </div>
      )}

      <button onClick={iniciarPanelDeDibujo} className="button">
        {buttonText}
      </button>
      <div className="colorPicker">
        {hideOptions && (
          <CompactPicker
            color={selectedColor}
            onChangeComplete={cambiarColor}
          />
        )}
      </div>

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
