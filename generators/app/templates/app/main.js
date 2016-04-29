import './src/main.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import App from './src/components/App/App';
import HomePage from './src/components/HomePage/HomePage';
import DevTools from './src/components/DevTools';
import configureStore from './src/store/configureStore';

window.React = React;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const reactRoot = window.document.getElementById('react-root');

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
        </Route>
      </Router>

      <DevTools />
    </div>
  </Provider>,
  reactRoot
);
