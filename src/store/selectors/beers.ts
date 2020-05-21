import { createSelector } from 'reselect';
import { IState } from 'store/reducers';
import { IBeerItem } from 'models';

const selectAllBeers = (state: IState): IBeerItem[] =>
  state.beers.data;
const selectBeersFilters = (state: IState) =>
  state.beers.filters;
const selectBeersPagination = (state: IState) =>
  state.beers.pagination;

export const selectBeerByBrewDate = (
  mode: 'newest' | 'oldest'
) =>
  createSelector(selectAllBeers, allBeers => {
    if (!allBeers.length)
      return { first_brewed: new Date() } as IBeerItem;
    return allBeers.reduce((prev, curr) => {
      if (mode === 'oldest')
        return prev.first_brewed < curr.first_brewed
          ? prev
          : curr;
      return prev.first_brewed > curr.first_brewed
        ? prev
        : curr;
    });
  });

export const selectBeersFiltered = createSelector(
  [selectAllBeers, selectBeersFilters],
  (allBeers, allFilters) =>
    allBeers.filter(
      beer =>
        (allFilters.from
          ? beer.first_brewed >= allFilters.from
          : true) &&
        (allFilters.to
          ? beer.first_brewed <= allFilters.to
          : true)
    )
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
