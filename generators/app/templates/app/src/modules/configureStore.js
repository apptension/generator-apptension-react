import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {apiMiddleware} from 'redux-api-middleware';
import {fromJS, Map} from 'immutable';

import reducers from './reducers';
import {apiErrorResponseMiddleware} from './api/apiErrorResponse.middleware';
import {analyticsMiddleware} from './analytics';

const middleware = [
  thunk,
  apiMiddleware,
  routerMiddleware(browserHistory),
  analyticsMiddleware,
  apiErrorResponseMiddleware
];
const storeEnhancers = [];

if (__DEBUG__) {
  let {persistState} = require('redux-devtools');
  middleware.push(createLogger());

  const getDebugSessionKey = () => {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
  };

  Array.prototype.push.apply(storeEnhancers, [
    require('../widgets/devtools/devTools.component.js').instrument(),
    persistState(getDebugSessionKey(), (state) => fromJS(state))
  ]);
}

export default function configureStore() {
  const store = createStore(
    reducers,
    Map(),
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
