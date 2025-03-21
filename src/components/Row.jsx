import React from "react";
import Pixel from "./Pixel";
import "../styles/pixel.css";

const Row = ({ widht, selectedColor, isDrawing, currentTool }) => {
  let pixels = [];

  for (let i = 0; i < widht; i++) {
    pixels.push(
      <Pixel
        key={i}
        selectedColor={selectedColor}
        isDrawing={isDrawing}
        currentTool={currentTool}
      />
    );
  }
  return <div className="row">{pixels}</div>;
};

export default Row;
