import React from 'react';

import style from './CaptionedImage.css';
const CaptionedImage = ({image, heading, text}) => {
  return (
    <div className={style.container}>
      <img src={image} alt={heading} />
      <div className={style.overlay}>
        <h4>{heading}</h4>
        <p>{text}</p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default CaptionedImage;
