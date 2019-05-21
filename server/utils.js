/* eslint-disable new-cap */
const CryptoJS = require('crypto-js');
const {MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY} = require('./constants');

/**
 * Get auth query parameters for Marvel api
 * @return {String}
 */
const getAuthentication = module.exports.getAuthentication = () => {
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(
    `${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`
  ).toString(CryptoJS.enc.Hex);

  return `apikey=${MARVEL_PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`;
};

module.exports.onProxyReq = proxyReq => {
  proxyReq.path += `&${getAuthentication()}`;
};
