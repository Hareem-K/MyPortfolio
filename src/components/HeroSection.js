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
        My name is Hareem Khan, and I’m a driven fourth-year Software Engineering student at the University of Calgary. I have a deep passion for software development, with expertise in both front-end and back-end technologies. My skill set includes JavaScript (React.js & Node.js), CSS/HTML, Python, Java, SQL, and C/C++. I thrive on creating efficient, user-centric solutions and am always eager to apply my knowledge to real-world challenges.
      </p>
      <div className='hero-btns'>
        {/* Add your buttons or other content here */}
      </div>
    </div>
  );
}

export default HeroSection;
