import React, { useState } from "react";
import "../styles/pixel.css";

const Pixel = ({ selectedColor }) => {
  const [pixelColor, setpixelColor] = useState("#fff");
  const [oldColor, setoldColor] = useState(pixelColor);
  const [canChangeColor, setcanChangeColor] = useState(true);

  function aplicarColor() {
    setpixelColor(selectedColor);
    setcanChangeColor(false);
  }

  function cambiarColor() {
    setoldColor(pixelColor);
    setpixelColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setpixelColor(oldColor);
    }
    setcanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={aplicarColor}
      onMouseEnter={cambiarColor}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
