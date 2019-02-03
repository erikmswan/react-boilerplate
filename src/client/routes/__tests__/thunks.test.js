import { setPlaceholder } from 'state/actions';
import { getPlaceholder } from 'state/selectors';
import placeholderStub from 'stubs/placeholder.json';
import {
  fetchPlaceholder
} from '../thunks';

jest.mock('state/modules/placeholder/actions');
jest.mock('state/modules/placeholder/selectors');

setPlaceholder.mockImplementation(arg => arg);

describe('routes/thunks', () => {
  describe('fetchPlaceholder', () => {
    it('should fetch a placeholder if there is none', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      
      return fetchPlaceholder(dispatch, getState).then(() => {
        expect(dispatch).toHaveBeenCalledWith(placeholderStub);
      });
    });

    it('should not fetch a placeholder if there is one', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();

      getPlaceholder.mockImplementation(() => 'placeholder');
      
      return fetchPlaceholder(dispatch, getState).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
    });
  });
});
