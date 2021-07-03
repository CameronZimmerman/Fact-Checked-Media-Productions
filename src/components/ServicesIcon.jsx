import React from 'react';
import style from './ServicesIcon.css';

function ServicesIcon({icon, text}) {
  return (
    <div className={style.service}>
      <img src={icon} alt={text} />
      <h4>{text}</h4>
    </div>
  );
}

export default ServicesIcon;
