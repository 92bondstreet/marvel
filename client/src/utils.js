/*eslint-disable new-cap*/
import CryptoJS from 'crypto-js';
import querystring from 'querystring';
import {
  MARVEL_PUBLIC_KEY,
  MARVEL_PRIVATE_KEY,
  PAGINATION_DEFAULT_LIMIT
} from './constants';

/**
 * Get auth query parameters for Marvel api
 * @return {String}
 */
export function getAuthentication () {
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(
    //eslint-disable-line
    `${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`
  ).toString(CryptoJS.enc.Hex);

  return `apikey=${MARVEL_PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`;
}

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
