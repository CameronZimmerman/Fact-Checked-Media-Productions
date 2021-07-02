import React from 'react';
import style from './Work.css';

import ServicesIcon from '../ServicesIcon';

const Work = () => {
  return (
    <div className={style.workPageContainer}>
      <div className ={style.serviceContainer}>
        <ServicesIcon icon="/assets/podcast.svg" text="Full episode workups" />
        <ServicesIcon icon="/assets/ad.svg" text="Building ads with occasional reads" />
        <ServicesIcon icon="/assets/editing.svg" text="Audio and video editing" />
        <ServicesIcon icon="/assets/social-media.svg" text="Comprehensive social media management" />
      </div>
      <div className={style.experienceContainer}>
        
      </div>
    </div>
  );
};

export default Work;
