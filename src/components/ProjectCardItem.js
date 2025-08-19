// src/components/ProjectCardItem.jsx
import React, { useState, useRef, useEffect } from 'react';
import './project_card.css';

function ProjectCardItem({
  images,
  src,
  text,
  label,
  githubUrl,
  siteUrl,
  openInNewTab,
}) {
  const [expanded, setExpanded] = useState(false);     // for inline preview text expand/collapse
  const [index, setIndex] = useState(0);               // shared slider index
  const [isModalOpen, setIsModalOpen] = useState(false);
  const targetBlank = openInNewTab !== false;
  const imageList = (images && images.length > 0) ? images : (src ? [src] : []);
  const hasSlider = imageList.length > 1;

  const touchStartX = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [isModalOpen]);

  // Global key handling when modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (hasSlider && e.key === 'ArrowRight') setIndex(i => (i + 1) % imageList.length);
      if (hasSlider && e.key === 'ArrowLeft') setIndex(i => (i - 1 + imageList.length) % imageList.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isModalOpen, hasSlider, imageList.length]);

  const openLink = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    if (!url) return;
    if (targetBlank) {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (w) w.opener = null;
    } else {
      window.location.href = url;
    }
  };

  const handleToggle = () => setExpanded(prev => !prev);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (expanded && hasSlider) {
      if (e.key === 'ArrowRight') next(e);
      if (e.key === 'ArrowLeft') prev(e);
    }
  };

  const prev = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIndex(i => (i - 1 + imageList.length) % imageList.length);
  };

  const next = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIndex(i => (i + 1) % imageList.length);
  };

  // Basic touch swipe (card-level)
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!hasSlider || touchStartX.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) diff < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const showButtons = Boolean(githubUrl || siteUrl);
  const preview = text.length > 140 ? `${text.slice(0, 140)}…` : text;

  return (
    <>
      <li className={`Project_cards__item ${expanded ? 'expanded' : ''}`}>
        <div
          className="Project_cards__item__link"
          role="button"
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={expanded}
          aria-label={`Project: ${label}. ${expanded ? 'Collapse' : 'Expand'} details.`}
        >
          <figure
            className="Project_cards__item__pic-wrap"
            data-category={label}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Expand button top-left */}
            <button
              className="Project_expandBtn"
              aria-label={`Open ${label} in expanded view`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsModalOpen(true); }}
              onMouseDown={(e) => e.preventDefault()}
              type="button"
            >
              ⤢
            </button>

            {imageList.length > 0 && (
              <div className="Project_slider">
                <img
                  src={imageList[index]}
                  alt={`${label} slide ${index + 1} of ${imageList.length}`}
                  className="Project_slider__img"
                  loading="lazy"
                />
                {hasSlider && (
                  <>
                    <button
                      className="Project_slider__arrow Project_slider__arrow--left"
                      aria-label="Previous image"
                      onClick={prev}
                      onMouseDown={(e) => e.preventDefault()}
                      type="button"
                    >
                      ‹
                    </button>
                    <button
                      className="Project_slider__arrow Project_slider__arrow--right"
                      aria-label="Next image"
                      onClick={next}
                      onMouseDown={(e) => e.preventDefault()}
                      type="button"
                    >
                      ›
                    </button>
                    <div className="Project_slider__dots" aria-hidden="true">
                      {imageList.map((_, i) => (
                        <span
                          key={i}
                          className={`Project_slider__dot ${i === index ? 'is-active' : ''}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </figure>

          <h5 className="Project_cards__item__text">
            {expanded ? text : preview}
          </h5>

          {expanded && showButtons && (
            <div className="Project_buttons">
              {siteUrl && (
                <button
                  className="Project-btn Project-btn--site"
                  onClick={(e) => openLink(e, siteUrl)}
                  type="button"
                >
                  <i className="fas fa-external-link-alt" aria-hidden="true" /> Website
                </button>
              )}
              {githubUrl && (
                <button
                  className="Project-btn Project-btn--github"
                  onClick={(e) => openLink(e, githubUrl)}
                  type="button"
                >
                  <i className="fab fa-github" aria-hidden="true" /> GitHub
                </button>
              )}
            </div>
          )}
        </div>
      </li>

      {/* Modal / Overlay */}
      {isModalOpen && (
        <div
          className="Project_modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} expanded view`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="Project_modal__card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="Project_modal__close"
              aria-label="Close expanded view"
              onClick={() => setIsModalOpen(false)}
              type="button"
            >
              ×
            </button>

            <div className="Project_modal__media">
              {imageList.length > 0 && (
                <div className="Project_slider Project_slider--modal">
                  <img
                    src={imageList[index]}
                    alt={`${label} slide ${index + 1} of ${imageList.length}`}
                    className="Project_slider__img Project_slider__img--contain"
                    loading="lazy"
                  />
                  {hasSlider && (
                    <>
                      <button
                        className="Project_slider__arrow Project_slider__arrow--left"
                        aria-label="Previous image"
                        onClick={prev}
                        type="button"
                      >
                        ‹
                      </button>
                      <button
                        className="Project_slider__arrow Project_slider__arrow--right"
                        aria-label="Next image"
                        onClick={next}
                        type="button"
                      >
                        ›
                      </button>
                      <div className="Project_slider__dots" aria-hidden="true">
                        {imageList.map((_, i) => (
                          <span
                            key={i}
                            className={`Project_slider__dot ${i === index ? 'is-active' : ''}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="Project_modal__body">
              <h3 className="Project_modal__title">{label}</h3>
              <p className="Project_modal__text">{text}</p>

              {(siteUrl || githubUrl) && (
                <div className="Project_buttons Project_buttons--modal">
                  {siteUrl && (
                    <button
                      className="Project-btn Project-btn--site"
                      onClick={(e) => openLink(e, siteUrl)}
                      type="button"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden="true" /> Website
                    </button>
                  )}
                  {githubUrl && (
                    <button
                      className="Project-btn Project-btn--github"
                      onClick={(e) => openLink(e, githubUrl)}
                      type="button"
                    >
                      <i className="fab fa-github" aria-hidden="true" /> GitHub
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCardItem;
