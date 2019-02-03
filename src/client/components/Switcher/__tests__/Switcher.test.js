import * as React from 'react';
import { getLocationType } from 'state/modules/location/selectors';
import {
  Switcher,
  mapStateToProps
} from '../Switcher';

jest.mock('state/modules/location/selectors');

const testRoute = 'a long time ago';
const testString = 'in a galaxy far far away';
const testProps = {
  routes: {
    [testRoute]: () => testString
  },
  locationType: testRoute
};

describe('components/Switcher', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<Switcher {...testProps} />);

      expect(result).toMatchSnapshot('Switcher');
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
