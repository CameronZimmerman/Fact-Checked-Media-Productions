import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import style from './Header.css';

const Header = () => {
  const history = useHistory();

  return (
    <div className={style.header}>
      <section onClick={() => history.push("/")}>
        <img src="http://placekitten.com/75/75" alt="Fact checked media productions" />
        <h1>FACT CHECKED MEDIA PRODUCTIONS</h1>
      </section>
      <nav>
        <div className={style.links}>
          <Link to="/Work">Work</Link>
          <Link to="/YourVoice">Your Voice</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

