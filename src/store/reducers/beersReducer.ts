import { ApiStatus, IBeerItem } from '../../models'
import {
  BeersAction,
  BeersActionTypes
} from '../actions/beersActions'

export interface IBeersState {
  loading: ApiStatus
  page: number
  filters: {
    from: string | null
    to: string | null
  }
  data: IBeerItem[]
}

export const initialBeersState: IBeersState = {
  loading: ApiStatus.LOADING,
  page: 1,
  filters: {
    from: null,
    to: null
  },
  data: []
}

export default function beersReducer (
  state: IBeersState = initialBeersState,
  action: BeersAction
): IBeersState {
  switch (action.type) {
    case BeersActionTypes.LOAD_BEERS:
    case BeersActionTypes.LOADING_BEERS:
      return { ...state, loading: ApiStatus.LOADING }

    case BeersActionTypes.LOADED_BEERS:
      return {
        ...state,
        loading: ApiStatus.LOADED,
        data: action.payload
      }

    default:
      return state
  }
}
