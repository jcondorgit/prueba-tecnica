// src/components/btndscto.js
import React from 'react';
import './btndscto.css'; // Importa el archivo de estilos (crearemos esto más adelante)

const Btndscto = ( props ) => {
  return (
    <button className={props.clase} onClick={props.onClick}>
      {props.contenido}
    </button>
  );
}
//{ onClick, children,className }

export default Btndscto;