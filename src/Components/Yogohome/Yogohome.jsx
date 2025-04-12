import React from 'react'
import './Yogohome.css'

const Yogohome = () => {
  return (
    <div className='yogohome-background'>
       {/* <img src={y5_img} alt="foodhome" className="yogohome-image"  type='image/png'/> */}
      <video autoPlay loop muted playsInline className=' yogaback-viedo'>
        <source src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743952425/yogahome_d6xf6j.mp4"} type="video/mp4" />
      </video>          
      <div className="h11"><h2>YOGA</h2></div>
      <div className='yogohome'>
        <div className="yogo-left">
          <p>Yoga improves flexibility, strength, and posture while
             boosting overall physical health. 🧘‍♂️ It reduces stress, 
             enhances focus, and promotes emotional well-being. 😊 Regular
              practice supports heart health, digestion, and better sleep. 🌿 Plus, 
            it strengthens immunity and aids in weight management! 💪</p>
        </div>
        <div className="yogo-right">
          <div className="yoga-right-img">
            <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743952924/y5_vsyu7n.png"} alt="" />
            <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743952801/y6_n4zx6s.png"} alt="" />
            <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743952811/y7_w1jxs9.png"} alt="" />
            <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743952803/y8_kmzdbf.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yogohome