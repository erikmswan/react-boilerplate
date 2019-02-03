import * as React from 'react';
import { getLocationType } from 'state/modules/location/selectors';
import {
  App,
  mapStateToProps
} from '../App';

jest.mock('state/modules/location/selectors');

describe('components/App', () => {
  describe('render', () => {
    it('should render the component', () => {
      const result = shallow(<App />);

      expect(result).toMatchSnapshot('App');
    });
  });

  describe('mapStateToProps', () => {
    it('should call the right selectors', () => {
      const testState = 'hi';
      mapStateToProps(testState);

      expect(getLocationType).toHaveBeenCalledWith(testState);
    });
  });
});
