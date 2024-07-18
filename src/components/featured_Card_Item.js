import React from 'react';
import { Link } from 'react-router-dom';

function Featured_Card_Item(props) {
  const openLink = (e, url) => {
    e.preventDefault();

    if (props.openInNewTab) {
      const newWindow = window.open(url, '_blank', 'noopener noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }
    } else {
      window.location.href = url;
    }
  };

  return (
    <>
      <li className="featured_cards__item">
        <Link className="featured_cards__item__link" to={props.path} onClick={(e) => openLink(e, props.path)}>
            <figure className='featured_cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt="" className='featured_cards__item__img' />
            </figure>
            <div className='featured_cards__item__info'></div>
            <h5 className='featured_cards__item__text'>{props.text}</h5>
        </Link>
      </li>
    </>
  )
}

export default Featured_Card_Item