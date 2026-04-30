import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById('more-info');
    if (element) {
      const offset = -50;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/AdobeStock_715822779 (1).mov" type="video/mp4" media="(max-width: 768px)" />
        <source src="/videos/AdobeStock_715822779 (1).mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`cta-content ${loaded ? 'cta-loaded' : ''}`}>
        <p className="cta_eyebrow">Software Engineer · UI/UX Designer</p>
        <h1 className="cta_header">Hi, I'm Hareem</h1>
        <p className="cta_description">
          A software engineering graduate passionate about creating impactful applications
          and seamless digital experiences.
        </p>
        <div className="cta_button_wrap">
          <Button
            className="btns"
            buttonStyle="btn--download"
            buttonSize="btn--large"
            onClick={handleScroll}
          >
            View My Work <i className="fas fa-arrow-down"></i>
          </Button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line"></span>
        <span className="scroll-text">scroll</span>
      </div>
    </div>
  );
}

export default HeroSection;
