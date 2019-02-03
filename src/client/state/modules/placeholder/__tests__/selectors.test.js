import {
  getPlaceholder
} from '../selectors';

describe('placeholder/selectors', () => {
  describe('getPlaceholder', () => {
    it('should get the placeholder data', () => {
      const testState = { placeholder: { data: 'test' } };
      const result = getPlaceholder(testState);

      expect(result).toEqual(testState.placeholder.data);
    });
  });
});