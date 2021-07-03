import React from 'react';
import style from './Work.css';

import Experience from '../CircularImageText';
import ServicesIcon from '../ServicesIcon';

const Work = () => {
  return (
    <div className={style.workPageContainer}>
      <h2>Services</h2>
      <div className ={style.serviceContainer}>
        <ServicesIcon icon="/assets/podcast.svg" text="Full episode workups" />
        <ServicesIcon icon="/assets/ad.svg" text="Building ads with occasional reads" />
        <ServicesIcon icon="/assets/editing.svg" text="Audio and video editing" />
        <ServicesIcon icon="/assets/social-media.svg" text="Comprehensive social media management" />
      </div>
      <h2>Current Shows</h2>
      <div className={style.experienceContainer}>
        <Experience image="/assets/peddlingFiction.png" text={"lorem ipsum dorem closup vortie beun too"} />
        <Experience image="/assets/breakthecycle.jpg" text={"lorem ipsum dorem closup vortie beun too"} />
        <Experience image="/assets/theparadocs.png" text={"lorem ipsum dorem closup vortie beun too"} />
        <Experience image="/assets/counterflow_cover_art.jpg" text={"lorem ipsum dorem closup vortie beun too"} />
        <Experience image="/assets/LionsOfLiberty.png" text={"lorem ipsum dorem closup vortie beun too"} />
        <Experience image="/assets/AndysMom.png" text={"lorem ipsum dorem closup vortie beun too"} />
        </div>
    </div>
  );
};

export default Work;
