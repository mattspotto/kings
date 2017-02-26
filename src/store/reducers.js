import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { default as settings } from 'routes/Settings/modules/settings';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    settings,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
