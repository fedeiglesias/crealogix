import { IBeerItem } from '../../models';

export enum BeersActionTypes {
  LOAD_BEERS = 'beers/load',
  LOADING_BEERS = 'beers/loading',
  LOADED_BEERS = 'beers/loaded',
  LOADING_BEERS_FAILED = 'beers/loading_failed',
  CHANGE_PAGE = 'beers/change_page',
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

export type BeersAction =
  | ILoadBeersAction
  | ILoadingBeersAction
  | ILoadedBeersAction
  | ILoadingBeersFailedAction
  | IChangePageAction;
