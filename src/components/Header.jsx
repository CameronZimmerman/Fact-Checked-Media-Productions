import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import style from './Header.css';

const Header = () => {
  const history = useHistory();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className={style.header}>
      <section onClick={() => history.push('/')}>
        <img
          src="/assets/FactCheckedCropped.png"
          alt="Fact checked media productions"
        />
        <h1>FACT CHECKED MEDIA PRODUCTIONS</h1>
      </section>
      <nav>
        <div className={style.hamburger}>
          <img
            src="/assets/hamburger.png"
            alt="menu button"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          />
          {hamburgerOpen && (
            <div className={`${style.hamMenu} ${style.links}`}>
              <Link to="/Work">Work</Link>
              <Link to="/YourVoice">Your Voice</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          )}
        </div>
        <div className={`${style.regMenu} ${style.links}`}>
          <Link to="/Work">Work</Link>
          <Link to="/YourVoice">Your Voice</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
