
import './Items.css';
import React, { useRef } from 'react';
const Items = (props) => {
    const imgref = useRef(null); //refrence is created heere
  
    const handleFullscreen = () => {
      if (imgref.current) { //create reference is used here
        if (imgref.current.requestFullscreen) {
          imgref.current.requestFullscreen();
        } else if (imgref.current.mozRequestFullScreen) { // Firefox
          imgref.current.mozRequestFullScreen();
        } else if (imgref.current.webkitRequestFullscreen) { // Chrome, Safari & Opera
          imgref.current.webkitRequestFullscreen();
        } else if (imgref.current.msRequestFullscreen) { // IE/Edge
          imgref.current.msRequestFullscreen();
        }
      }
    };
  
  return (
    <div className='items'>
      <div className="div-items">
        <img ref={imgref}  src={props.img} alt={props.title} onClick={handleFullscreen}  />
        <h4>{props.title}</h4>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
      </div> 
      <hr /> 
    </div>
  );
};

export default Items;    




