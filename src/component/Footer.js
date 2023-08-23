import React from 'react';
import footer from '../images/footer.png';
import '../css/Header.css';

const Footer = () => {
  return (
    <header className="footer" style={{marginTop:'50px'}}>
      <img src={footer} style={{width:'70%'}}/>
    </header>
  );
};

export default Footer;
