import CryptoJS from 'crypto-js';
import {MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY} from './constants';

/**
 * Get auth query parameters for Marvel api
 * @return {String}
 */
export function getAuthentication () {
  const timestamp = Date.now();
  const hash = CryptoJS.MD5( //eslint-disable-line
    `${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`
  ).toString(CryptoJS.enc.Hex);

  return `apikey=${MARVEL_PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`;
}
