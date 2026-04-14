import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../App.css';
import './ProjectDetail.css';
import Footer from '../Footer';
import projects from '../projectData';
import { Button } from '../Button';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.slug === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <div className="project-detail-not-found">
          <h1>Project not found</h1>
          <p>Return to the project list and choose a different item.</p>
          <Link to="/projects" className="project-detail-back-link">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="project-detail-hero">
        <div className="project-detail-hero-content">
          <h1>{project.label}</h1>
          <p>{project.summary}</p>
        </div>
      </div>

      <div className="project-detail-page">
        <div className="project-detail-main">
          <div className="project-detail-media">
            <img
              src={project.images && project.images.length > 0 ? project.images[0] : project.src}
              alt={`${project.label} screenshot`}
            />
          </div>

          <div className="project-detail-content">
            <h2>Overview</h2>
            <p>{project.description}</p>

            {project.tech && project.tech.length > 0 && (
              <div className="project-detail-tech">
                <strong>Tech stack:</strong> {project.tech.join(' · ')}
              </div>
            )}

            <div className="project-detail-buttons">
              {project.siteUrl && (
                <Button buttonStyle="btn--credential" buttonSize="btn--large" linkTo={project.siteUrl} external>
                  View Website
                </Button>
              )}
              {project.githubUrl && (
                <Button buttonStyle="btn--outline" buttonSize="btn--large" linkTo={project.githubUrl} external>
                  View GitHub
                </Button>
              )}
            </div>

            <Link to="/projects" className="project-detail-back-link">
              ← Back to all projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
