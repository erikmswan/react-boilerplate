import * as React from 'react';
import {
  NotFound,
} from '../NotFound';

describe('components/NotFound', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<NotFound />);

      expect(result).toMatchSnapshot('NotFound');
    });
  });
});
