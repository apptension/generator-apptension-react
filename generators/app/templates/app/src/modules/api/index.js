import envConfig from 'env-config';
import {APIResource} from './apiResource';

export default function (name) {
  return new APIResource({
    name,
    baseURL: envConfig.api.baseURL
  });
}
