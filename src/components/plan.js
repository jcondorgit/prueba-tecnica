import React from 'react';
import './plan.css'; 
import Btndscto from './btndscto';

const Plan = ( props ) => {

    const handleClick = () => {
        console.log('Botón clickeado');
    };
    // Acceder al array a través de props.data
    console.log(props);
    if (!props || !props.data) {
        return <div>Error: Propiedad 'data' no definida.</div>;
    }
    const arrayFromProps = props.data;
      

    return (
      <div className="plan">
        <div className="plan-content">
          <h2 className="plan-title">{props.title}</h2>
          <span className="plan-gigas">{props.gigas}
          </span>
        </div>

        <ul>
            {arrayFromProps.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <img src={props.imageUrl} alt={props.title} className="plan-image" />
        
        
        <div>
            <Btndscto onClick={handleClick}>Click Me</Btndscto>
        </div>
      </div>
    );
  }
  
  export default Plan;