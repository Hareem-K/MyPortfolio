import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const handleScroll = () => {
    const element = document.getElementById('more-info'); // Target the MoreInfo section by ID
    if (element) {
      const offset = -50; // Adjust this value to control the scroll offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/AdobeStock_715822779 (1).mov" type="video/mp4" media="(max-width: 768px)" />
        <source src="/videos/AdobeStock_715822779 (1).mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="cta-content">
        <h1 className="cta_header">Hi, I’m Hareem</h1>
        <p className='cta_description'>
          A software engineering student passionate about creating impactful applications
          and seamless digital experiences.
        </p>
        <div
          className="downloadButton"
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '50px',
            paddingTop: '30px',
          }}
        >
          <Button
            className="btns white-button"
            buttonStyle="btn--download"
            buttonSize="btn--large"
            onClick={handleScroll}
            style={{ width: '250px' }}
          >
            Check Me Out <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
      </div>

      {/* <img
        className="image"
        src="https://i.postimg.cc/SNJFPCpS/photo.png"
        alt="Hareem Khan"
      /> */}
    </div>
  );
}

export default HeroSection;
