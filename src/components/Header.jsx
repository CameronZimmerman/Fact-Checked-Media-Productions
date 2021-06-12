import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <section>
        <img src="http://placekitten.com/75/75" alt="Fact checked media productions" />
        <h1>FACT CHECKED MEDIA PRODUCTIONS</h1>
      </section>
      <nav>
        <Link to="/Work"/>
        <Link to="/YourVoice"/>
        <Link to="/Contact"/>
      </nav>
    </div>
  );
};

export default Header;

