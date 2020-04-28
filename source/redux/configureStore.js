import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default function configureStore (initialState) {
  const appReducer = combineReducers(reducers);
  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  if (module.hot) { // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index').default();
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
