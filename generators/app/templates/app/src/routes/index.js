import React from 'react';
import {Route} from 'react-router';

import App from './app.container';
import Welcome from './welcome';

export default (
  <Route path="/" component={App}>
    {Welcome}
  </Route>
);
