// Resume.js
import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../Resume.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Resume() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const downloadLink =
    'https://drive.google.com/file/d/1RTFkx5pG3rKWK7wd4ZqK0q-x1pCOUR9L/view?usp=sharing';

  const highlights = [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Projects Completed', value: '14+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Awards & Credentials', value: '7' },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Figma', 'CSS'] },
    { category: 'Backend', items: ['Node.js', 'Java', 'Python', 'SQL', 'AWS'] },
    { category: 'Tools', items: ['Git', 'Jira', 'ServiceNow', 'Firebase', 'Terraform'] },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <div className={`resume-hero ${loaded ? 'resume-hero--visible' : ''}`}>
        <div className="resume-hero__eyebrow">Curriculum Vitae</div>
        <h1 className="resume-hero__name">Hareem Khan</h1>
        <p className="resume-hero__tagline">
          Software Engineer · Fullstack Developer · MEng Student
        </p>
        <div className="resume-hero__actions">
          <Button
            buttonStyle="btn--download"
            buttonSize="btn--large"
            linkTo={downloadLink}
            external
          >
            Download PDF <i className="fas fa-download" />
          </Button>
          <a
            href="https://www.linkedin.com/in/hareemzkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-hero__link"
          >
            LinkedIn <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="resume-stats">
        {highlights.map((h) => (
          <div className="resume-stats__item" key={h.label}>
            <span className="resume-stats__value">{h.value}</span>
            <span className="resume-stats__label">{h.label}</span>
          </div>
        ))}
      </div>

      {/* ── Main layout: preview + sidebar ── */}
      <div className="resume-layout">

        {/* PDF preview */}
        <div className="resume-preview-wrap">
          <div className="resume-preview-label">
            <i className="fas fa-file-pdf" /> Resume Preview
          </div>
          <div className="resume-preview-frame">
            <iframe
              src="https://drive.google.com/file/d/1RTFkx5pG3rKWK7wd4ZqK0q-x1pCOUR9L/preview"
              title="Hareem Khan Resume"
              allow="autoplay"
              className="resume-preview-iframe"
            />
          </div>
          <div className="resume-preview-footer">
            <span>For best viewing, open the full PDF</span>
            <Button
              buttonStyle="btn--credential"
              buttonSize="btn--medium"
              linkTo={downloadLink}
              external
            >
              Open Full PDF <i className="fas fa-external-link-alt" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="resume-sidebar">

          {/* Skills */}
          <div className="resume-card">
            <h3 className="resume-card__title">
              <i className="fas fa-code" /> Technical Skills
            </h3>
            {skills.map((group) => (
              <div className="resume-skill-group" key={group.category}>
                <div className="resume-skill-group__label">{group.category}</div>
                <div className="resume-skill-group__tags">
                  {group.items.map((item) => (
                    <span className="resume-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-card">
            <h3 className="resume-card__title">
              <i className="fas fa-graduation-cap" /> Education
            </h3>
            <div className="resume-edu-item">
              <div className="resume-edu-item__degree">MEng — Electrical &amp; Computer Engineering</div>
              <div className="resume-edu-item__school">University of Calgary</div>
              <div className="resume-edu-item__detail">Specialization: Software Engineering · In Progress</div>
            </div>
            <div className="resume-edu-item">
              <div className="resume-edu-item__degree">BSc — Software Engineering</div>
              <div className="resume-edu-item__school">University of Calgary</div>
              <div className="resume-edu-item__detail">Graduated 2024</div>
            </div>
          </div>

          {/* Contact */}
          <div className="resume-card">
            <h3 className="resume-card__title">
              <i className="fas fa-paper-plane" /> Get In Touch
            </h3>
            <div className="resume-contact-row">
              <i className="fas fa-envelope" />
              <a href="mailto:hareemkhan@gmail.com">hareemkhan@gmail.com</a>
            </div>
            <div className="resume-contact-row">
              <i className="fab fa-github" />
              <a href="https://github.com/Hareem-K" target="_blank" rel="noopener noreferrer">
                github.com/Hareem-K
              </a>
            </div>
            <div className="resume-contact-row">
              <i className="fab fa-linkedin" />
              <a href="https://www.linkedin.com/in/hareemzkhan" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/hareemzkhan
              </a>
            </div>
          </div>

        </aside>
      </div>

      <Footer />
    </>
  );
}
