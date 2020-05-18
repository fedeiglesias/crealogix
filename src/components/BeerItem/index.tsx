import * as React from 'react';
import { IBeerItem } from '../../models';
import style from './style.css';

interface IBeerItemList {
  beer: IBeerItem;
}

const BeerItem: React.FC<IBeerItemList> = ({ beer }) => {
  const trim = (text: string, length = 90): string => {
    if (text.length < length) return text;
    return text.substr(0, length).trim() + '\u2026';
  };

  return (
    <div className={style.root}>
      <div>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{trim(beer.description)}</p>
      </div>
      <img src={beer.image_url} alt={beer.name} />
    </div>
  );
};

export default BeerItem;
