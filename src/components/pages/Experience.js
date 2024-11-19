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
                <h1 style={{ marginTop: '10px'}}> Work Experience</h1>
                <ExperienceSlideshow />

            </div>

            <div className='credentials'>
                <h1 className='awards-title'>Awards and Credentials</h1>
                <AwardsSlideshow />
            </div>
                

            <Footer />
        </>
    );
}
