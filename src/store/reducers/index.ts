import { combineReducers } from 'redux'

import beersReducer, {
  IBeersState,
  initialBeersState
} from './beersReducer'

export interface IState {
  beers: IBeersState
}

export const initialState: IState = {
  beers: initialBeersState
}

export default combineReducers({
  beers: beersReducer
})
