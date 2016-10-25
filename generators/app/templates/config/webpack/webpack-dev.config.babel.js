import {createConfiguration, addDevtool, addHMRSupport} from 'apptension-tools';
import env from '../env/development';

import baseEvolutions from './webpack-base';

export default createConfiguration(
  addDevtool('eval'),
  addHMRSupport,
  ...baseEvolutions
)(env)({});
