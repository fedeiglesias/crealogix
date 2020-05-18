import * as React from 'react';
import style from './style.css';

import Header from '../Header';
import BeerList from '../BeerList';

const App: React.FC<{}> = () => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.content}>
        <BeerList />
      </div>
    </div>
  );
};

export default App;
