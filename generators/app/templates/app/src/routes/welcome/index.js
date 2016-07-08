import React from 'react';
import {IndexRoute} from 'react-router';

import Welcome from './welcome.container';
import {requireAnonymous} from '../../modules/utils';

export default (
  <IndexRoute component={requireAnonymous(Welcome)} />
);
