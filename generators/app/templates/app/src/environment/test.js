import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';

export default defaultsDeep({
  api: {
    mockURL: '/api'
  }
}, base);
