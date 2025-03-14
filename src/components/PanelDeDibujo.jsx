import React from "react";
import Row from "./Row";

import "../styles/panelDeDibujos.css";

const PanelDeDibujo = ({ widht, height, selectedColor }) => {
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} widht={widht} selectedColor={selectedColor} />);
  }

  return (
    <div id="panelDeDibujo" className="panelDeDibujo">
      <div id="pixels" className="pixels">
        {rows}
      </div>
    </div>
  );
};

export default PanelDeDibujo;
