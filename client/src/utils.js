/*eslint-disable new-cap*/
import querystring from 'querystring';
import {PAGINATION_DEFAULT_LIMIT} from './constants';

/**
 * Get the search query for api
 * @param  {Number} page
 * @param  {Number} limit
 * @return {String}
 */
export function getQuery (page, limit = PAGINATION_DEFAULT_LIMIT) {
  const query = {
    limit,
    'offset': (page - 1) * limit
  };

  return querystring.stringify(query);
}
