// MoreInfo.js
import React from 'react';
import './MoreInfo.css'

function MoreInfo() {
    return (
        <div id="more-info">
            <h2>About Me</h2>
            <img
                className="image"
                src="https://i.postimg.cc/SNJFPCpS/photo.png"
                alt="Hareem Khan"
            />
            <p>
                *GASP!* You really want to know more about me? I'm flattered, truly. Like I said, I am a fourth-year Software Engineering 
                student with expertise in both front-end and back-end technologies. I specialize in creating efficient, scalable solutions 
                that prioritize usability and functionality. My technical skills include JavaScript (React.js & Node.js), CSS/HTML, Python, 
                Java, SQL, and C/C++. Now what does this mean? It means I have the ability to tackle challenges across the full software stack. 
                I thrive on solving complex problems, collaborating with others, and leveraging technology to make a meaningful impact. Enough
                about me though, explore my work and see it in action!
            </p>

            
        </div>
    );
}

export default MoreInfo;
