import React from 'react';
import style from './Home.css';

import CaptionedImage from '../CaptionedImage';
import Testimonial from '../Testimonial';

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
            <img src="http://placekitten.com/200/200" alt="logo"/>
            <h2>FACT CHECKED MEDIA PRODUCTIONS</h2>
          </div>
          <div className={style.homeMainText}>
            <h3>What we do</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error adipisci dicta esse est? Nesciunt qui reiciendis assumenda accusantium officiis. Adipisci rerum, architecto magnam quod sit sed dolor eos quisquam!
              Eaque amet facere quis consectetur repellat tempore voluptas necessitatibus rem pariatur ex autem voluptatum laborum ullam atque, modi corporis facilis quas eum consequatur cum iure distinctio! Animi placeat reprehenderit beatae.
            </p>
          </div>
        </section>
      </section>
      <section className={style.lowerHome}>
        <h2>Testimonials</h2>
        <div className={style.testimonials}>
          <Testimonial image="/assets/greenlantern.jpg" text={"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"} />
          <Testimonial image="/assets/greenlantern.jpg" text={"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"} />
          <Testimonial image="/assets/greenlantern.jpg" text={"this is just a test testimonial, the final will be replaced by whatever the actual testimonial is!"} />
        </div>
      </section>
    </div>
  );
};

export default Home;
