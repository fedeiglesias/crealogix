import { IBeerItem } from '../../models';

export enum BeersActionTypes {
  LOAD_BEERS = 'beers/load',
  LOADING_BEERS = 'beers/loading',
  LOADED_BEERS = 'beers/loaded',
  LOADING_BEERS_FAILED = 'beers/loading_failed',
  CHANGE_PAGE = 'beers/change_page',
  SET_FILTER_BREWED_DATE_FROM = 'beers/set_filter_brewed_date_from',
  SET_FILTER_BREWED_DATE_TO = 'beers/set_filter_brewed_date_to',
}

export function loadBeers(): ILoadBeersAction {
  return {
    type: BeersActionTypes.LOAD_BEERS,
  };
}

export function loadingBeers(): ILoadingBeersAction {
  return {
    type: BeersActionTypes.LOADING_BEERS,
  };
}

export function loadedBeers(
  beers: IBeerItem[]
): ILoadedBeersAction {
  return {
    type: BeersActionTypes.LOADED_BEERS,
    payload: beers,
  };
}

export function loadingBeersFailed(): ILoadingBeersFailedAction {
  return {
    type: BeersActionTypes.LOADING_BEERS_FAILED,
  };
}

export function changePage(
  page: number
): IChangePageAction {
  return {
    type: BeersActionTypes.CHANGE_PAGE,
    payload: page,
  };
}

export function setFilterBrewedDateFrom(
  date: Date
): IsetFilterBrewedDateFromAction {
  return {
    type: BeersActionTypes.SET_FILTER_BREWED_DATE_FROM,
    payload: date,
  };
}

export function setFilterBrewedDateTo(
  date: Date
): IsetFilterBrewedDateToAction {
  return {
    type: BeersActionTypes.SET_FILTER_BREWED_DATE_TO,
    payload: date,
  };
}

// Interfaces

export interface ILoadBeersAction {
  type: BeersActionTypes.LOAD_BEERS;
}

export interface ILoadingBeersAction {
  type: BeersActionTypes.LOADING_BEERS;
}

export interface ILoadedBeersAction {
  type: BeersActionTypes.LOADED_BEERS;
  payload: IBeerItem[];
}

export interface ILoadingBeersFailedAction {
  type: BeersActionTypes.LOADING_BEERS_FAILED;
}

export interface IChangePageAction {
  type: BeersActionTypes.CHANGE_PAGE;
  payload: number;
}

export interface IsetFilterBrewedDateFromAction {
  type: BeersActionTypes.SET_FILTER_BREWED_DATE_FROM;
  payload: Date;
}

export interface IsetFilterBrewedDateToAction {
  type: BeersActionTypes.SET_FILTER_BREWED_DATE_TO;
  payload: Date;
}

export type BeersAction =
  | ILoadBeersAction
  | ILoadingBeersAction
  | ILoadedBeersAction
  | ILoadingBeersFailedAction
  | IChangePageAction
  | IsetFilterBrewedDateFromAction
  | IsetFilterBrewedDateToAction;
