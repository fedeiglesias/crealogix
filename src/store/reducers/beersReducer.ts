import { ApiStatus, IBeerItem } from '../../models';
import {
  BeersAction,
  BeersActionTypes,
} from '../actions/beersActions';

export interface IBeersState {
  loading: ApiStatus;
  pagination: {
    page: number;
    results: number;
  };
  filters: {
    from: Date | null;
    to: Date | null;
  };
  data: IBeerItem[];
}

export const initialBeersState: IBeersState = {
  loading: ApiStatus.LOADING,
  pagination: {
    page: 1,
    results: 6,
  },
  filters: {
    from: null,
    to: null,
  },
  data: [],
};

export default function beersReducer(
  state: IBeersState = initialBeersState,
  action: BeersAction
): IBeersState {
  switch (action.type) {
    case BeersActionTypes.LOAD_BEERS:
    case BeersActionTypes.LOADING_BEERS:
      return { ...state, loading: ApiStatus.LOADING };

    case BeersActionTypes.LOADED_BEERS:
      return {
        ...state,
        loading: ApiStatus.LOADED,
        data: action.payload,
      };

    case BeersActionTypes.CHANGE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };

    default:
      return state;
  }
}
