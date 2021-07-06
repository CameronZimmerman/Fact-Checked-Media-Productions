import React from 'react';

import style from './CaptionedImage.css';
const CaptionedImage = ({image, heading, text, link}) => {
  return (
    <div className={style.container}>
      <img src={image} alt={heading} />
      <div className={style.overlay}>
        <h4>{heading}</h4>
        <p>{text}</p>
        <a  className={style.button} href={link} target="_blank" rel="noreferrer">
          View more
        </a>
      </div>
    </div>
  );
};

export default CaptionedImage;
