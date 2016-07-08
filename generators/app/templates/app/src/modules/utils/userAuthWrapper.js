import {isNull} from 'lodash';

import {UserAuthWrapper} from 'redux-auth-wrapper';
import {push} from 'react-router-redux';

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.getIn(['user']),
  predicate: user => !isNull(user.get('authToken')),
  redirectAction: push,
  wrapperDisplayName: 'requireAuthentication'
});

export const requireAnonymous = UserAuthWrapper({
  authSelector: state => state.getIn(['user']),
  predicate: user => isNull(user.get('authToken')),
  redirectAction: push,
  wrapperDisplayName: 'requireAnonymous',
  failureRedirectPath: '/dashboard',
  allowRedirectBack: false
});
