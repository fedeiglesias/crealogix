import * as React from 'react';
import style from './style.css';

const Header: React.FC<{}> = () => (
  <header className={style.root}>
    <img
      src="../../assets/logo_brew.svg"
      alt="Crealogix Brew Crafters Division"
    />
  </header>
);

export default Header;
