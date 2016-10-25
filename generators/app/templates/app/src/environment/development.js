import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';

export default defaultsDeep({
  googleAnalytics: {
    options: {
      debug: true
    }
  }
}, base);
