import './App.css';
import React from 'react';
import Plan from './components/plan';

const App = () => {

  const distribGigas = ['12', '6', '5'];
  
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Plan
        title = "Plan Movistar Bronze"
        gigas = "23 GB"
        imageUrl = "url-de-la-imagen.jpg"
        data = {distribGigas}
      />
    </div>
  );

}

export default App;
