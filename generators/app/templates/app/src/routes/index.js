import React from 'react';
import {Route} from 'react-router';

import {App} from './app.container.js';
import HomeRoute from './home';
import RegisterRoute from './register';

export default (
  <Route path="/" component={App}>
    {HomeRoute}
    {RegisterRoute}
  </Route>
);
