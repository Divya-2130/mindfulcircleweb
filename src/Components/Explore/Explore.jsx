import React, { useRef } from 'react';
import './Explore.css';

const Explore = (props) => {
  const videoRef = useRef(null); //refrence is created heere

  const handleFullscreen = () => {
    if (videoRef.current) { //create reference is used here
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari & Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='explore'>
      <div className="div-explore">
        <video ref={videoRef} autoPlay loop muted playsInline src={props.video} type="video/mp4"onClick={handleFullscreen} ></video>
        <h4>{props.title}</h4>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Explore;




