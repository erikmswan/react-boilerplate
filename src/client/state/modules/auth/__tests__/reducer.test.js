import { auth } from '../reducer';
import * as actions from '../actions';

describe('auth/reducer', () => {
  describe('default', () => {
    it('should trigger the default case', () => {
      const result = auth(undefined, { type: '' });

      expect(result).toMatchSnapshot('default');
    });
  });
  describe('setApiKey', () => {
    it('should trigger the setApiKey case', () => {
      const result = auth(undefined, actions.setApiKey('success'));

      expect(result).toMatchSnapshot('setApiKey');
    });
  });
});