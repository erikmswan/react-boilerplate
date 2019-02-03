import {
  setPlaceholderData
} from '../actions';

describe('placeholder/actions', () => {
  describe('setPlaceholderData', () => {
    it('should get the placeholder data', () => {
      const testData = 'test';
      const result = setPlaceholderData(testData);

      expect(result).toMatchSnapshot('setPlaceholderData');
    });
  });
});
