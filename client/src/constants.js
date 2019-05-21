export const {
  'REACT_APP_MARVEL_PROXY_API': MARVEL_PROXY_API = ''
} = process.env;

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
