import React, { useState } from "react";
import "../styles/editor.css";
import { ChromePicker } from "react-color";
import PanelDeDibujo from "./PanelDeDibujo";

const Editor = () => {
  const [PanelWidht, setPanelWidht] = useState(16);
  const [PanelHeight, setPanelHeight] = useState(16);
  const [hideOptions, sethideOptions] = useState(false);
  const [hideDrawingPanel, sethideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("Empezar dibujo");
  const [selectedColor, setColor] = useState("#0F2219");

  const MAX_DIMENSION = 75;
  const MIN_DIMENSION = 1;

  function iniciarPanelDeDibujo() {
    sethideOptions(!hideOptions);
    sethideDrawingPanel(!hideDrawingPanel);

    buttonText === "Empezar dibujo"
      ? setButtonText("Reset")
      : setButtonText("Empezar dibujo");
  }

  function cambiarColor(color) {
    setColor(color.hex);
  }

  function handleWidthChange(e) {
    const value = parseInt(e.target.value);
    if (value >= MIN_DIMENSION && value <= MAX_DIMENSION) {
      setPanelWidht(value);
    } else if (value > MAX_DIMENSION) {
      setPanelWidht(MAX_DIMENSION);
      e.target.value = MAX_DIMENSION;
    } else {
      setPanelWidht(MIN_DIMENSION);
      e.target.value = MIN_DIMENSION;
    }
  }

  function handleHeightChange(e) {
    const value = parseInt(e.target.value);
    if (value >= MIN_DIMENSION && value <= MAX_DIMENSION) {
      setPanelHeight(value);
    } else if (value > MAX_DIMENSION) {
      setPanelHeight(MAX_DIMENSION);
      e.target.value = MAX_DIMENSION;
    } else {
      setPanelHeight(MIN_DIMENSION);
      e.target.value = MIN_DIMENSION;
    }
  }

  return (
    <>
      <div className="editor">
        <h2 className="tittle">EDITOR</h2>
        {hideDrawingPanel && <h2>Ingresa las dimensiones de tu lienzo</h2>}
        {hideDrawingPanel && (
          <div className="opcionesNum">
            <div className="opcionesInput">
              <input
                type="number"
                className="numberInput"
                defaultValue={PanelWidht}
                min={MIN_DIMENSION}
                max={MAX_DIMENSION}
                onChange={handleWidthChange}
              />
              <span>Largo (máx: {MAX_DIMENSION})</span>
              <input
                type="number"
                className="numberInput"
                defaultValue={PanelHeight}
                min={MIN_DIMENSION}
                max={MAX_DIMENSION}
                onChange={handleHeightChange}
              />
              <span>Ancho (máx: {MAX_DIMENSION})</span>
            </div>
          </div>
        )}

        <button onClick={iniciarPanelDeDibujo} className="button">
          {buttonText}
        </button>
        <div className="colorPicker">
          {hideOptions && (
            <ChromePicker
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
    </>
  );
};

export default Editor;
