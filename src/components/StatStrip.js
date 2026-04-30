import React, { useEffect, useRef, useState } from 'react';
import './StatStrip.css';

function useCountUp(target, duration = 1400, isActive = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive || typeof target !== 'number') return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, isActive]);

  return value;
}

function StatCard({ num, suffix = '', label, isText = false, delay = 0, isActive }) {
  const count = useCountUp(isText ? 0 : num, 1400, isActive);

  return (
    <div className="stat-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-number">
        {isText ? num : count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function StatStrip() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: 14, suffix: '+', label: 'Projects shipped', delay: 0 },
    { num: 4,  suffix: '+', label: 'Years of experience', delay: 100 },
    { num: 'MEng', label: 'Grad degree in progress', isText: true, delay: 200 },
    { num: 'UI/UX', label: 'Design-first approach', isText: true, delay: 300 },
  ];

  return (
    <div className={`stat-strip ${active ? 'stat-strip--visible' : ''}`} ref={ref}>
      {stats.map((s, i) => (
        <StatCard key={i} {...s} isActive={active} />
      ))}
    </div>
  );
}

export default StatStrip;