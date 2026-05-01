import React, { useEffect, useRef, useState } from 'react';
import './MoreInfo.css';

function MoreInfo() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="more-info" className="about-container" ref={ref}>
      <div className="about-wrapper">
        <div className={`about-content ${visible ? 'about-content--visible' : ''}`}>

          <div className="about-image">
            <img
              className="image"
              src="/images/IMG_0429.jpg"
              alt="Hareem Khan"
            />
          </div>

          <div className="about-text">
            <span className="about-eyebrow">About Me</span>
            <h2>Building things that matter</h2>
            <p>
              I'm a Software Engineering graduate currently pursuing my MEng in Electrical & Computer Engineering with a
              specialization in Software Engineering at the University of Calgary. I'm currently working as a UI/UX Designer
              and Frontend Developer Intern, where I focus on creating intuitive interfaces and building responsive,
              user-centered applications.
            </p>

            <p>
              My professional interests include full-stack development, thoughtful UI/UX design, and developing modern digital
              products that blend strong engineering principles with meaningful user experiences. I enjoy working across the stack,
              from building clean and accessible frontend components in React to developing scalable backend functionality.
            </p>

            <p>
              Outside of my technical work, I volunteer with APEGA's Work Readiness Advisory Group, contributing to initiatives
              that support the growth and development of future engineers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MoreInfo;