import React from 'react';
import style from './Home.css';

import CaptionedImage from '../CaptionedImage';
import Testimonial from '../CircularImageText';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <section className={style.upperHome}>
        <section className={style.upperHomeLeft}>
          <h2>Building platforms and community</h2>
          <div className={style.homeImages}>
            <CaptionedImage
              heading="Lions Of Liberty"
              image="/assets/LionsOfLiberty.png" 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis, adipisci officia libero cupiditate architecto eligendi "
              />
              <CaptionedImage
              heading="I am Andy's mom"
              image="/assets/AndysMom.png" 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis, adipisci officia libero cupiditate architecto eligendi "
              />
              <CaptionedImage
              heading="The Paradocs"
              image="/assets/theparadocs.png" 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis, adipisci officia "
              />
              <CaptionedImage
              heading="Counter Flow with Buck Johnson"
              image="/assets/counterflow_cover_art.jpg" 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis, adipisci officia libero cupiditate architecto eligendi "
            />
          </div>
        </section>
        <section className={style.upperHomeRight}>
          <div className={style.homeLogo}>
            <img src="/assets/FactCheckedCropped.png" alt="logo"/>
            <h2>FACT CHECKED MEDIA PRODUCTIONS</h2>
          </div>
          <div className={style.homeMainText}>
            <h3>What we do</h3>
            <p>
              Fact Checked Media Productions is an all purpose podcasting service for those who wish to spread their voice and message. We create a personal connection with each of our clients, skipping the bureaucracy. Together we will build your podcasts platform and audience, ensuring that your message is heard. Pricing is negotiable at a per show or per month basis.
            </p>
          </div>
        </section>
      </section>
      <section className={style.lowerHome}>
        <h2>Testimonials</h2>
        <div className={style.testimonials}>
          <Testimonial image="/assets/greenlantern.jpg" text={'"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"'} />
          <Testimonial image="/assets/greenlantern.jpg" text={'"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"'} />
          <Testimonial image="/assets/greenlantern.jpg" text={'"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"'} />
        </div>
      </section>
    </div>
  );
};

export default Home;
