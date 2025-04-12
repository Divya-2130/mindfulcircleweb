// // import React from 'react';
// import './Explore.css';
// import { Link } from 'react-router-dom';

// const Explore = (props) => {
//   return (
//     <div className='explore'>
//       <div className="div-explore">
//          <video   autoPlay loop muted playsInline  src={props.viedo} type='video/mp4' ></video>
//         <h4>{props.title}</h4>
//         <h3>{props.subtitle}</h3>
//         <p>{props.description}</p>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Explore;



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
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          src={props.viedo} 
          type="video/mp4"
          onClick={handleFullscreen} // Click to enter fullscreen
        ></video>
        <h4>{props.title}</h4>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Explore;