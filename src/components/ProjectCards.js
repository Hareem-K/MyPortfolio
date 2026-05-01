import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCards.css';
import projects from './projectData';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'Gen AI & Agents' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'frontend', label: 'Frontend / UI' },
  { key: 'backend', label: 'Backend & Data' },
];

const CATEGORY_META = {
  ai:        { label: 'Gen AI',     className: 'tag--ai' },
  fullstack: { label: 'Full-Stack', className: 'tag--full' },
  frontend:  { label: 'Frontend',   className: 'tag--fe' },
  backend:   { label: 'Backend',    className: 'tag--be' },
  data:      { label: 'Data',       className: 'tag--data' },
};

function ProjectTag({ category }) {
  const meta = CATEGORY_META[category];
  if (!meta) return null;
  return <span className={`proj-tag ${meta.className}`}>{meta.label}</span>;
}

function FeaturedCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const thumb = project.images?.[0] || project.src;

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`feat-card ${visible ? 'feat-card--visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="feat-card__img-wrap">
        {thumb
          ? <img src={thumb} alt={project.label} className="feat-card__img" />
          : <div className="feat-card__img-placeholder" />
        }
      </div>
      <div className="feat-card__body">
        <div className="feat-card__tags">
          {project.categories?.map(c => <ProjectTag key={c} category={c} />)}
        </div>
        <h3 className="feat-card__title">{project.label}</h3>
        <p className="feat-card__summary">{project.summary}</p>
        <div className="feat-card__tech">
          {project.tech?.slice(0, 4).map(t => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
        <span className="feat-card__cta">View project →</span>
      </div>
    </Link>
  );
}

function MiniCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const thumb = project.images?.[0] || project.src;

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`mini-card ${visible ? 'mini-card--visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {thumb && (
        <div className="mini-card__img-wrap">
          <img src={thumb} alt={project.label} className="mini-card__img" />
        </div>
      )}
      <div className="mini-card__body">
        <div className="mini-card__tags">
          {project.categories?.slice(0, 2).map(c => <ProjectTag key={c} category={c} />)}
        </div>
        <h4 className="mini-card__title">{project.label}</h4>
        <p className="mini-card__summary">{project.summary}</p>
        <div className="mini-card__tech">
          {project.tech?.slice(0, 3).map(t => (
            <span key={t} className="tech-pill tech-pill--sm">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ProjectCards() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(p =>
    activeFilter === 'all' || p.categories?.includes(activeFilter)
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const restProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="projects-page">
      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-body">
        {featuredProjects.length > 0 && (
          <section className="projects-section">
            <div className="section-heading">
              <span className="section-label">Featured</span>
              <span className="section-count">{featuredProjects.length} project{featuredProjects.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="feat-grid">
              {featuredProjects.map((p, i) => (
                <FeaturedCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {restProjects.length > 0 && (
          <section className="projects-section">
            <div className="section-heading">
              <span className="section-label">{featuredProjects.length > 0 ? 'More projects' : 'All projects'}</span>
              <span className="section-count">{restProjects.length} project{restProjects.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="mini-grid">
              {restProjects.map((p, i) => (
                <MiniCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <p>No projects in this category yet — check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
