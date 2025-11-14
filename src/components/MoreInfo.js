// MoreInfo.js
import React from 'react';
import './MoreInfo.css'

function MoreInfo() {
    return (
        <div id="more-info" className="about-container">
            <div className="about-wrapper">
                <div className="about-content">
                    <div className="about-image">
                        <img
                            className="image"
                            src="/images/IMG_0429.jpg"
                            alt="Hareem Khan"
                        />
                    </div>

                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            I’m a Software Engineering graduate currently pursuing my MEng in Electrical & Computer Engineering with a 
                            specialization in Software Engineering at the University of Calgary. I’m currently working as a UI/UX Designer 
                            and Frontend Developer Intern, where I focus on creating intuitive interfaces and building responsive, 
                            user-centered applications.
                        </p>

                        <p>
                            My professional interests include full-stack development, thoughtful UI/UX design, and developing modern digital 
                            products that blend strong engineering principles with meaningful user experiences. I enjoy working across the stack, 
                            from building clean and accessible frontend components in React to developing scalable backend functionality. I’m always 
                            looking for opportunities to expand my expertise and refine my skills.
                        </p>

                        <p>
                            Outside of my technical work, I volunteer with APEGA’s Work Readiness Advisory Group, contributing to initiatives 
                            that support the growth and development of future engineers. I’m passionate about building solutions that are reliable, 
                            visually engaging, and aligned with real user needs. Feel free to explore my projects for a closer look at what I enjoy building.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;
