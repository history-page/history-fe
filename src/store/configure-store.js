import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createRouterMiddleware, initialRouterState, routerReducer } from 'connected-next-router'
import storys from './storys'
import authors from './authors'
import categorys from './categorys'
import system from './system'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
  router: routerReducer,
  storys,
  categorys,
  authors,
  system
})

export const configureStore = (initialState = {}, { isServer, asPath }) => {
  const routerMiddleware = createRouterMiddleware()

  if (isServer) {
    initialState.router = initialRouterState(asPath)
  }

  const store = createStore(rootReducer, initialState, bindMiddleware([routerMiddleware]))
  return store
}
