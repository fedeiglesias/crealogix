import React, { useEffect } from 'react';
import style from './style.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  loadBeers,
  changePage,
  setFilterBrewedDateFrom,
  setFilterBrewedDateTo,
} from '../../store/actions/beersActions';
import { IState } from '../../store/reducers';
import {
  selectBeersPaginated,
  selectBeersFiltered,
  selectBeerByBrewDate,
} from '../../store/selectors/beers';

import BeerItem from '../BeerItem';
import Pagination from '../Pagination';
import MonthSelector from '../MonthSelector';

const BeerList: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBeers());
  }, []);

  const beersTotal = useSelector(selectBeersFiltered);
  const beersToShow = useSelector(selectBeersPaginated);
  const oldestBeer = useSelector(
    selectBeerByBrewDate('oldest')
  );
  const newestBeer = useSelector(
    selectBeerByBrewDate('newest')
  );

  const { page, limit, filters } = useSelector(
    (state: IState) => ({
      page: state.beers.pagination.page,
      limit: state.beers.pagination.results,
      filters: state.beers.filters,
      loading: state.beers.loading,
    })
  );

  const changePageHandler = (page: number): void => {
    dispatch(changePage(page));
  };

  const changeDateFromHandler = (date: Date): void => {
    dispatch(setFilterBrewedDateFrom(date));
  };

  const changeDateToHandler = (date: Date): void => {
    dispatch(setFilterBrewedDateTo(date));
  };

  const renderFromSelector = () => {
    let start = oldestBeer.first_brewed;
    let end: Date | null = null;
    if (filters.to) {
      end = new Date(filters.to.getTime());
      end.setMonth(filters.to.getMonth() - 1);
    }

    if (!start || !end || !filters.from) return null;

    return (
      <MonthSelector
        label="From"
        from={start}
        to={end}
        selectedDate={filters.from}
        changeDate={changeDateFromHandler}
      />
    );
  };

  const renderToSelector = () => {
    let start: Date | null = null;
    if (filters.from) {
      start = new Date(filters.from.getTime());
      start.setMonth(filters.from.getMonth() + 1);
    }
    let end = newestBeer.first_brewed;

    if (!start || !end || !filters.to) return null;

    return (
      <MonthSelector
        label="To"
        from={start}
        to={end}
        selectedDate={filters.to}
        changeDate={changeDateToHandler}
      />
    );
  };

  return (
    <section className={style.root}>
      <div className={style.filters}>
        {renderFromSelector()}
        {renderToSelector()}
      </div>
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
