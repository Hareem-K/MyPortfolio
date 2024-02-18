// Projects.js
import React, { useEffect } from 'react';
import '../../App.css';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';

export default function Projects() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className='projects'>PROJECTS</h1>
            <ProjectCards />
            <Footer />
        </>
    );
}