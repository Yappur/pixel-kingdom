import React, { useState, useEffect } from "react";
import "../styles/pixel.css";

const Pixel = ({ selectedColor, isDrawing, currentTool }) => {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [prevColor, setPrevColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Efecto para aplicar color cuando está dibujando y el mouse pasa por encima
  useEffect(() => {
    if (isDrawing && isHovered) {
      setPixelColor(selectedColor);
    }
  }, [isDrawing, isHovered, selectedColor]);

  function handleClick() {
    setPixelColor(selectedColor);
    setPrevColor(selectedColor);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    if (!isDrawing) {
      // Solo cambiar el color temporalmente si no estamos dibujando
      setPrevColor(pixelColor);
      setPixelColor(selectedColor);
    }
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (!isDrawing) {
      // Restaurar el color original solo si no estamos dibujando
      setPixelColor(prevColor);
    }
  }

  return (
    <div
      className="pixel"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
