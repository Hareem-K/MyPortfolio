import React, { useEffect } from 'react';
import '../../App.css';
import ProjectCards from '../ProjectCards';
import ProjectsHero from '../ProjectsHero';
import Footer from '../Footer';
import projects from '../projectData';

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categoryCount = 5; // All, Gen AI, Full-Stack, Frontend, Backend & Data

    return (
        <>
            <ProjectsHero
                projectCount={projects.length}
                categoryCount={categoryCount}
            />
            <ProjectCards />
            <Footer />
        </>
    );
}