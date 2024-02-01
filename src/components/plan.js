import React from 'react';
import './plan.css'; 
import Btndscto from './btndscto';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const Plan = ( props ) => {
    const handleClick = () => {
        console.log('Botón clickeado');
    };
    // Acceder al array a través de props.data
    if (!props || !props.data) {
        return <div>Error: Propiedad 'data' no definida.</div>;
    }
    const arrayFromProps = props.data;
    const sdata = props.subdata;

    return (
      <div className="plan">
        <div className="plan-content">
          <h2 className="plan-title">{props.title}</h2>
          <span className="plan-gigas">{props.gigas}
          </span>
        </div>
        <div className='contenedorDetalleGigas'>
            <ul className='listadoDetalleGigas'>
                {arrayFromProps.map((item, index) => {
                    const esUltimoElemento = index === arrayFromProps.length - 1;

                    return (
                        <li key={index}>
                            <div className='contenidoHorizontal'>
                                <span>
                                    <span>{item} GB</span>
                                    <span>{sdata[index]}</span></span>
                                {esUltimoElemento ? (
                                    <span>  </span>
                                ) : (
                                    <strong> + </strong>
                                )}    
                            </div>
                                               
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className='rrssfree'>
            <span>
                Redes sociales Libres
                <FontAwesomeIcon icon={faInfoCircle} style={{ padding: '0.5em', verticalAlign:'middle'}}/>
            </span>
        </div>
        <div className='costoPlan'>
            <span className='precioSinIva'>
                $12.36/mes
            </span>
            <span className='mensajePrecio'>
                Precio Incluye Iva
            </span>
        
        </div>        
        <div>
            <Btndscto clase="btnverde" contenido="Recibe los beneficios del plan superiores por 6 meses" onClick={handleClick} />
        </div>
        <div>
            <Btndscto clase="btnrojo" contenido="Incluye 40% de descuento por 3 meses" onClick={handleClick} />
        </div>
        <div>
            Precio al finalizar la promo $20.06 /mes
        </div>
        <div>
            <Btndscto clase="btnazul" contenido="¡Lo quiero!" onClick={handleClick} />
        </div>
        <div className='texto-centrado'>
            <a href="#">Más Beneficios</a>
        </div>
      </div>
      
    );
  }
  
  export default Plan;