import './App.css';
import React from 'react';
import Plan from './components/plan';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Producto from './components/producto';

library.add(faCoffee); // Agrega los íconos que desees utilizar

const App = () => {

  const distribGigas = ['12', '6', '5'];
  const subElementoGigas = ['Navegación', 'url-de-la-imagen.jpg', 'x 6 meses'];
  
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Plan
        title = "Plan Movistar Bronze"
        gigas = "23 GB"
        imageUrl = "url-de-la-imagen.jpg"
        data = {distribGigas}
        subdata = {subElementoGigas}
      />
      <Producto
        imageUrl = "url-de-la-imagen.jpg"
      />
    </div>
  );

}

export default App;
