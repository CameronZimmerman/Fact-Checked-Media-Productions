import React from 'react';

import style from './Testimonial.css';

function Testimonial({image, text}) {
  return (
    <div className={style.testimonial}>
      <div className={style.testimonialImage}>
        <img src ={image} alt="testimonial"/>
      </div>
      <p>"{text}"</p>
    </div>
  );
}

export default Testimonial;
