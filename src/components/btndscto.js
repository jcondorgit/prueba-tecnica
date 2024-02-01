// src/components/btndscto.js
import React from 'react';
import './btndscto.css'; // Importa el archivo de estilos (crearemos esto más adelante)

const Btndscto = ({ onClick, children }) => {
  return (
    <button className="dsct-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Btndscto;