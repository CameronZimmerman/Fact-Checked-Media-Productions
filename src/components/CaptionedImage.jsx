import React from 'react';

import style from '';
const CaptionedImage = ({image, heading, text}) => {
  return (
    <div className={style.container}>
      <image src={image} alt={heading} />
      <div className={style.overlay}>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CaptionedImage;
