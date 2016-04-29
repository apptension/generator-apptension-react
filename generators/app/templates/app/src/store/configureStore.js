import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {apiMiddleware} from 'redux-api-middleware';

import reducers from '../reducers';
import DevTools from '../components/DevTools';


export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk, apiMiddleware, routerMiddleware(browserHistory), createLogger()),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
