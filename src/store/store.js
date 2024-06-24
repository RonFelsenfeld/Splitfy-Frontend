import { createStore, combineReducers } from 'redux'

import { groupReducer } from './reducers/group.reducer'

const rootReducer = combineReducers({
  groupModule: groupReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined

export const store = createStore(rootReducer, middleware)
