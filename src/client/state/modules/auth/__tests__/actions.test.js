import {
  setApiKey
} from '../actions';

describe('auth/actions', () => {
  describe('setApiKey', () => {
    it('should set the api key', () => {
      const testApiKey = 'test';
      const result = setApiKey(testApiKey);

      expect(result).toMatchSnapshot('setApiKey');
    });
  });
});
