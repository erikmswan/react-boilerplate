import * as React from 'react';
import { getLocationType } from 'state/modules/location/selectors';
import {
  Welcome,
  mapStateToProps
} from '../Welcome';

jest.mock('state/modules/location/selectors');

describe('components/Welcome', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<Welcome />);

      expect(result).toMatchSnapshot('Welcome');
    });
  });

  describe('class methods', () => {

    const changeScreen = () => {
      const result = shallow(<Welcome />);

      expect(result.state('screen')).toEqual(result.instance().defaultScreen);

      const testScreen = 'yes';
      result.instance().changeScreen(testScreen)();
      expect(result.state('screen')).toEqual(testScreen);
      return result;
    };

    describe('changeScreen', () => {
      it('should change the screen state', () => {
        changeScreen();
      });
    });

    describe('changeToDefaultScreen', () => {
      it('should change the screen back to the default state', () => {
        const result = changeScreen();

        result.instance().changeToDefaultScreen();
        expect(result.state('screen')).toEqual(result.instance().defaultScreen);
      });
    });
  });
});
