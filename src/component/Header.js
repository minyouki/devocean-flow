import React from 'react';
import logo from '../images/logo_web.png';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Devocean Logo" className="logo" />
			<div className='image-container'>
				<img src={'https://devocean.sk.com/resource/images/external/techhub/bg_sec_visual06.png'} style={{width:'100%'}} />
			</div>
    </header>
  );
};

export default Header;
