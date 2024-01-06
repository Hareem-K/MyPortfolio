import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>ABOUT</h1>
      <img className='image' src="https://i.postimg.cc/SNJFPCpS/photo.png" alt="Hareem Khan" />
      <p className='description'>
        I am a motivated third-year engineering student at the University of Calgary, passionate about software development and actively seeking employment opportunities to enhance my knowledge and skills. With a strong foundation in programming, I am experienced in Java, Python, C, C++, SQL, JavaScript (Vanilla JS and React.js), CSS, and HTML.
      </p>
      <div className='hero-btns'>
        {/* Add your buttons or other content here */}
      </div>
    </div>
  );
}

export default HeroSection;
