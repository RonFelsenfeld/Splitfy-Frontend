import { createStore, combineReducers } from 'redux'

import { groupReducer } from './reducers/group.reducer'
import { systemReducer } from './reducers/system.reducer'

const rootReducer = combineReducers({
  groupModule: groupReducer,
  systemModule: systemReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined

export const store = createStore(rootReducer, middleware)
