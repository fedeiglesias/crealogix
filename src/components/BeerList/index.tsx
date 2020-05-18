import React, { useEffect } from 'react';
import style from './style.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  loadBeers,
  changePage,
} from '../../store/actions/beersActions';
import { IState } from '../../store/reducers';
import {
  selectBeersPaginated,
  selectBeersFiltered,
} from '../../store/selectors/beers';

import BeerItem from '../BeerItem';
import Pagination from '../Pagination';

const BeerList: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBeers());
  }, []);

  const beersTotal = useSelector(selectBeersFiltered);
  const beersToShow = useSelector(selectBeersPaginated);

  const { page, limit } = useSelector((state: IState) => ({
    page: state.beers.pagination.page,
    limit: state.beers.pagination.results,
    loading: state.beers.loading,
  }));

  const changePageHandler = (page: number): void => {
    dispatch(changePage(page));
  };

  return (
    <section className={style.root}>
      <div className={style.results}>
        {beersToShow.map(item => (
          <BeerItem beer={item} key={item.id} />
        ))}
      </div>
      <Pagination
        className={style.pagination}
        actualPage={page}
        totalItems={beersTotal.length}
        itemsPerPage={limit}
        sideExtraThumbs={2}
        changePage={changePageHandler}
      />
    </section>
  );
};

export default BeerList;
