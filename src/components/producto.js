import React from 'react';
import './producto.css'; 
import Btndscto from './btndscto';

const Producto = ( props ) => {
    
    const { imgProducto, precio, preciofinal, modelo, cuotas } = props;

    const handleClick2 = () => {
        console.log('Botón clickeado');
    };
    return (
        <div className="producto">
            <div>
                <Btndscto clase="btnrojo" contenido="25% de descuento" onClick={handleClick2} />
            </div>
            <img src={imgProducto} alt={modelo} ></img>
            <div>
                <span className='modeloProducto'>
                    {modelo}
                </span>
                <span className='cuotasProducto'>
                    Hasta en {cuotas} cuotas de:
                </span>
                <span className='precioProducto'>
                    ${precio}
                </span>
                <span className='precioFinalProducto'>
                    Precio final: ${preciofinal}
                </span>

            </div>
        </div>
    )
}

export default Producto;