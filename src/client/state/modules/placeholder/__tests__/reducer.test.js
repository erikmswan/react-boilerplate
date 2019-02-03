import { placeholder } from '../reducer';
import * as actions from '../actions';

describe('placeholder/reducer', () => {
  describe('default', () => {
    it('should trigger the default case', () => {
      const result = placeholder(undefined, { type: '' });

      expect(result).toMatchSnapshot('default');
    });
  });

  describe('setPlaceholderData', () => {
    it('should trigger the setPlaceholderData case', () => {
      const result = placeholder(undefined, actions.setPlaceholderData('success'));

      expect(result).toMatchSnapshot('setPlaceholderData');
    });
  });

  describe('clearPlaceholderData', () => {
    it('should trigger the clearPlaceholderData case', () => {
      const result = placeholder(undefined, actions.clearPlaceholderData());

      expect(result).toMatchSnapshot('clearPlaceholderData');
    });
  });
});