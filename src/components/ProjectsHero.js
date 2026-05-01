import React from 'react';
import './ProjectsHero.css';

function ProjectsHero({ projectCount = 14, categoryCount = 5 }) {
  return (
    <div className="projects-hero">
      <div className="projects-hero__bg">
        <div className="projects-hero__wave projects-hero__wave--1" />
        <div className="projects-hero__wave projects-hero__wave--2" />
        <div className="projects-hero__wave projects-hero__wave--3" />
      </div>

      <div className="projects-hero__content">
        <h1 className="projects-hero__title">
          Projects &amp;<br /><em>experiments</em>
        </h1>
        <p className="projects-hero__sub">
          Full-stack apps, Gen AI systems, and data tools — each built to solve a real problem.
        </p>
      </div>

      <div className="projects-hero__stats">
        <div className="projects-hero__stat">
          <span className="projects-hero__stat-num">{projectCount}</span>
          <span className="projects-hero__stat-label">projects</span>
        </div>
        <div className="projects-hero__stat">
          <span className="projects-hero__stat-num">{categoryCount}</span>
          <span className="projects-hero__stat-label">categories</span>
        </div>
      </div>

      <div className="projects-hero__rule" />
    </div>
  );
}

export default ProjectsHero;