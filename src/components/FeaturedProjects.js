import React, { useEffect, useRef, useState } from 'react';
import './FeaturedProjects.css';
import FeaturedCardItem from './FeaturedCardItem';
import { Link } from 'react-router-dom';

function FeaturedProjects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`featured_cards ${visible ? 'featured--visible' : ''}`} ref={ref}>
      <div className='featured'>

        <div className="featured_header">
          <div className="featured_header_left">
            <div className="featured_accent_line"></div>
            <span className="featured_eyebrow">Selected Work</span>
          </div>
          <h1 className='featured_text'>Featured Projects</h1>
        </div>

        <div className='featured_cards__container'>
          <div className='featured_cards__wrapper'>
            <ul className='featured_cards__items'>
              <li className="featured_card_wrap" style={{ transitionDelay: '0ms' }}>
                <FeaturedCardItem
                  src="images/lalalu.png"
                  text="A full-stack spa and laser treatment website built with React, TypeScript, and Tailwind CSS. It features a..."
                  label='Lalalu Skin & Laser'
                  path='/projects/lalalu-skin-laser'
                  openInNewTab={false}
                />
              </li>
              <li className="featured_card_wrap" style={{ transitionDelay: '120ms' }}>
                <FeaturedCardItem
                  src="images/ObituaryMaker.png"
                  text="Developed an innovative obituary maker application, empowering users to create personalized tributes..."
                  label='Obituary Maker Application'
                  path='/projects/obituary-maker'
                  openInNewTab={false}
                />
              </li>
              <li className="featured_card_wrap" style={{ transitionDelay: '240ms' }}>
                <FeaturedCardItem
                  src="images/wordle.png"
                  text="Revitalized the classic game Wordle through the implementation of Vanilla JavaScript, HTML, and CSS..."
                  label='Wordle'
                  path='/projects/wordle'
                  openInNewTab={false}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="featured_view_all">
          <Link to="/projects">View all projects →</Link>
        </div>

      </div>
    </div>
  );
}

export default FeaturedProjects;