import { toHome } from '../routesMap';

describe('routes/routesMap', () => {
  describe('toHome', () => {
    it('should return the HOME action object', () => {
      expect(toHome()).toEqual({ type: 'HOME' });
    });
  });
});
