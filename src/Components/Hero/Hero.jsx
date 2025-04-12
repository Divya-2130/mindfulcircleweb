
import React, { useRef } from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

}
  return (
    <div className="hero" >
      <video autoPlay loop muted playsInline  className='back-viedo'>
        <source src={"https://res.cloudinary.com/dev9g8jbc/video/upload/v1743953322/herov7_anids7.mp4"} type='video/mp4' />
      </video> 
       <nav>
        <span className="material-symbols-outlined anim" id='logo' style={{ animationDelay: "1s" }}>autorenew</span>
        <img className='nav_dropdown' onClick={dropdown_toggle} src= {"https://res.cloudinary.com/dev9g8jbc/image/upload/v1743953633/dropdown-icon_vltdxz.png"} alt="" />
        <ul ref = {menuRef}  className="nav-menu" >
          <li><Link to="/" className='anim links' style={{ animationDelay: "1.3s" }}>HOME</Link></li> 
          <li><Link to="/yoga" className='anim links' style={{ animationDelay: "1.7s" }}>YOGA</Link></li> 
          <li><Link to="/food" className='anim links' style={{ animationDelay: "1.9s" }}>FOOD</Link></li> 
          <li><Link to="/other" className='anim links' style={{ animationDelay: "2.3s" }}>OTHER</Link></li> 
        </ul>
        
      </nav> 
      <div className="content">
        <h1 className='anim' style={{ animationDelay: "2.6s" }}>MINDFUL CIRCLE</h1>
        <p className='anim anims' style={{ animationDelay: "2.9s" }}> "Each day is your chance to reset — to show up for your health,<br/> your dreams, and your peace."</p>
        <a href="" className='anim' style={{ animationDelay: "3.3s" }}>EXPLORE</a>
      </div> 
    </div>
  );
};

export default Hero;

