// Button.js
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--download', 'btn--credential', 'btn--outline-inverse'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, linkTo, external }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (external) {
    return (
      <a href={linkTo} target="_blank" rel="noopener noreferrer" className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={linkTo} className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </Link>
    );
  }
};


export default Button;