import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {apiMiddleware} from 'redux-api-middleware';
import {fromJS, Map} from 'immutable';
import persistState from 'redux-localstorage';

import reducers from './reducers';

const middleware = [
  thunk,
  apiMiddleware,
  routerMiddleware(browserHistory)
];
const storeEnhancers = [];

const persistConfig = Object.freeze({
  slicer: (paths) => (state) => state.filter((val, key) => paths.indexOf(key) > -1),
  serialize: (subset) => JSON.stringify(subset.toJS()),
  deserialize: (serializedData) => fromJS(JSON.parse(serializedData)),
  merge: (initialState, persistedState) => initialState.mergeDeep(persistedState)
});

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
      persistState(['user'], persistConfig),
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
