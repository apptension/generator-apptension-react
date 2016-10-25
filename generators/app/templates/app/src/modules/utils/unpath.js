import reduce from 'lodash/reduce';
import isObject from 'lodash/isObject';
import isObjectLike from 'lodash/isObjectLike';
import isEmpty from 'lodash/isEmpty';

/**
 * Function that makes plain object from nested object.
 * @example
 *   input:
 *   {
 *     app: {
 *       welcome: {
 *         title: 'title'
 *       },
 *       dashboard: {
 *         title: 'dashboard title',
 *         subtitle: 'sub title'
 *       }
 *     }
 *   }
 *
 *   output:
 *   {
 *     'app.welcome.title': 'title',
 *     'app.dashboard.title': 'dashboard title',
 *     'app.dashboard.subtitle': 'sub title'
 *   }
 *
 * @param  {Object} obj              object to unpath
 * @param  {String} [prefix='']      prefix for object keys
 * @param  {Object} [accumulator={}] object to save modified keys and its values
 * @return {Object}
 */
export default function unpath(obj, prefix = '', accumulator = {}) {
  if (!isObjectLike(obj)) {
    throw new TypeError('unpath function: first argument must be an object');
  }
  return reduce(obj, (result, val, key) => {
    const currentKeyName = isEmpty(prefix) ? key : `${prefix}.${key}`;
    if (isObject(val)) {
      return unpath(val, currentKeyName, accumulator);
    }
    accumulator[currentKeyName] = val;
    return {...result, [currentKeyName]: val};
  }, accumulator);
}
