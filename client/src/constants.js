const {
  'REACT_APP_MARVEL_PUBLIC_KEY': MARVEL_PUBLIC_KEY,
  'REACT_APP_MARVEL_PRIVATE_KEY': MARVEL_PRIVATE_KEY
} = process.env;

export {MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY};

export const API_MARVEL_PUBLIC = 'https://gateway.marvel.com:443/v1/public';

export const PAGINATION_FIRST_PAGE = 1;
export const PAGINATION_DEFAULT_LIMIT = 20;
export const PAGINATION_DEFAULT_PROPS = {
  'pageSize': 1,
  'maxPages': 5
};
export const PAGINATION_LABELS = {
  'first': '<<',
  'last': '>>',
  'previous': '<',
  'next': '>'
};
