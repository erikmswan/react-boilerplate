import * as React from 'react';
import {
  App,
  // mapStateToProps
} from '../App';

describe('components/App', () => {
  describe('render', () => {
    it('should render the component', () => {
      const result = shallow(<App />);

      expect(result).toMatchSnapshot('App');
    });
  });
});
