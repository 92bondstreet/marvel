import {getQuery} from './utils';

describe('Utils', () => {
  describe('#getQuery()', () => {
    it('should format the right query with default values', () => {
      const query = getQuery(1);

      expect(query).toBe('limit=20&orderBy=name&offset=0');
    });
  });
});
