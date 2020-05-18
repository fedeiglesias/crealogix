import { createSelector } from 'reselect';
import { IState } from 'store/reducers';
import { IBeerItem } from 'models';

const selectAllBeers = (state: IState): IBeerItem[] =>
  state.beers.data;
const selectBeersFilters = (state: IState) =>
  state.beers.filters;
const selectBeersPagination = (state: IState) =>
  state.beers.pagination;

// TODO: Create filters selector
export const selectBeersFiltered = createSelector(
  [selectAllBeers, selectBeersFilters],
  (allBeers, allFilters) => allBeers.filter(beer => true)
);

export const selectBeersPaginated = createSelector(
  [selectBeersFiltered, selectBeersPagination],
  (filteredBeers, paginationConfig) => {
    const from =
      (paginationConfig.page - 1) *
      paginationConfig.results;
    const to =
      from + paginationConfig.results > filteredBeers.length
        ? filteredBeers.length
        : from + paginationConfig.results;
    return filteredBeers.slice(from, to);
  }
);
