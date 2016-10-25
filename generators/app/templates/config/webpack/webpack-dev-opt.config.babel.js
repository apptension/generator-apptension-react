import {createConfiguration, addHMRSupport} from 'apptension-tools';
import env from '../env/developmentOptimized';

import baseEvolutions from './webpack-base';

export default createConfiguration(
  addHMRSupport,
  ...baseEvolutions
)(env)({});
