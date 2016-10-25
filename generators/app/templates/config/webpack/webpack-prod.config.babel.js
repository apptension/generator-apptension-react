import {createConfiguration, addUglifyJS} from 'apptension-tools';
import env from '../env/production';

import baseEvolutions from './webpack-base';

export default createConfiguration(
  addUglifyJS,

  ...baseEvolutions
)(env)({});
