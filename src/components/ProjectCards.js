import React from 'react';
import './ProjectCards.css';
import ProjectCardItem from './ProjectCardItem';
import projects from './projectData';

function ProjectCards() {
  return (
    <div className='project_cards'>
      <div className='Project_cards__container'>
        <div className='Project_cards__wrapper'>
          <ul className='Project_cards__items'>
            {projects.map((project) => (
              <ProjectCardItem
                key={project.slug}
                images={project.images}
                src={project.src}
                label={project.label}
                summary={project.summary}
                slug={project.slug}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
