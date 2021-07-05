import React from 'react';
import style from './Footer.css';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  const params = new URLSearchParams();

  const handleButtonClick = () => {
    params.delete('meeting');
    params.append('meeting', true);
    history.push('/contact');
    history.push({ search: params.toString() });
  };
  return (
    <div className={style.footer}>
      <p>
        Do you want help spreading your message? I would love to have a quick
        chat. Click <button onClick={() => handleButtonClick()}>Here</button> to set up a meeting.
      </p>
    </div>
  );
};

export default Footer;
