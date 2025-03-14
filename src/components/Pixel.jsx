import React, { useState } from "react";
import "../styles/pixel.css";

const Pixel = ({ selectedColor }) => {
  const [pixelColor, setpixelColor] = useState("#fff");
  const [oldColor, setoldColor] = useState(pixelColor);
  const [canChangeColor, setcanChangeColor] = useState(true);

  return <div className="pixel" style={{ backgroundColor: pixelColor }}></div>;
};

export default Pixel;
