import React, { useEffect } from 'react';
import '../../App.css';
import '../Experience.css';
import Footer from '../Footer';
import ExperienceSlideshow from '../ExperienceSlideshow';
import AwardsSlideshow from '../AwardsSlideshow';

export default function Experience() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className='experience'>EXPERIENCE</h1>

            <div className='work'>
                <h1 style={{ marginTop: '10px', textDecoration: 'underline' }}> 📈Work Experience</h1>
                <ExperienceSlideshow />

            </div>

            <div className='credentials'>
                <h1 className='awards-title'>🏆Awards and Credentials</h1>
                <AwardsSlideshow />
            </div>

            <div className='courses'>
                <h1 style={{ marginTop: '10px', textDecoration: 'underline', textAlign: 'center' }}> 🏫Education</h1>
                <div className="text-container">
                    <div className="experience-item">
                        <h2 className="education-title">B.Sc Software Engineering  | Schulich School of Enigneering, University of Calgary <span className="edu_date">Sept 2021 - Present</span></h2>
                        <ul className="circle-list">
                            <h4 className='Study_Abroad_Title'>Study Abroad | University of Cambridge & London, England <span className="small_date">Feb 2025</span></h4>
                            <ul className="circle-list">
                                <li>Set to explore the field of software engineering through visits to Bletchley Park, the Centre for Computing History, and the National Museum of Computing, delving into the historical impact of computing</li>
                                <li>Will engage with the University of Cambridge's Engineering Department, on-campus museums, and Cambridge Colleges to gain insights into academic and technological advancements.</li>
                                <li>Scheduled industry visits include leading companies such as Toshiba, Microsoft, and Wayve, offering a unique perspective on innovations in computing and engineering.</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                
            </div>

                

            <Footer />
        </>
    );
}
