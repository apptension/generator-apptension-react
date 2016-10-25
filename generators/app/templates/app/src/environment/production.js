import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';

export default defaultsDeep({
  googleAnalytics: {
    clientID: ''
  }
}, base);
