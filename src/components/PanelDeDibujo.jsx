import React, { useRef } from "react";
import Row from "./Row";
import "../styles/panelDeDibujos.css";

const PanelDeDibujo = ({ widht, height, selectedColor }) => {
  const pixelsRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} widht={widht} selectedColor={selectedColor} />);
  }

  const descargarComoImagen = () => {
    // Creamos un canvas del mismo tamaño que nuestro panel
    const canvas = document.createElement("canvas");
    const pixelsElement = pixelsRef.current;

    if (!pixelsElement) return;

    // Configuramos el tamaño del canvas
    // Multiplicamos por un factor para aumentar la resolución si es necesario
    const factor = 10; // Puedes ajustar este valor para cambiar el tamaño de la imagen
    canvas.width = widht * factor;
    canvas.height = height * factor;

    const ctx = canvas.getContext("2d");

    // Dibujamos cada pixel en el canvas
    const pixelElements = pixelsElement.querySelectorAll(".pixel");
    let index = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < widht; x++) {
        if (index < pixelElements.length) {
          // Obtenemos el color de fondo de cada pixel
          const pixelColor = window.getComputedStyle(
            pixelElements[index]
          ).backgroundColor;
          ctx.fillStyle = pixelColor;
          // Dibujamos un rectángulo para cada pixel
          ctx.fillRect(x * factor, y * factor, factor, factor);
          index++;
        }
      }
    }

    // Creamos un enlace para descargar la imagen
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "pixel-art.png";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <div id="panelDeDibujo" className="panelDeDibujo">
      <div id="pixels" className="pixels" ref={pixelsRef}>
        {rows}
      </div>
      <button onClick={descargarComoImagen} className="button">
        Descargar como PNG
      </button>
    </div>
  );
};

export default PanelDeDibujo;
