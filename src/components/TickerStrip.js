import React from 'react';
import './TickerStrip.css';

const ITEMS = [
  'React', 'TypeScript', 'UI/UX Design', 'Figma', 'Node.js',
  'Full-Stack Development', 'Python', 'AWS', 'Tailwind CSS',
  'SQL', 'Java', 'REST APIs', 'Agile', 'Accessibility',
];

function TickerStrip() {
  // Duplicate for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrapper" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TickerStrip;