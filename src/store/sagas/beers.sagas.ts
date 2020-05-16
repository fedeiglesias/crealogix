import { takeLatest, put } from 'redux-saga/effects'

import { BeersActionTypes } from '../actions/beersActions'

function* loadBeersAsync () {
  yield put({ type: BeersActionTypes.LOADING_BEERS })

  const req = yield fetch(
    'https://api.punkapi.com/v2/beers'
  ).then(res =>
    res.json().then(data => ({
      ok: res.ok,
      data
    }))
  )

  if (req.ok) {
    yield put({
      type: BeersActionTypes.LOADED_BEERS,
      payload: req.data
    })
  } else {
    yield put({
      type: BeersActionTypes.LOADING_BEERS_FAILED
    })
  }
}

export function* watchLoadBeers () {
  yield takeLatest(
    BeersActionTypes.LOAD_BEERS,
    loadBeersAsync
  )
}
