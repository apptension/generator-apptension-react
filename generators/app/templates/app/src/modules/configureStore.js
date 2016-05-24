import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {apiMiddleware} from 'redux-api-middleware';

import reducers from './reducers';

let middleware = [thunk, apiMiddleware, routerMiddleware(browserHistory)];
let storeEnhancers = [];

if (__DEBUG__) {
  middleware.push(createLogger());
  storeEnhancers.push(require('../widgets/devtools/devTools.component.js').instrument());
}

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...storeEnhancers
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
