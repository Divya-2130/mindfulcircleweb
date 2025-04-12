import React, { useEffect } from 'react'
import './Foodhome.css'
// import foodhome from '../Assets/food.png'
// import fj4_img from '../Assets/fj4.png'
// import fsys15_img from '../Assets/fsys15.png'
// import fs7_img from '../Assets/fs7.png'
// import fsys16_img from '../Assets/fsys16.png'

// Import AOS library
import AOS from 'aos'
import 'aos/dist/aos.css'

const Foodhome = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="foodhome-background">
      <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953541/food_ejzyxb.png"} alt="foodhome" className="foodhome-image"  type='image/png'/>

      <div className="h11" data-aos="fade-down">
        <span><h2>FOOD</h2></span>
      </div>

      <div className="foodhome">

        {/* Horizontal Scrollable Images */}
        <div className="foodhome-top" data-aos="fade-up">
          <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953597/fj4_t5sbym.png"} alt="Food 1" data-aos="zoom-in" data-aos-delay="200" />
          <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953463/fsys15_q4xp0z.png"} alt="Food 2" data-aos="zoom-in" data-aos-delay="400" />
          <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953531/fs7_ednhdq.png"} alt="Food 3" data-aos="zoom-in" data-aos-delay="600" />
          <img src={"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953451/fsys16_udny91.png"} alt="Food 4" data-aos="zoom-in" data-aos-delay="800" />
        </div>

        {/* Bottom Text */}
        <div className="foodhome-bottom" data-aos="fade-up" data-aos-delay="500">
          <p>
            Eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins helps maintain overall health.
            Staying hydrated by drinking plenty of water supports digestion, circulation, and energy levels.
            Limiting processed foods, sugar, and unhealthy fats reduces the risk of obesity, diabetes, and heart disease.
            Including healthy fats like nuts, seeds, and olive oil promotes brain function and heart health.
            Regular meals with proper portion control prevent overeating and keep metabolism balanced. 🚀🥗
          </p>
        </div>

      </div>
    </div>
  )
}

export default Foodhome