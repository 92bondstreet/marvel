/*eslint-disable new-cap*/
import querystring from 'querystring';
import {PAGINATION_DEFAULT_LIMIT, PAGINATION_DEFAULT_ORDERBY} from './constants';

/**
 * Get the search query for api
 * @param  {Number} page
 * @param  {Number} limit
 * @return {String}
 */
export function getQuery (page, limit = PAGINATION_DEFAULT_LIMIT, orderBy = PAGINATION_DEFAULT_ORDERBY) {
  const query = {
    limit,
    orderBy,
    'offset': (page - 1) * limit
  };

  return querystring.stringify(query);
}
