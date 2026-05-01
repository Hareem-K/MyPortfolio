import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../App.css';
import './ProjectDetail.css';
import Footer from '../Footer';
import projects from '../projectData';
import { Button } from '../Button';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.slug === projectId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = project
    ? project.images && project.images.length > 0
      ? project.images
      : project.src
      ? [project.src]
      : []
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [projectId]);

  const handlePreviousImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleSelectImage = (index) => {
    setActiveImageIndex(index);
  };

  if (!project) {
    return (
      <>
        <div className="pd-not-found">
          <h1>Project not found</h1>
          <p>Return to the project list and choose a different item.</p>
          <Link to="/projects" className="pd-back-link">← Back to Projects</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* ── HERO ── */}
      <div className="pd-hero">
        <div className="pd-hero-inner">
          <Link to="/projects" className="pd-back-link">← All projects</Link>

          <span className="pd-eyebrow">Project</span>
          <h1 className="pd-hero-title">{project.label}</h1>
          <p className="pd-hero-summary">{project.summary}</p>

          {project.tech && project.tech.length > 0 && (
            <div className="pd-tags">
              {project.tech.map((t) => (
                <span key={t} className="pd-tag">{t}</span>
              ))}
            </div>
          )}

          <div className="pd-hero-actions">
            {project.siteUrl && (
              <Button buttonStyle="btn--credential" buttonSize="btn--large" linkTo={project.siteUrl} external>
                View live site
              </Button>
            )}
            {project.githubUrl && (
              <Button buttonStyle="btn--outline" buttonSize="btn--large" linkTo={project.githubUrl} external>
                GitHub
              </Button>
            )}
          </div>
        </div>

        {/* ── IMAGE GALLERY ── */}
        <div className="pd-gallery">
          <div className="pd-gallery-main">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${project.label} screenshot ${activeImageIndex + 1}`}
              className="pd-gallery-img"
            />
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="pd-gallery-nav pd-gallery-nav--prev"
                  onClick={handlePreviousImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="pd-gallery-nav pd-gallery-nav--next"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
                <div className="pd-gallery-counter">
                  {activeImageIndex + 1} / {galleryImages.length}
                </div>
              </>
            )}
          </div>

          {galleryImages.length > 1 && (
            <div className="pd-thumbs">
              {galleryImages.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  className={`pd-thumb ${index === activeImageIndex ? 'pd-thumb--active' : ''}`}
                  style={{ backgroundImage: `url(${src})` }}
                  onClick={() => handleSelectImage(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── CASE STUDY BODY ── */}
      <div className="pd-body">

        {/* Overview */}
        <div className="pd-section">
          <span className="pd-section-label">Overview</span>
          <h2 className="pd-section-title">About this project</h2>
          <p className="pd-section-text">{project.description}</p>
        </div>

        {/* Impact */}
        {project.impact && project.impact.length > 0 && (
          <div className="pd-section">
            <span className="pd-section-label">Impact</span>
            <div className="pd-impact-grid">
              {project.impact.map((item, i) => (
                <div key={i} className="pd-impact-card">
                  <div className="pd-impact-stat">{item.stat}</div>
                  <p className="pd-impact-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Role */}
        {project.role && (
          <div className="pd-section">
            <span className="pd-section-label">My role</span>
            <div className="pd-role-row">
              <h2 className="pd-section-title">{project.role}</h2>
              {project.roleType && (
                <span className="pd-role-badge">{project.roleType}</span>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="pd-section">
            <span className="pd-section-label">Tech stack</span>
            <div className="pd-tech-pills">
              {project.tech.map((t) => (
                <span key={t} className="pd-tech-pill">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="pd-section pd-section--actions">
          {project.siteUrl && (
            <Button buttonStyle="btn--credential" buttonSize="btn--large" linkTo={project.siteUrl} external>
              View live site
            </Button>
          )}
          {project.githubUrl && (
            <Button buttonStyle="btn--outline" buttonSize="btn--large" linkTo={project.githubUrl} external>
              View GitHub
            </Button>
          )}
          <Link to="/projects" className="pd-back-inline">← Back to all projects</Link>
        </div>

      </div>

      <Footer />
    </>
  );
}
