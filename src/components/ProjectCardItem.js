import React from 'react';
import { Link } from 'react-router-dom';
import './project_card.css';

function ProjectCardItem({ images, src, label, summary, slug }) {
  const imageList = images && images.length > 0 ? images : src ? [src] : [];
  const detailPath = `/projects/${slug}`;

  return (
    <li className="Project_cards__item">
      <Link className="Project_cards__item__link" to={detailPath}>
        <figure className="Project_cards__item__pic-wrap" data-category={label}>
          {imageList.length > 0 ? (
            <img
              src={imageList[0]}
              alt={`${label} screenshot`}
              className="Project_cards__item__img"
            />
          ) : (
            <div className="Project_cards__item__placeholder">No image available</div>
          )}
        </figure>
        <div className="Project_cards__item__info">
          <h3 className="Project_cards__item__label">{label}</h3>
          <p className="Project_cards__item__text">{summary}</p>
        </div>
      </Link>
    </li>
  );
}

export default ProjectCardItem;
