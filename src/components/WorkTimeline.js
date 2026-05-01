import React, { useState } from 'react';
import './WorkTimeline.css';

const experiences = [
  {
    id: 'uofc-web-services',
    role: 'Client Services Analyst',
    org: 'University of Calgary, Web Services',
    initials: 'UCal',
    date: 'Oct 2024 – Present',
    current: true,
    description:
      'Triaging ServiceNow tickets and collaborating with clients and development teams via Jira for bug fixes and feature requests. Conducting QA testing, producing user documentation, and supporting high-priority strategic initiatives.',
    tags: ['ServiceNow', 'Jira', 'QA'],
    logo: '/images/Experience/uofc.png',
  },
  {
    id: 'campus-buddy',
    role: 'UI/UX Designer & Front End Developer Intern',
    org: 'Campus Buddy',
    initials: 'CB',
    date: 'Jun 2025 – Jan 2026',
    current: false,
    description:
      'Designed wireframes, prototypes, and design systems in Figma while developing reusable React/TypeScript components for web and mobile platforms. Collaborated with developers and stakeholders to enhance usability, optimize performance, and ensure accessible, consistent user experiences.',
    tags: ['Figma', 'React', 'TypeScript'],
    logo: '/images/Experience/campusbuddy.png',
  },
  {
    id: 'tech-start',
    role: 'UI/UX Designer & Front End Developer',
    org: 'Tech Start, University of Calgary',
    initials: 'TS',
    date: 'Oct 2024 – May 2025',
    current: false,
    description:
      'Designed intuitive UI/UX using FigJam and developed a React.js and CSS-based event hosting platform with features like personalized QR profiles, itinerary management, and AI-driven networking tools.',
    tags: ['React.js', 'FigJam', 'CSS'],
    logo: '/images/Experience/Techstart.png',
  },
  {
    id: 'prep101',
    role: 'Multiple Roles',
    org: 'Prep101',
    initials: 'P101',
    date: 'Aug 2022 – Jul 2024',
    current: false,
    logo: '/images/Experience/prep101.jpg',
    multiRole: true,
    roles: [
      {
        title: 'On Campus Operations Manager',
        date: 'Jan 2024 – Jul 2024',
        description:
          'Supervised operations staff to manage student sign-ins, ensuring smooth book pick-ups for over 100 students. Created custom prep bundles and maintained a master Excel sheet with updates from the student database.',
      },
      {
        title: 'On Campus Operations Staff',
        date: 'Aug 2022 – Jan 2024',
        description:
          'Ensured smooth prep sessions by providing study materials, creating custom prep bundles, and preparing sign-in desks to assist hundreds of students.',
      },
      {
        title: 'Online Marketer',
        date: 'Aug 2022 – Jan 2023',
        description:
          'Promoted upcoming prep sessions through Facebook, Discord, and Instagram, consistently communicating updates to students and managers to ensure alignment.',
      },
    ],
  },
  {
    id: 'uofc-digital',
    role: 'Web Content Coordinator',
    org: 'University of Calgary, Digital Experience',
    initials: 'UCal',
    date: 'Nov 2023 – Jul 2024',
    current: false,
    description:
      'Delivered 700+ web pages under scrum methodology. Enhanced user experience by updating and refining web content to ensure accuracy and aesthetic appeal. Conducted thorough QA testing to ensure flawless functionality across revamped pages.',
    tags: ['Scrum', 'QA', 'Excel'],
    logo: '/images/Experience/uofc.png',
  },
  {
    id: 'glenbow',
    role: 'Administrative & Marketing Assistant',
    org: 'Glenbow Construction',
    initials: 'GC',
    date: 'Jan 2021 – Aug 2023',
    current: false,
    description:
      'Coordinated with clients, construction workers, and suppliers while managing the company\'s expense account. Drove new business through telemarketing and social media, liaising with suppliers to ensure timely deliveries and project schedules.',
    tags: ['Admin', 'Marketing', 'Client relations'],
    logo: '/images/Experience/glenbow.png',
  },
];

function LogoAvatar({ logo, initials }) {
  const [imgError, setImgError] = useState(false);
  if (logo && !imgError) {
    return (
      <div className="wt-logo">
        <img
          src={logo}
          alt=""
          className="wt-logo__img"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }
  return (
    <div className="wt-logo wt-logo--initials">
      <span className="wt-logo__text">{initials}</span>
    </div>
  );
}

function ExperienceCard({ exp }) {
  const [activeRole, setActiveRole] = useState(0);

  if (exp.multiRole) {
    return (
      <div className="wt-card">
        <div className="wt-card__top">
          <LogoAvatar logo={exp.logo} initials={exp.initials} />
          <div className="wt-card__meta">
            <p className="wt-card__role">{exp.role}</p>
            <p className="wt-card__org">{exp.org}</p>
          </div>
          <span className="wt-card__date">{exp.date}</span>
        </div>

        <div className="wt-pills">
          {exp.roles.map((r, i) => (
            <button
              key={i}
              className={`wt-pill${activeRole === i ? ' wt-pill--active' : ''}`}
              onClick={() => setActiveRole(i)}
            >
              {r.title.replace('On Campus ', '').replace('Online ', 'Online ')}
            </button>
          ))}
        </div>

        <div className="wt-card__divider" />
        <p className="wt-card__sub-role">{exp.roles[activeRole].title}</p>
        <p className="wt-card__sub-date">{exp.roles[activeRole].date}</p>
        <p className="wt-card__desc">{exp.roles[activeRole].description}</p>
      </div>
    );
  }

  return (
    <div className="wt-card">
      <div className="wt-card__top">
        <LogoAvatar logo={exp.logo} initials={exp.initials} />
        <div className="wt-card__meta">
          <p className="wt-card__role">{exp.role}</p>
          <p className="wt-card__org">{exp.org}</p>
        </div>
        <div className="wt-card__date-wrap">
          <span className="wt-card__date">{exp.date}</span>
          {exp.current && <span className="wt-badge--current">current</span>}
        </div>
      </div>
      <div className="wt-card__divider" />
      <p className="wt-card__desc">{exp.description}</p>
      {exp.tags && exp.tags.length > 0 && (
        <div className="wt-tags">
          {exp.tags.map((tag) => (
            <span key={tag} className="wt-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorkTimeline() {
  return (
    <div className="wt-container">
      <div className="wt-timeline">
        <div className="wt-timeline__line" />
        {experiences.map((exp) => (
          <div key={exp.id} className="wt-item">
            <div className="wt-item__dot-wrap">
              <div className={`wt-item__dot${exp.current ? ' wt-item__dot--active' : ''}`} />
            </div>
            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}