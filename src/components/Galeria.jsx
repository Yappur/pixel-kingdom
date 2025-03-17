import React from "react";
import "../styles/galeria.css";

const Galeria = () => {
  return (
    <>
      <div className="galeria-container">
        <h2 className="tittle">GALERIA</h2>
        <div className="ejemplos">
          <img src="/ejemplo2.png" alt="ejemplo" />
          <img src="/ejemplo1.png" alt="ejemplo" />
          <img src="/ejemplo3.png" alt="ejemplo" />
        </div>
      </div>
    </>
  );
};

export default Galeria;
