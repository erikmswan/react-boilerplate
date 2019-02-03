import {
  getApiKey
} from '../selectors';

describe('auth/selectors', () => {
  describe('getApiKey', () => {
    it('should get the api key', () => {
      const testState = { auth: { apiKey: 'test' } };
      const result = getApiKey(testState);

      expect(result).toEqual(testState.auth.apiKey);
    });
  });
});