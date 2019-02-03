import { getLocationType } from '../selectors';

describe('location/selectors', () => {
  describe('getLocationType', () => {
    it('should select the location type', () => {
      const testState = { location: { type: 'test' } };
      const result = getLocationType(testState);

      expect(result).toEqual(testState.location.type);
    });
  });
});