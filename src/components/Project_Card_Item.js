import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './project_card.css'

function Project_Card_Item(props) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const openLink = (e, url) => {
    e.preventDefault();
    const newWindow = window.open(url, '_blank', 'noopener noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const handleClick = (e) => {
    // Close all other expanded projects
    const cards = document.querySelectorAll('.Project_cards__item__link');
    cards.forEach(card => {
      if (card !== e.currentTarget) {
        card.classList.remove('expanded');
      }
    });

    // Toggle expand for the clicked project
    setExpanded(!expanded);
  };

  return (
    <>
      <li className={`Project_cards__item ${expanded ? 'expanded' : ''}`}>
        <div className="Project_cards__item__link" onClick={handleClick}>
          <figure
            className='Project_cards__item__pic-wrap'
            data-category={props.label}
          >
            <img src={props.src} alt="" className='Project_cards__item__img' />
          </figure>
          <div className='Project_cards__item__info'></div>
          <h5 className='Project_cards__item__text'>
            {expanded ? props.text : `${props.text.slice(0, 120)}...`}
          </h5>
          {expanded && (
            <button className='GitHub-Button' onClick={(e) => openLink(e, props.path)}>
                <i className='fab fa-github' /> GitHub Repo
            </button>
          )}
        </div>
      </li>
    </>
  );
}

export default Project_Card_Item;
