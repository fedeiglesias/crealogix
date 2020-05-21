import * as React from 'react';
import style from './style.css';
import logo from '../../assets/logo_brew.svg';

const Header: React.FC<{}> = () => (
  <header className={style.root}>
    <img
      src={logo}
      alt="Crealogix Brew Crafters Division"
    />
  </header>
);

export default Header;
