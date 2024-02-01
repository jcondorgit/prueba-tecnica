import './App.css';
import React from 'react';
import Plan from './components/plan';
import Producto from './components/producto';

const App = () => {

  const distribGigas = ['12', '6', '5'];
  const subElementoGigas = ['Navegación', 'url-de-la-imagen.jpg', 'x 6 meses'];
  const urlDeLProducto = 'https://ww2.movistar.cl/equipos/apple/assets-week/img/equipos/400x557_iPhone-12-PRO-MAX_silver.png';


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
          imgProducto = {urlDeLProducto}
          precio = "392.00"
          preciofinal = "1873.00"
          modelo = "IPhone 12 Pro Max negro"
          cuotas = "12"
        />
    </div>
    
  );

}

export default App;
