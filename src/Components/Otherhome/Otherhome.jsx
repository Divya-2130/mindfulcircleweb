import React from 'react';
import './Otherhome.css';
// import o1 from '../Assets/o1.mp4';
// import o2 from '../Assets/o2.mp4';
// import o3 from '../Assets/o3.mp4';
// import o6 from '../Assets/o6.mp4';

const Otherhome = () => {
  return (
    <div className='otherhome-background'>
      <div className="content-container">
        <div className="h11"><span><h2>OTHER</h2></span></div>
        <div className="flexdirection">
          <div className="otherhome-center">
            <p>
              <strong>Travel & Socialize –</strong> Exploring new places and spending time with loved ones reduces stress and boosts happiness.<br /><br />
              <strong>Mindfulness & Hobbies –</strong> Practicing meditation and engaging in creative activities improves focus and emotional well-being.
              <br /><br />
              <strong>Exercise & Rest –</strong> Staying active releases feel-good hormones, while proper sleep helps in mental clarity and relaxation.
              <br /><br />
              <strong>Positive Thinking & Balance –</strong> Gratitude, goal-setting, and limiting screen time improve mood and overall mental health.
            </p>
          </div>
          {/* Videos at the corners of the content box */}
          <div className="videos-container">
           {/* <marquee scrollamount="10"> */}
            <video className="video11" src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743953265/o1_lgvsun.mp4"} autoPlay loop muted></video>
            <video className="video22" src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743953243/o2_r6fzi1.mp4"} autoPlay loop muted></video>
            <video className="video33" src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743954679/o3_mwcwa8.mp4"} autoPlay loop muted></video>
            <video className="video44" src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743953061/o6_mv2pov.mp4"} autoPlay loop muted></video>
           {/* </marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otherhome;