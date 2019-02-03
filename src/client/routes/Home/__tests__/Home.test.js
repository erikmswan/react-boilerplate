import * as React from 'react';
import {
  Home,
} from '../Home';

describe('components/Home', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<Home />);

      expect(result).toMatchSnapshot('Home');
    });
  });
});
