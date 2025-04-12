import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='items'>
      <div className="div-items">
        <img  src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
      </div> 
      <hr /> 
    </div>
  );
};

export default Items;    




