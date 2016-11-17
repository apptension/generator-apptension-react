import './src/main.scss';

import 'babel-polyfill';

import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactGA from 'react-ga';
import envConfig from 'env-config';

import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './src/modules/configureStore';
import {IntlProvider, addLocaleData} from './src/modules/utils';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// add to React-Intl locale data
addLocaleData();

const store = configureStore();
const syncedBrowserHistory = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  }
});
const reactRoot = window.document.getElementById('react-root');

if (__DEBUG__) {
  let DevToolsComponent = require('src/widgets/devtools/devTools.component');
  const devToolsRoot = window.document.createElement('div');

  window.document.body.appendChild(devToolsRoot);

  render(
    <Provider store={store}>
      <DevToolsComponent/>
    </Provider>,
    devToolsRoot
  );
}

function renderApp() {
  const routes = require('./src/routes').default;

  render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <Router history={syncedBrowserHistory} routes={routes}/>
      </IntlProvider>
    </Provider>,
    reactRoot
  );
}

function startApp() {
  ReactGA.initialize(envConfig.googleAnalytics.clientID, {
    ...envConfig.googleAnalytics.options,
    gaOptions: {
      userId: store.getState().getIn(['user', 'data', 'id'], null)
    }
  });

  renderApp();

  if (module.hot) {
    module.hot.accept('./src/routes', () => {
      unmountComponentAtNode(reactRoot);
      renderApp();
    });
  }
}

if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js'
  ], function (require) {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    startApp();
  });
} else {
  startApp();
}
