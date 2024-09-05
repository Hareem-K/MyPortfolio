import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/beige-flow1.mp4' autoPlay loop muted />
      <h1>Welcome</h1>
      <img className='image' src="https://i.postimg.cc/SNJFPCpS/photo.png" alt="Hareem Khan" />
      <p className='description'>
        My name is Hareem Khan, and I am a motivated fourth-year Software Engineering student at the University of Calgary. I am passionate about software development and have a strong foundation in programming, with experience in JavaScript (React.js), CSS/HTML, Python, Java, SQL, and C/C++.
      </p>
      <div className='hero-btns'>
        {/* Add your buttons or other content here */}
      </div>
    </div>
  );
}

export default HeroSection;
