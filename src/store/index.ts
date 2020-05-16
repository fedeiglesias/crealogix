import {
  applyMiddleware,
  createStore,
  Middleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { initialState } from './reducers'
import rootSaga from './sagas'

const composeEnhancer = composeWithDevTools({
  name: 'Crealogix App'
})

const sagaMiddleware = createSagaMiddleware()

let middleware: Array<Middleware> = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger()
  middleware = [...middleware, logger]
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store
