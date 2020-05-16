import { IBeerItem } from '../../models'

export enum BeersActionTypes {
  LOAD_BEERS = 'beers/load',
  LOADING_BEERS = 'beers/loading',
  LOADED_BEERS = 'beers/loaded',
  LOADING_BEERS_FAILED = 'beers/loading_failed'
}

export function loadBeers (): ILoadBeersAction {
  return {
    type: BeersActionTypes.LOAD_BEERS
  }
}

export function loadingBeers (): ILoadingBeersAction {
  return {
    type: BeersActionTypes.LOADING_BEERS
  }
}

export function loadedBeers (
  beers: IBeerItem[]
): ILoadedBeersAction {
  return {
    type: BeersActionTypes.LOADED_BEERS,
    payload: beers
  }
}

export function loadingBeersFailed (): ILoadingBeersFailedAction {
  return {
    type: BeersActionTypes.LOADING_BEERS_FAILED
  }
}

// Interfaces

export interface ILoadBeersAction {
  type: BeersActionTypes.LOAD_BEERS
}

export interface ILoadingBeersAction {
  type: BeersActionTypes.LOADING_BEERS
}

export interface ILoadedBeersAction {
  type: BeersActionTypes.LOADED_BEERS
  payload: IBeerItem[]
}

export interface ILoadingBeersFailedAction {
  type: BeersActionTypes.LOADING_BEERS_FAILED
}

export type BeersAction =
  | ILoadBeersAction
  | ILoadingBeersAction
  | ILoadedBeersAction
  | ILoadingBeersFailedAction
