// Projects.js
import React from 'react';
import '../../App.css';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';

export default function Projects() {
    return (
        <>
            <h1 className='projects'>PROJECTS</h1>
            <ProjectCards />
            <Footer />
        </>
    );
}