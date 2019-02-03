import {
  getPlaceholderData, getPlaceholderByLocationType
} from '../selectors';
import { getLocationType } from 'state/modules/location/selectors';

jest.mock('state/modules/location/selectors');
getLocationType.mockImplementation(() => 'test');

describe('placeholder/selectors', () => {
  describe('getPlaceholderData', () => {
    it('should get the placeholder data', () => {
      const testState = { placeholder: { data: 'test' } };
      const result = getPlaceholderData(testState);

      expect(result).toEqual(testState.placeholder.data);
    });
  });

  describe('getPlaceholderByLocationType', () => {
    const testState = {
      placeholder: {
        data: [{ id: 1, locationType: 'test' }]
      }
    };
    const result = getPlaceholderByLocationType(testState);

    expect(result).toEqual(testState.placeholder.data);
  });
});