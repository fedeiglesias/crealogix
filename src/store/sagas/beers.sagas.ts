import { takeLatest, put } from 'redux-saga/effects';
import { IBeerItem } from '../../models';
import {
  BeersActionTypes,
  setFilterBrewedDateFrom,
  setFilterBrewedDateTo,
} from '../actions/beersActions';

import { select } from 'redux-saga/effects';
import { selectBeerByBrewDate } from '../../store/selectors/beers';

function* loadBeersAsync() {
  yield put({ type: BeersActionTypes.LOADING_BEERS });

  const req = yield fetch(
    'https://api.punkapi.com/v2/beers'
  ).then(res =>
    res.json().then(data => ({
      ok: res.ok,
      data,
    }))
  );

  if (req.ok) {
    yield put({
      type: BeersActionTypes.LOADED_BEERS,
      // Images are mocked only for stetics porpuses
      payload: req.data.map((beer: IBeerItem) => {
        beer.image_url = `./img/items/${beer.id}.webp`;
        beer.first_brewed = new Date(
          ('10/' + beer.first_brewed).replace(
            /(\d{2})\/(\d{2})\/(\d{4})/,
            '$2/$1/$3'
          )
        );
        return beer;
      }),
    });

    // Initialize filters
    const oldestBeer = yield select(
      selectBeerByBrewDate('oldest')
    );
    const newestBeer = yield select(
      selectBeerByBrewDate('newest')
    );

    yield put(
      setFilterBrewedDateFrom(oldestBeer.first_brewed)
    );

    yield put(
      setFilterBrewedDateTo(newestBeer.first_brewed)
    );
  } else {
    yield put({
      type: BeersActionTypes.LOADING_BEERS_FAILED,
    });
  }
}

export function* watchLoadBeers() {
  yield takeLatest(
    BeersActionTypes.LOAD_BEERS,
    loadBeersAsync
  );
}
