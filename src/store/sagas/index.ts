import { all, fork } from 'redux-saga/effects'

import { watchLoadBeers } from './beers.sagas'

export default function* root () {
  yield all([fork(watchLoadBeers)])
}
