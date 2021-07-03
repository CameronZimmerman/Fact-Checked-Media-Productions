import React from 'react';

import style from './CircularImageText.css';

function CircularImageText({image, text}) {
  return (
    <div className={style.circularImageText}>
      <div className={style.circularImageTextImage}>
        <img src ={image} alt="CircularImageText"/>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default CircularImageText;
